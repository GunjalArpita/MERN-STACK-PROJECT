import React from 'react'
import "./SuperAdminLogin.css"
import { Container,Card,Form,Button } from 'react-bootstrap'
import {useState} from "react"

function SuperAdminLogin() {

    const[formData,setFormData]=useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted",formData);
        alert("Super Admin login successfully ")
    }
    
    return (

       <Container className="register-container">
             <Card className="register-card shadow">
               <Card.Body>
                 <h3 className="text-center mb-4">Super Admin Login</h3>
                 <Form onSubmit={handleSubmit}>
                
                   <Form.Group className="mb-3">
                     <Form.Label>Email Address</Form.Label>
                     <Form.Control
                       type="email"
                       name="email"
                       placeholder="Enter email"
                       value={formData.email}
                       onChange={handleChange}
                       required
                     />
                   </Form.Group>
       
                   <Form.Group className="mb-3">
                     <Form.Label>Password</Form.Label>
                     <Form.Control
                       type="password"
                       name="password"
                       placeholder="Enter password"
                       value={formData.password}
                       onChange={handleChange}
                       required
                     />
                   </Form.Group>
       
       
                   <div className="d-grid">
                     <Button variant="primary" type="submit">
                       Register
                     </Button>
                   </div>
                 </Form>
               </Card.Body>
             </Card>
           </Container>
       )
}

export default SuperAdminLogin
