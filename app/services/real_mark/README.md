# RealMark Service

Este servicio permite a los usuarios introducir la nota real obtenida en el examen para el que realizaron el cuestionario.

## Estructura de archivos

```
real_mark
├── Dockerfile
├── Gemfile
├── Gemfile.lock
├── app.rb
└── models.rb

```


## Requisitos

- Docker
- Docker Compose

## Cómo ejecutar el servicio localmente

1. Clona este repositorio en tu máquina local.

2. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

3. Navega a la carpeta raíz del proyecto (donde se encuentra el archivo `docker-compose.yaml`) y ejecuta el siguiente comando para iniciar el servicio junto con sus dependencias:

```bash
docker-compose up -d
```
El servicio de registro debería estar en ejecución en el puerto 3005.

## API
- `POST /update_real_mark`: Registra la nota real qeu ha obtenido el usuario.

