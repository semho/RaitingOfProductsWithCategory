<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## RestApi регистрации/авторизации пользователей, записей и коментарий к ним.

Стэк - nest.js и mongodb

Для разворачивания проекта добавил контейнеризацию. После скачивания всех файлов достаточно выполнить команду в корне проекта:

```bash
$ docker-compose up --build
```

Api будет слушать порт 3000, монго порт 27017. Так же для удобства добавил интерфейс бд, управлять базой можно на порту 8081, пароль и логин в файле .env
