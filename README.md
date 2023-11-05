# vue-graphql-mongo

Aplicação Vue com GraphQL e MongoDB

- Container com MongoDB e outro com Mongo Express para auxiliar no gerenciamento dos dados
- Container Node com Mongoose para tratar os dados e Apollo Server para disponibilizar uma API GraphQL
- Container Node para disponibilizar um front-end em Vue que consome esses dados utilizando Apollo Client

`docker-composer up`

## Vue.js com Apollo Client

`http://localhost:5173/`

![Demonstração do Vue](/demo_vue.png)

## GraphQL com Apollo Server 

`http://localhost:4000/`

![Demonstração do GraphQL](/demo_graphql.png)

## Mongo Express

`http://localhost:8081/`

![Demonstração do Mongo Express](/demo_mongo_express.png)