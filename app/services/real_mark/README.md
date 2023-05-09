# RealMark Service

Este servicio permite a los usuarios introducir la nota real obtenida en el examen para el que realizaron el cuestionario.

## Estructura de archivos

```
real_mark
├── Dockerfile
├── Dockerfile.test
├── Gemfile
├── Gemfile.lock
├── README.md
├── app.rb
├── models.rb
└── tests
    └── app_test.rb

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

## TEST UNITARIOS

Para ejecutar las pruebas unitarias, sigue estos pasos:

1. Asegúrate de que Docker y Docker Compose estén instalados en tu máquina.

2. Navega a la carpeta raíz del proyecto (donde se encuentra el archivo docker-compose.test.yaml) y ejecuta el siguiente comando para ejecutar las pruebas en un contenedor de Docker:
```
docker-compose -f docker-compose.test.yaml up --build --abort-on-container-exit
```
Este comando construirá la imagen del contenedor, instalará las dependencias necesarias y ejecutará las pruebas. Los resultados de las pruebas se mostrarán en la consola al finalizar.

## API
- `POST /update_real_mark`: Registra la nota real qeu ha obtenido el usuario.

