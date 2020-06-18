
# Aerolab Challenge

Este proyecto resuelve la prueba técnica planteada por Aerolab para candidatos a Fullstack Developers.

## Criterios
Los usuarios tienen una cantidad indeterminada de puntos acumulados, y cada producto vale una cantidad establecida de puntos. 
-   Cada producto debe tener un precio visible en puntos.
-   El usuario debe poder clasificar los productos por precio, de mayor a menor, y viceversa.
-   El usuario debería poder ver cuántos puntos tiene en su cuenta.
-   Debe haber una manera clara para que el usuario distinga aquellos productos que pueden canjear de aquellos que no pueden canjear.
-   Un botón "Canjear" debe estar disponible para aquellos productos que el usuario tiene suficientes puntos para reclamar.
-   Debe aparecer una opción de "Canjear ahora" cuando el usuario interactúa con un producto que tiene suficientes puntos para reclamar.
-   Cuando el usuario no tiene suficientes puntos para un producto, debería poder ver cuántos puntos más necesita para reclamarlo.
-   El usuario no debe poder canjear un producto para el que no tiene suficientes puntos.
-   Cuando el usuario hace clic en el botón Canjear ahora, el sistema debe deducir automáticamente el precio del artículo de los puntos de los usuarios.
  
## Demo

 [https://aerolab-challenge.ehidalgo.vercel.app/](https://aerolab-challenge.ehidalgo.vercel.app/)

## Requerimientos
 Para el correcto despliegue del proyecto de manera local se necesita:
* GIT
* Node v12 LTS 

## Despliegue local
 Para desplegar de manera local se necesitan ejecutar los siguientes comandos:
 
```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```
## Frameworks

El stack tecnológico elegido es:

* Vue + Typescript
* Vuex
* NuxtJS
* TailwindCSS
* Vue Kinesis
* Axios
* Jest
