# Questionnaire Service

Este servicio se encarga de devolver las preguntas y respuestas del cuestionario que va a realizar el usuario.

## Requisitos

- Docker
- Docker Compose

## Cómo ejecutar el servicio

1. Asegúrate de tener instalado Docker y Docker Compose en tu sistema.

2. Clona el repositorio en tu máquina local.

3. Navega hasta la carpeta del repositorio clonado en la terminal.

4. Ejecuta el siguiente comando para iniciar los servicios con Docker Compose:

```sh
docker-compose up --build
```
El servicio de cuestionario ahora debería estar en ejecución y escuchando en el puerto 3003.

## API
- `GET /questionnaire`: Devuelve las preguntas y respuestas del cuestionario.
- `GET /questionnaire/user/{user_id}`: Devuelve los cuestionarios realizados por un usuario.