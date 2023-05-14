import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import { useState } from 'react';
import {loginUser} from '../actions/userAction';
import { useDispatch } from 'react-redux';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useDispatch();

   useEffect(() => {
    if(localStorage.getItem("currentUser")){
      window.location.href = "/";
    }
  },[])
   const loginHandler = () => {
     const user = {email, password};
     dispatch(loginUser(user));
   }

  return (
    <>
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
         value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      
      <Button variant="primary" 
        onClick={loginHandler}
      >
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default Login
