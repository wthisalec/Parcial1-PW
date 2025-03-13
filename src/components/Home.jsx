import React from "react";
import { Link } from "react-router";

function Home() {
    return (
        <div style={{ 
            backgroundImage: `url(${require('../imagenes/fondo_comida.jpeg')})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh', 
            width: '100vw', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
        }}>
            <div style={{backgroundColor:"#0f5687",
                    padding: '20px',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '50%'}}>
                <Link to="/menu">
                    <img src={require('../imagenes/menu.jpg')} alt="menu" style={{ width: '100px', height: '100px' }} />
                
                </Link>
                <p>MENU</p>
                <Link to="/stores">
                    <img src={require('../imagenes/tienda.png')} alt="stores" style={{ width: '100px', height: '100px' }} />
                    
                </Link>
                <p>STORES</p>
                <Link to="/cart">
                    <img src={require('../imagenes/carrito.png')} alt="cart" style={{ width: '100px', height: '100px' }} />
                
                </Link>
                <p>CART</p>
            </div>
        </div>
    );
}

export default Home;