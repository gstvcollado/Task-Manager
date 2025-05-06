# Nombre del Proyecto

Este es un proyecto con **backend en Laravel**, **frontend en React** y **base de datos MySQL** (usando XAMPP como servidor local).

## 🧰 Requisitos

-   PHP >= 8.x
-   Composer
-   Node.js >= 22.14
-   NPM
-   MySQL (puede usarse XAMPP)
-   Laravel 12
-   React 18+
-   Git

## 🔧 Instalación

### 1. Clonar el repositorio

git clone https://github.com/tuusuario/tu-repositorio.git
cd tu-repositorio

2. Backend - Laravel
   cd backend
   composer install

2.1 Configurar archivo .env
Edita el archivo .env con los datos de conexión a la base de datos:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mi_base_datos
DB_USERNAME=root
DB_PASSWORD=

3.2 Ejecutar migraciones
php artisan migrate

2.3 Iniciar el servidor de Laravel
php artisan serve

3. Frontend - React

    cd ../frontend
    npm install

3.1 Iniciar el servidor de react
npm ruv dev
