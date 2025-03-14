import React from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import './components.css';

function LoginForm() {
    const { t, i18n } = useTranslation();

    return (
        <div className="login-container">
            <Row className="login-content">
                <Col md={6} className="login-image">
                    <h2>{t("title")}</h2>
                    <p>{t("subtitle")}</p>
                    <img className="imagen_login" src={require('../imagenes/ensalada.jpeg')} alt="food" />
                </Col>
                <Col md={6} className="login-form">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>{t("username")}</Form.Label>
                            <Form.Control type="text" placeholder={t("enter_username")} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>{t("password")}</Form.Label>
                            <Form.Control type="password" maxLength={8} minLength={5} placeholder={t("enter_password")} />
                        </Form.Group>

                        <div className="button-container">
                            <Link to="/home">
                                <Button variant="primary" type="submit">
                                    {t("login")}
                                </Button>
                            </Link>
                        </div>
                        <div className="language-buttons">
                            <Button variant="outline-dark" size="sm" onClick={() => i18n.changeLanguage('en')}>English</Button>
                            <Button variant="outline-dark" size="sm" onClick={() => i18n.changeLanguage('es')}>Español</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default LoginForm;
