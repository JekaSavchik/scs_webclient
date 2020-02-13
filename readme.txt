delete after reading!!

===
Rules:
* all components, containers (pages) in UpperCamelCase.jsx
* index.js as an access point in all packages
* only releases push to master branch
===

0. npm install

===

1. create files in the root of project:
    .env.prod
    .env.dev
2. Fill in the files with the following content:
# api configuration
REACT_APP_API_HOST = https://proxyserverapi.herokuapp.com/api

# local storage (temporary)
REACT_APP_ACCESS_TOKEN_KEY = access_token

# auth configurations
REACT_APP_REDIRECT_UNAUTH = /auth/login

===

for start app => npm start
        (see package.json)

удалить после прочтения !!

===
Правила:
* все компоненты, контейнеры (страницы) в UpperCamelCase.jsx
* index.js как точка доступа во всех пакетах
* только выпускает push в ветку master
===

0. установка npm

===

1. создать файлы в корне проекта:
     .env.prod
     .env.dev
2. Заполните файлы следующим содержанием:
# api configuration
REACT_APP_API_HOST = https://proxyserverapi.herokuapp.com/api

# локальное хранилище (временное)
REACT_APP_ACCESS_TOKEN_KEY = access_token

# аутентификационные конфигурации
REACT_APP_REDIRECT_UNAUTH = / auth / login

===

для запуска приложения => npm start
         (см. package.json)