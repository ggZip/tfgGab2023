# Base de Datos

Este directorio contiene las migraciones de la base de datos para cada uno de los servicios en la aplicación.

## Estructura

```
db
├── migrations/
│ ├── questionnaires/
│ │    ├── 001_create_questionnaires_table.sql
│ ├── realtestscores/
│ │    ├── 001_create_realtestscores_table.sql
│ ├── users/
│ │    ├── 001_create_usuarios_table.sql
├── Dockerfile
├── init-db.sh
└── README-md
```

## Migraciones

Las migraciones están ubicadas en la carpeta `migrations`. Cada archivo de migración contiene una instrucción SQL que crea una tabla en la base de datos. Estos archivos se ejecutarán al iniciar la base de datos.

### Usuarios

Contiene la tabla `users` que almacena la información de los usuarios y sus roles.

### Questionnaires

Contiene las tablas `questionnaires` y `questions` para almacenar los cuestionarios creados por los administradores y las preguntas asociadas.

### Real Test Scores

Contiene la tabla `real_test_scores` que almacena la nota real obtenida por los usuarios en los exámenes reales junto con las respuestas dadas en el cuestionario asociado.

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
