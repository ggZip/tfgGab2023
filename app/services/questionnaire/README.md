# Questionnaire Service

Este servicio se encarga de devolver las preguntas y respuestas del cuestionario que va a realizar el usuario.

## Requisitos

- Docker
- Docker Compose

## Estructura de archivos

```
questionnaire
├── Dockerfile
├── Dockerfile.test
├── README.md
├── go.mod
├── go.sum
├── main.go
└── src
    ├── handlers
    │   └── handlers.go
    ├── models
    │   ├── answers.go
    │   ├── db.go
    │   ├── questionnaires.go
    │   └── questions.go
    └── test
        └── questionnaire_test.go
```
## Cómo ejecutar el servicio localmente

1. Asegúrate de tener instalado Docker y Docker Compose en tu sistema.

2. Clona el repositorio en tu máquina local.

3. Navega hasta la carpeta del repositorio clonado en la terminal.

4. Ejecuta el siguiente comando para iniciar los servicios con Docker Compose:

```sh
docker-compose up --build
```
El servicio de cuestionario ahora debería estar en ejecución y escuchando en el puerto 3003.

## TEST UNITARIOS

Para ejecutar las pruebas unitarias, sigue estos pasos:

1. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

2. Navega a la carpeta raíz del proyecto (donde se encuentra el archivo docker-compose.test.yaml) y ejecuta el siguiente comando para ejecutar las pruebas en un contenedor de Docker:
```
docker-compose -f docker-compose.test.yaml up --build --abort-on-container-exit
```
Este comando construirá la imagen del contenedor, instalará las dependencias necesarias y ejecutará las pruebas. Los resultados de las pruebas se mostrarán en la consola al finalizar.

## API
- `GET /questionnaire`: Devuelve las preguntas y respuestas del cuestionario.
- `GET /questionnaire/user/{user_id}`: Devuelve los cuestionarios realizados por un usuario.