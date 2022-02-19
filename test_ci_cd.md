# Test de automatización: creación del build de create-react-app y despliegue en el servidor usando GitHub Actions

## IP del servidor de prueba
```sh
3.225.90.239
```
## Runner
El runner es la aplicación de GitHbub que escucha si hay cambios en el repo (un nuevo push o pull request)

## Workflow
En el carpeta .github/workflow está el fichero .yml que configura el flujo de una acción de GitHub de tipo build 

## Pasos para hacer una prueba 
* ### Abrir un navegador en la IP para saber la apariencia del código de App.js
* ### Clonar el repo en local
* ### Hacer un cambio visible en App.js
* ### Hacer un commit con un nombre describiendo el cambio 
* ### Hacer un push
* ### Esperar a que el runner haga su trabajo (más o menos 1 minuto)
* ### Refrescar varias veces hasta que el navegador refleje el cambio

