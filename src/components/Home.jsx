import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import "./components.css";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <div className="home-content">
                <Link to="/menu">
                    <img src={require('../imagenes/menu.jpg')} alt="menu" />
                    <p>{t("menu")}</p>
                </Link>

                <Link to="/stores">
                    <img src={require('../imagenes/tienda.png')} alt="stores" />
                    <p>{t("stores")}</p>
                </Link>

                <Link to="/cart">
                    <img src={require('../imagenes/carrito.png')} alt="cart" />
                    <p>{t("cart")}</p>
                </Link>
            </div>
        </div>
    );
}

export default Home;
