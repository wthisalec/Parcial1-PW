import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "title": "TOO GOOD TO GO",
      "subtitle": "FOOD WASTING SOLUTION!",
      "username": "Username:",
      "password": "Password:",
      "login": "Login",
      "menu": "Menu",
      "stores": "Stores",
      "cart": "Cart",
      "welcomeMenu": "Welcome to the Menu page!",
      "welcomeStores": "Welcome to the Stores page!",
      "welcomeCart": "Welcome to the Cart page!"

    }
  },
  es: {
    translation: {
      "title": "DEMASIADO BUENO PARA LLEVAR",
      "subtitle": "¡SOLUCIÓN PARA EL DESPERDICIO DE COMIDA!",
      "username": "Usuario:",
      "password": "Contraseña:",
      "login": "Iniciar sesión",
      "menu": "Menú",
      "stores": "Tiendas",
      "cart": "Carrito",
      "welcomeMenu": "¡Bienvenido a la página de Menú!",
      "welcomeStores": "¡Bienvenido a la página de Tiendas!",
      "welcomeCart": "¡Bienvenido a la página de Carrito!"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Idioma por defecto
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
