# Nomad commerce application

Este repositorio contiene el servicio de api para el comercio flapp realizado con node.js, express, Typescript y además el frontend necesario para ello en nextjs, se utilizó el lenguaje de TypeScript y para un ejecución más simple se utilizó Docker

## Configuración de Docker

Este proyecto utiliza Docker para gestionar y ejecutar los servicios de cliente y servidor. A continuación se explica cómo se configuran y utilizan los Dockerfiles y el archivo `docker-compose.yml`.

### Dockerfiles

- **Dockerfile.client**: Este archivo se utiliza para construir la imagen Docker del cliente. Contiene las instrucciones necesarias para instalar dependencias y configurar el entorno del cliente.

- **Dockerfile.server**: Este archivo se utiliza para construir la imagen Docker del servidor. Contiene las instrucciones necesarias para instalar dependencias y configurar el entorno del servidor.

### docker-compose.yml

El archivo `docker-compose.yml` define y configura los servicios de cliente y servidor utilizando los Dockerfiles mencionados anteriormente. Para construir y ejecutar los servicios de cliente y servidor, utiliza el siguiente comando estando en el directorio raiz:

```
docker-compose up --build
```

## Supuestos o comportamientos adicionales

El botón generar carrito puede llegar a generar 20 tipos de carrito diferentes, ya que se genera un numero aleatorio de 1 a 20, se asegura que dentro de esos carritos hay casos donde se cumple con el stock y casos en los que no para comprobar ambos flujos de comportamiento.
Para una mejor experiencia de usuario si la página se recarga no se pierde el carrito, ya que está guardado en el local storage, el supuesto en este caso es ese, que no es necesario borrar el carrito.
Otro supuesto o comportamiento es que el archivo se ejecuta mediante Docker, para de esta manera sea más facil y no tener que realizar tantos comandos, por lo que docker es requerido, si en algún caso no se tuviera y fuera imposible de usar, o se presentara algún error, habría que ir en un terminal al directorio server ejecutar npm i y despues npm run dev, y tambien en el directorio client hacer lo mismo, npm i y despues npm run dev, el front se desplegará en el puerto 3000, por lo que habría que abrir ese http://localhost:3000 y el server se ejecutaria en el puerto 4000, pudiendo ver por ejemplo en VS Code en la consola los console.log
