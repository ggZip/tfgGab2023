# Front-end de la aplicación

Este parte del proyecto es una aplicación de React que incluye autenticación de usuario, cuestionarios, y más, con el objetivo de dar una buena experiencia de usuario para la aplicación final. 

## Requisitos

- Docker
- Docker Compose
- npm

## Estructura de archivos principal
```
frontend/src/
├── App.css
├── App.js
├── App.test.js
├── assets
│   └── logo.svg
├── components
│   ├── Footer
│   │   ├── Footer.css
│   │   └── Footer.js
│   ├── Header
│   │   ├── Header.css
│   │   └── Header.js
│   └── NavBar
│       ├── NavBar.css
│       └── NavBar.js
├── contexts
│   └── AuthContext.js
├── index.css
├── index.js
├── pages
│   ├── Dashboard
│   │   ├── Dashboard.css
│   │   └── Dashboard.js
│   ├── Login
│   │   ├── Login.css
│   │   └── Login.js
│   ├── Questionnaire
│   │   ├── Questionnaire.css
│   │   └── Questionnaire.js
│   ├── Register
│   │   ├── Register.css
│   │   └── Register.js
│   └── UserQuestionnaires
│       ├── UserQuestionnaires.css
│       └── UserQuestionnaires.js
├── reportWebVitals.js
└── setupTests.js
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
npm install
```

## Uso

- Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm start
```
Abre http://localhost:3000 para verlo en el navegador.

La página se recargará si haces ediciones. También verás cualquier error lint en la consola.

- Para ejecutar el contenedor:
Navega a la carpeta raíz del proyecto (donde se encuentra el archivo `docker-compose.yaml`) y ejecuta el siguiente comando para iniciar el servicio junto con sus dependencias
```bash
docker-compose up -d
```