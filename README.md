<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# PanShop API

1. Definir archivo .dev con las variables de entorno par la configuración de la BD, ejemplo:

## .env

```
DB_PASSWORD=password_aqui
DB_NAME=PanshopDB
DB_USERNAME=postgres
DB_HOST=localhost
DB_PORT=5432
```

2. Levantar la BD

```
docker-compose up -d
```

3. Correr el servidor

```
yarn start:dev
```
