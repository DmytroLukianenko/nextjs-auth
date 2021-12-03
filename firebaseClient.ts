import firebaseClient from "firebase/app";
import "firebase/auth";

const CLIENT_CONFIG = {
    apiKey: "AIzaSyDL3HYT3izrF5dgLSTpuRMIfQJBuHCoRKw",
    authDomain: "test-project-211910.firebaseapp.com",
    projectId: "test-project-211910",
    storageBucket: "test-project-211910.appspot.com",
    messagingSenderId: "713044430581",
    appId: "1:713044430581:web:ef848779cb0d4d91f63fbc"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
    firebaseClient.initializeApp(CLIENT_CONFIG);
    firebaseClient
        .auth()
        .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
    (window as any).firebase = firebaseClient;
}

export { firebaseClient };