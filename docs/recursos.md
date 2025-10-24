# Distribución de Roles y Responsabilidades

| **Rol** | **Responsabilidades principales** |
|----------|----------------------------------|
| **Frontend Lead (React Developer)** | Diseñar y desarrollar la interfaz del usuario (UI) en React. Implementar el mapa interactivo y la comunicación con la API backend. Asegurar la accesibilidad y la experiencia de usuario (UX). |
| **Backend Lead (Node.js / Express Developer)** | Diseñar y desarrollar la API REST. Gestionar la lógica de negocio, el sistema de caché, y la conexión con la base de datos. Implementar control de errores y endpoints seguros. |
| **Database Manager (MongoDB)** | Diseñar el esquema de datos y mantener la integridad del almacenamiento. Optimizar consultas y asegurar la persistencia de las traducciones. |
| **Fullstack / Integrador** | Coordinar la integración entre frontend y backend. Validar flujos de comunicación entre los módulos. |
| **Project Manager / Documentación** | Planificar las fases del proyecto, coordinar tareas, mantener documentación técnica actualizada y controlar plazos. |

---

# Stack Tecnológico Completo

| **Capa** | **Tecnología** | **Uso principal** |
|-----------|----------------|-------------------|
| **Frontend** | React.js, HTML5, CSS3, JavaScript (ES6+) | Construcción de la interfaz de usuario y mapa interactivo. |
| **Mapa interactivo** | react-simple-maps | Renderización y manipulación del mapa mundial. |
| **Backend** | Node.js + Express.js | API REST para procesar peticiones de traducción y comunicarse con la base de datos. |
| **Base de datos** | MongoDB | Almacenamiento de traducciones en caché (texto original, idioma, resultado, fecha). |
| **Traducción automática** | API externa (Google Translate API o LibreTranslate) | Generación de traducciones multilingües. |
| **Despliegue** | Aún por especificar | Hosting del frontend y backend en la nube. |
| **Control de versiones** | Git + GitHub | Control del código, gestión de ramas y colaboración. |

---

# Servicios Externos y APIs a Utilizar

| **Servicio / API / Librería** | **Función** | **Tipo** |
|-------------------------------|-------------|----------|
| **Google Translate API** *(alternativa: LibreTranslate)* | Obtener traducciones automáticas de texto a múltiples idiomas. | API externa |
| **REST Countries API** | Obtener información de países e idiomas oficiales. | API pública |
| **react-simple-maps** | Renderizar el mapa mundial interactivo y manejar límites de países de forma sencilla en React. | Librería React / JS |
| **world-atlas / topojson** | Proveer datos geográficos simplificados (límites de países) para usar con `react-simple-maps`. | Dataset / Librería JS |

---

# Herramientas de Desarrollo y Gestión

| **Herramienta** | **Uso principal** |
|------------------|------------------|
| **Visual Studio Code** | Entorno principal de desarrollo. |
| **Postman / Thunder Client** | Pruebas de endpoints de la API. |
| **MongoDB Compass / Atlas** | Visualización y gestión de la base de datos. |
| **GitHub Projects / Trello** | Gestión de tareas, seguimiento de progreso y comunicación del equipo. |
| **Figma / Excalidraw** | Diseño de interfaz y diagramas de arquitectura. |
| **Discord / Slack** | Comunicación y coordinación del equipo. |
| **Render / Vercel** | Despliegue del backend y frontend. |
