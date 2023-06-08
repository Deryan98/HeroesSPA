# HeroesSPA
Proyecto de práctica para mostrar el catálogo de héroes de DC y Marvel con el fin de presentar un SPA con rutas públicas y privadas, además de animaciones

## ¿Quieres probarlo?
***
En una terminal ubicate en la carpeta donde clonarás el repositorio.
```
$ git clone https://github.com/Deryan98/HeroesSPA.git
$ cd HeroesSPA
$ yarn
$ yarn dev
```
Ahora verás la url local en la terminal para ver el spa corriendo
```
http://localhost:5173/
```

## Alcance
*** 
El alcance de este proyecto está pensado con el fin de nada más mostrar las habilidades de frontend utilizando adquiridas hasta el momento
De momento no se cuenta con un backend sociado. Pero algunas características implementadas son:

1. ** Implementación de react router dom con el manejo de rutas públicas y privadas emulando un login y logout.
2. ** Manejo del estado de sesión con un ContextProvider para tener acceso global a la información.
3. ** Persistance de la sesión del usuario leyendo y escribiendo de local storage.
4. ** Maquetación de UI con clases de bootstrap.
5. ** Manejo de query params en rutas para el buscador.
6. ** Efectos y animaciones para resaltar contenido.

## Tecnologías
***
Listado de tecnologías utilizadas en el proyecto
* [Bootstrap](https://getbootstrap.com/): Version 5.3.0
* [Animate.css](https://animate.style/): Version 4.1.1
* [React router dom](https://reactrouter.com/en/main): Version 6.12.0

## Librerías
*** 
Listado de librerías para resolver trivialidades
* [query string](https://www.npmjs.com/package/query-string) Version 8.1.0
