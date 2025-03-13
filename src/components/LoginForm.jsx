import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <div>
        <Row>
            <Col md={6}>
            <h2>TOO GOOD TO GO</h2>
            <p>FOOD WASTING SOLUTION!</p>
            <img className= "imagen_login" src={require('../imagenes/ensalada.jpeg')} alt="food"  />
            </Col>
            <Col md={6} className='container_login'>
            <form>
            <label>Username:</label>
            <input type="Username" className='custom_input'/>
            <label>Password:</label>
            <input type="password" maxLength={8} minLength={5}/>
            <div className="button-container">
                <Link to="/home">
                <Button className="primary" type="submit">Login</Button>
                </Link>
                </div>
                </form>
            </Col>
            </Row>
        </div>
    );

}

export default LoginForm;