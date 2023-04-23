# Base de datos

Esta carpeta contiene los archivos de migración y la configuración de Docker para la base de datos de la aplicación.

## Estructura de carpetas

```
db
├── migrations
│ ├── 001_create_usuarios.sql
│ ├── 002_create_cuestionarios.sql
│ ├── 003_create_preguntas.sql
│ ├── 004_create_respuestas.sql
│ └── 005_create_resultados.sql
├── Dockerfile
├── init-db.sh
└── README-md
```


## Migraciones

Las migraciones están ubicadas en la carpeta `migrations`. Cada archivo de migración contiene una instrucción SQL que crea una tabla en la base de datos.

## Docker

La configuración de Docker está en los archivos `Dockerfile` e `init-db.sh`.

- `Dockerfile`: Define la imagen de Docker para la base de datos. Utiliza la imagen oficial de PostgreSQL y copia los archivos de migración y el script `init-db.sh` en el contenedor.
- `init-db.sh`: Es un script de shell que ejecuta las migraciones al iniciar el contenedor de la base de datos.

## Uso

Para levantar la base de datos en un contenedor Docker, ejecuta el siguiente comando desde la raíz de tu proyecto:

```
docker-compose up
```

Esto construirá la imagen de Docker para tu base de datos y ejecutará las migraciones en el contenedor. El puerto 5432 del contenedor se mapeará al puerto 5432 de tu máquina local, por lo que podrás conectarte a la base de datos como si estuviera ejecutándose localmente.
