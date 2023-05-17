# Base de Datos

Este directorio contiene las migraciones de la base de datos para cada uno de los servicios en la aplicación.

## Estructura

```
db/
├── Dockerfile
├── README.md
├── init-db.sh
└── migrations
    ├── population
    │   └── 001_populate_questionnaires.sql
    ├── questionnaires
    │   └── 001_create_questionnaire_table.sql
    ├── relations
    │   └── 001_create_relations_table.sql
    └── users
        └── 001_create_users_table.sql
```

## Migrations

Las migraciones están ubicadas en esta carpeta. Cada archivo de migración contiene instrucciones SQL para crear tablas y rellenar la base de datos. Estos archivos se ejecutarán al iniciar la base de datos.

### Users

Contiene la tabla `users` que almacena la información de los usuarios y sus roles.

### Questionnaires

Contiene las tablas `questionnaire`, `questions` y `answers` para almacenar los cuestionarios realizados por lso usuarios, las preguntas del cuestioanrio y sus respectivas respuestas.

### Relations

Contiene la tabla `questionnaire_questions_answers` que representa la relación entre la pregunta y la respuesta que ha elegido un usuario en un cuestionario.

### Population

Contiene los INSERT necesarios para crear el cuestionario.

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
