# Test de automatización: creación del build de create-react-app y despliegue en el servidor usando GitHub Actions

## IP del servidor de prueba
```sh
3.225.90.239
```
## Action-runner
El runner es la aplicación de GitHbub que escucha si hay cambios en el repo (un nuevo push o pull request). De momento solo se ha probado el evento push.

## Workflow
En el carpeta .github/workflow está el fichero .yml que configura el flujo de una acción de GitHub de tipo build (instala node, dependencias, crea el build y testea el código) 

## Pasos para hacer una prueba 
* ### Abrir un navegador en la IP para ver la apariencia actual del código de App.js
* ### Clonar el repo en local
* ### Hacer un cambio visible en App.js
* ### Hacer un commit con un nombre describiendo el cambio 
* ### Hacer un push
* ### Esperar a que el runner haga su trabajo (más o menos 1 minuto) y mientras tanto...
    - Ir a Actions en el menu superio del repo:
    - Debajo de **All Workflow** pinchar en el item con nombre del commit
    - Pinchar en **job** o en un círculo que gira hasta llegar a **build** y poder ver todo el proceso en tiempo real (merece la pena!)
* ### Refrescar varias veces el navegador hasta que la aplicación refleje el cambio 

## Nota:
El Build se crea y se va machacando en el servidor, no en el repo. 

## Cosas que faltarían:


-Probar que nos funciona a todos

-Probar si funciona con pull requests 

-Decidir la mejor manera de hacer los merge:

    (1) Push desde rama local de la funcionalidad X a la rama del repo de la funcionalidad X (sin tocar la rama principal), revisión y posterior aprobación del       push 
    
    (2) Pull request (revisión del código) o push (sin revisión) desde rama local de la funcionalidad X a rama única del repo
    
    (3) Otra opción
    
-¿Crear un contenedor de Docker en el servidor para que haga el build dentro del contenedor? 

