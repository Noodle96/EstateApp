# EstateApp (CachinaPE)

EstateApp es una aplicación web para la compra y venta de propiedades inmobiliarias, pensada como un marketplace estilo *Zillow/Idealista* con chat en tiempo real entre compradores y vendedores. Según la descripción del repositorio en GitHub, el proyecto está concebido como una aplicación **MERN Stack** (MongoDB, Express, React, Node.js).

> **Estado actual del repositorio:** en este momento el repositorio solo contiene el **frontend** (`client_estate_app`), construido con React y Vite. No se encontró carpeta de backend/servidor, API, base de datos ni módulo de chat en el código fuente disponible, por lo que esas piezas del stack MERN aún no están implementadas o no forman parte de este repositorio todavía.

## Badges

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-1.77.2-CC6699?logo=sass&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?logo=eslint&logoColor=white)
![Estado](https://img.shields.io/badge/Estado-en%20desarrollo-yellow)
![Licencia](https://img.shields.io/badge/Licencia-sin%20especificar-lightgrey)

*No se agregaron badges de build/CI porque no se encontró configuración de integración continua (workflows de GitHub Actions, etc.) en el repositorio.*

## Características principales

Basado en el código fuente actual del frontend:

- **Página de inicio (Home)** con sección hero y buscador de propiedades.
- **Barra de búsqueda** con selector de tipo de operación (Comprar / Vender), ubicación y rango de precio (mínimo/máximo).
- **Barra de navegación (Navbar)** con enlaces a Tienda, Vender, Categorías y Sostenibilidad, además de accesos de "Sign In" / "Sign Up" y menú responsive (hamburguesa) para móvil.
- **Diseño responsive** mediante mixins de Sass (`responsive.scss`) para breakpoints `lg`, `md` y `sm`.
- **Componente Footer** (actualmente un placeholder, pendiente de implementación).

> Funcionalidades descritas en el repositorio de GitHub pero **no implementadas todavía** en el código disponible: autenticación de usuarios, publicación/gestión de propiedades, chat en tiempo real y backend/API. Se mencionan aquí solo como contexto del objetivo del proyecto, no como funcionalidades existentes.

## Tecnologías / Stack utilizado

Extraído de `client_estate_app/package.json`:

- **React** 18.2.0 + **React DOM** 18.2.0
- **Vite** 5.2.0 (bundler / dev server) con `@vitejs/plugin-react` 4.2.1
- **Sass** 1.77.2 para estilos (`.scss`)
- **ESLint** 8.57.0 con `eslint-plugin-react`, `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`
- **@types/react** y **@types/react-dom** (tipado para editor, el proyecto en sí es JavaScript, no TypeScript)

No se encontraron archivos de configuración de backend (`requirements.txt`, `server.js`, carpeta `api`, etc.) en este repositorio.

## Requisitos previos

- **Node.js** 18 o superior (requerido por Vite 5; no se encontró un archivo `.nvmrc` o campo `engines` que fije una versión exacta, así que se recomienda la versión LTS más reciente compatible con Vite 5).
- **npm** (el repositorio incluye `package-lock.json`, por lo que se asume npm como gestor de paquetes; no hay `yarn.lock` ni `pnpm-lock.yaml`).
- Git, para clonar el repositorio.

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Noodle96/EstateApp.git
cd EstateApp

# 2. Entrar a la carpeta del frontend
cd client_estate_app

# 3. Instalar dependencias
npm install
```

## Uso

Comandos definidos en `client_estate_app/package.json`:

```bash
# Levantar el servidor de desarrollo (Vite) con Hot Module Replacement
npm run dev

# Generar el build de producción
npm run build

# Previsualizar localmente el build de producción
npm run preview

# Ejecutar el linter (ESLint) sobre archivos .js y .jsx
npm run lint
```

Por defecto, `npm run dev` levanta la aplicación en el servidor de desarrollo de Vite (normalmente `http://localhost:5173`).

## Estructura del proyecto

```
EstateApp/
├── README.md
└── client_estate_app/            # Frontend (React + Vite)
    ├── index.html                # Punto de entrada HTML
    ├── package.json              # Dependencias y scripts npm
    ├── vite.config.js            # Configuración de Vite
    ├── .eslintrc.cjs             # Reglas de ESLint
    ├── public/                   # Assets estáticos (íconos, imágenes de fondo)
    └── src/
        ├── main.jsx              # Punto de entrada de React
        ├── App.jsx               # Componente raíz (layout + rutas visibles)
        ├── index.scss / layout.scss / responsive.scss   # Estilos globales y mixins responsive
        ├── components/
        │   ├── navbar/           # Barra de navegación
        │   ├── searchBar/        # Buscador de propiedades (tipo, ubicación, precio)
        │   └── footer/           # Pie de página (placeholder)
        └── routes/
            └── homePage/         # Página de inicio (Home)
```

## Variables de entorno / configuración

No se encontraron archivos `.env`, `.env.example` ni referencias a `import.meta.env` en el código fuente del frontend. Actualmente **el proyecto no utiliza variables de entorno**. Si en el futuro se agrega el backend o integraciones (por ejemplo, claves de API de mapas, credenciales de base de datos, etc.), esta sección debería actualizarse.

## Cómo correr pruebas

No se encontró ningún framework de testing configurado (no hay Jest, Vitest, React Testing Library, Cypress, etc. en `package.json`) ni carpetas/archivos de tests (`*.test.js`, `*.spec.js`, `__tests__`) en el repositorio. **Actualmente el proyecto no cuenta con pruebas automatizadas.**

## Cómo contribuir

No se encontró un archivo `CONTRIBUTING.md` ni lineamientos de contribución en el repositorio. Si deseas que se agregue una guía de contribución (flujo de ramas, convención de commits, cómo abrir un Pull Request, etc.), indícalo y la desarrollamos juntos en lugar de asumir un proceso.

## Licencia

No se encontró ningún archivo `LICENSE` en el repositorio, por lo que **el proyecto no tiene una licencia especificada actualmente**. Esto significa que, por defecto, todos los derechos quedan reservados al autor y terceros no tienen permiso legal para usar, copiar o distribuir el código. Si quieres que el proyecto sea de código abierto, dime qué licencia prefieres (MIT, Apache 2.0, GPL-3.0, etc.) y agrego el archivo `LICENSE` correspondiente junto con esta sección.

---

### Notas sobre este README

Este documento se generó a partir del análisis real del código y la configuración presentes en el repositorio (`client_estate_app`) más la descripción pública del repositorio en GitHub ("Real Estate App | MERN Stack App & Real-time Chat"). Las secciones de **Licencia** y **Cómo contribuir** quedaron marcadas como pendientes porque no se encontró información suficiente para completarlas sin asumir datos — quedo atento a tu confirmación para completarlas.
