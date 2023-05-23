<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# PanShop API

1. Definir archivo .dev con las variables de entorno par la configuración de la BD, ejemplo:

## .env

```
DB_USERNAME=sa
DB_PASSWORD=aquivaelpassword
DB_NAME=panshop
DB_HOST=localhost
DB_PORT=1433
```

2. Levantar la BD

```
docker-compose up -d
```

3. Correr el servidor

```
yarn start:dev
```
