# Evaluation Service

El servicio de evaluation es responsable de recopilar las respuestas del usuario a las preguntas del cuestionario, guardarlas en la base de datos y calcular la probabilidad de aprobado que tiene el usuario.

## Estructura de archivos

```
evaluation
├── Dockerfile
├── requirements.txt
└── src
    ├── __init__.py
    ├── app.py
    ├── config.py
    ├── models.py
    ├── routes.py
    └── utils.py
```


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
El servicio de cuestionario ahora debería estar en ejecución y escuchando en el puerto 3004.

## API


- `POST /evaluate`: Recopila las respuestas del usuario, guarda los resultados en la base de datos y calcula la probabilidad de aprobado.

