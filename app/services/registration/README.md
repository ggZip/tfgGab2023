# Servicio de Registro

Este servicio maneja el registro de usuarios en la aplicación.

## Requisitos

- Docker
- Docker Compose

## Estructura de archivos

```
registration
├── Dockerfile
├── README.md
├── app.js
├── config
│ └── db.js
├── controllers
│ └── userController.js
├── middlewares
│ └── validationMiddleware.js
├── package.json
└── routes
  └── userRoutes.js
```

## Cómo ejecutar el servicio localmente

1. Clona este repositorio en tu máquina local.

2. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

3. Navega a la carpeta raíz del proyecto (donde se encuentra el archivo `docker-compose.yaml`) y ejecuta el siguiente comando para iniciar el servicio junto con sus dependencias:

```bash
docker-compose up -d
```
El servicio de registro debería estar en ejecución en el puerto 3001.

## API
- `POST /users/register`: Registra un nuevo usuario en la aplicación.
