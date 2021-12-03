import React, { useState, useEffect, useContext, createContext } from "react";
import { firebaseClient } from "./firebaseClient";

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
    user: null,
});

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<firebaseClient.User | null>(null);
    useEffect(() => {

        return firebaseClient.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null);
                localStorage.removeItem('token')
                localStorage.setItem('token', '')
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            localStorage.removeItem('token')
            localStorage.setItem('token', token)
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
