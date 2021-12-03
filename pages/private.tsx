import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Card } from "react-bootstrap"
import { useRouter } from "next/router";

const Private = () => {
    const router = useRouter()
    const [users, setUsers] = useState<object[]>([])

    // this horrible way was used because of missing privateKey
    const checker = () => {
        const ISSERVER = typeof window === "undefined";
        if (!ISSERVER) {
            if (localStorage.token) {
                return true
            } else {
                localStorage.removeItem('token')
                router.push('/')
            }
        } else {
            return false
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers([...response.data])
        }
        getUsers()
    }, [])
    return (
        < Container >
            {checker() ?
                users.map((u: any, i: number) => {
                    return (
                        <Card key={i} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{u.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{u.username}</Card.Subtitle>
                                <Card.Text>
                                    {u.company.catchPhrase}
                                </Card.Text>
                            </Card.Body>
                        </Card>)
                })

                : 'access denied'}
            {
            }
        </Container >
    )
}
export default Private
