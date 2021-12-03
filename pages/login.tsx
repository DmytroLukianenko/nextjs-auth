import React, { useState } from 'react';
import Link from 'next/link';
import { firebaseClient } from '../firebaseClient';
import { Form, Button, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Router from 'next/router';

const Login = (_props: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await firebaseClient.auth().signInWithEmailAndPassword(email, password)
            console.log('what?', response)
            Router.push('/private')
        } catch (error) {
            toast.error(error.code)
        }
    }

    return (
        <div>
            <Link href="/">
                <a>Go back to home page</a>
            </Link>
            <br />
            <Container fluid>
                <Form className='w-50' onSubmit={(e) => handleSubmit(e)}>
                    <Form.Control className='m-2' required type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'></Form.Control>
                    <Form.Control className='m-2' required type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password'></Form.Control>
                    <Button type='submit' className='align-items-center w-50'> Login </Button>
                </Form>
            </Container>
        </div >
    );
};

export default Login