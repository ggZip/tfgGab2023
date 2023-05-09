# Evaluation Service

El servicio de evaluation es responsable de recopilar las respuestas del usuario a las preguntas del cuestionario, guardarlas en la base de datos y calcular la probabilidad de aprobado que tiene el usuario.

## Estructura de archivos

```
evaluation
├── Dockerfile
├── Dockerfile.test
├── README.md
├── requirements.txt
└── src
    ├── __init__.py
    ├── commons
    │   ├── __init__.py
    │   ├── models.py
    │   └── utils.py
    ├── config
    │   ├── __init__.py
    │   └── config.py
    ├── main.py
    ├── routes
    │   ├── __init__.py
    │   └── routes.py
    └── tests
        ├── __init__.py
        └── test_evaluation.py
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

## TEST UNITARIOS

Para ejecutar las pruebas unitarias, sigue estos pasos:

1. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

2. Navega a la carpeta raíz del proyecto (donde se encuentra el archivo docker-compose.test.yaml) y ejecuta el siguiente comando para ejecutar las pruebas en un contenedor de Docker:
```
docker-compose -f docker-compose.test.yaml up --build --abort-on-container-exit
```
Este comando construirá la imagen del contenedor, instalará las dependencias necesarias y ejecutará las pruebas. Los resultados de las pruebas se mostrarán en la consola al finalizar.

## API

- `POST /evaluate`: Recopila las respuestas del usuario, guarda los resultados en la base de datos y calcula la probabilidad de aprobado.

