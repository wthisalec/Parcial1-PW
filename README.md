# Parcial1-PW

# Instrucciones para ejecutar el parcial:
 0. Primero se debe instalar npm de forma forzada para que funciones la internacionalización por la versión de javascript. "npm install force" debería funcionar. si dado el caso no funciona, tendrías que instalar la librería i18next forzando las dependencias.
 1. Desde una terminal (consola) del proyecto ejecutar "npm start" como cualquier proyecto.
 2. Cuando se carge la página, en la parte inferior derecha, justo bajo el login, es posible seleccionar el idioma de la página (internacionalización) desde allí se controla todo el idioma que se va a usar.
 3. Navegar normalmente como debería funcionar la página, los botones van redirigiendo al componente necesario.

# Reporte de Decisiones y Componentes:
# - Componentes:
Dentro de la carpeta components se encuentran los siguientes componentes:
1. "LoginForm.jsx" maneja toda la página inicial, el login, la internacionalización (idioma) que se prefiera, y se permite el acceso.
2. "Home.jsx" maneja el enrutamiento hacia las tres secciones Detail que son Cart, Stores, y Menu.
3. "Cart.jsx" se supone que este componente es el detalle de carrito. Aunque en el tiempo del parcial no alcancé a desarrollarlo completamente ni poblar el mockaroo, sí responde a la internacionalización (con el texto default que le puse).
4. "Stores.jsx" se supone que es el componente de detalle de las tiendas. Aunque en el tiempo del parcial no alcancé a desarrollarlo completamente ni poblar el mockaroo, sí responde a la internacionalización (con el texto default que le puse).
5. "Menu.jsx" se supone que es el componente de detalle del menú. Aunque en el tiempo del parcial no alcancé a desarrollarlo completamente ni poblar el mockaroo, sí responde a la internacionalización (con el texto default que le puse).
6. "i18n.jsx" es el componente de internacionalización que se va a explicar a continuación.
7. "components.css" maneja los estilos de los componentes.

# - Decisiones:
Para resolver el parcial, lo que hice fue dividir las vistas que nos pedían en un componente cada uno que manejara lo que se pedía. Todas las páginas y su enrutamiento se gestiona desde "index.jsx" donde puse una url relativa a cada componente, y la navegación se hace a través de los botones que tenga el componente actual en el que se encuentra.
Las ideas del enrutamiento las tomé del proyecto que estamos realizando este ciclo porque yo fui el encargado de implementarlo allí.

Para la internacionalización, leí sobre una libreria de react llamada "i18next" que facilitaba la implementación. Entonces, sobre el componente "i18n.jsx" están etiquetados los labels estáticos y su traducción dependiendo de la elección que se haga al momento de hacer el login. Esto se mantiene hasta que el usuario cambie el idioma otra vez en el login.

Finalmente, como nota, pues en el tiempo del parcial se logró implementar lo que está en el release 1, sin embargo, para la entrega en casa decidí volver un poco más estética la página porque no soportaba cómo se veía antes jeje.
