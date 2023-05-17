# Software para cálculo probabilístico de la aprobación de un examen

[Aplicación web para calcular la probabilidad de aprobar un examen en base a las respuestas de un cuestionario previo]

## Instalación

1. Clonar el repositorio:
```bash
git clone git@github.com:ggZip/tfgGab2023.git
```
2. Navegar al root del proyecto:
```bash
cd tfgGab2023/app
```
3. Copiar el archivo .env.example a .env y llenar las variables de entorno:
```bash
cp .env.example .env
```
Luego, editar el archivo .env con los valores correctos.
4. Construir y levantar los contenedores Docker:
```bash
docker-compose up --build
```

## Estructura del proyecto

```
app/
├── db
│   └── migrations
│       ├── population
│       ├── questionnaires
│       ├── relations
│       └── users
├── frontend
│   ├── public
│   └── src
│       ├── assets
│       ├── components
│       │   ├── Footer
│       │   ├── Header
│       │   └── NavBar
│       ├── contexts
│       └── pages
│           ├── Dashboard
│           ├── Login
│           ├── Questionnaire
│           ├── Register
│           └── UserQuestionnaires
├── services
│   ├── authentication
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── routes
│   │   └── test
│   ├── evaluation
│   │   └── src
│   │       ├── commons
│   │       ├── config
│   │       ├── routes
│   │       └── tests
│   ├── questionnaire
│   │   └── src
│   │       ├── handlers
│   │       ├── models
│   │       └── test
│   ├── real_mark
│   │   └── tests
│   └── registration
│       ├── config
│       ├── controllers
│       ├── middlewares
│       ├── routes
│       └── test
└── tyk_api_gateway
    └── apis
```