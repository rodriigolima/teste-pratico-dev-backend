
## Manual de Instalação

Clone o repositorio:

```bash
git clone https://github.com/rodriigolima/teste-pratico-dev-backend.git
cd teste-pratico-dev-backend
```

Instale as dependências:

```bash
npm install
```

Set as variáveis de environment:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Índice

  - [Manual de Instalação](#manual-de-instalação)
  - [Índice](#índice)
  - [Comandos](#comandos)
  - [Variáveis de Environment](#variáveis-de-environment)
  - [Estrutura do projeto](#estrutura-do-projeto)
  - [API Endpoints](#api-endpoints)
  - [Doc Swagger](#doc-swagger)

## Comandos

Rodando em desenvolvimento:

```bash
npm start
```

## Variáveis de Environment

As variáveis de environment pode ser encontradas e modificadas no arquivo `.env`.

```bash
#PORTA DO SERVIDOR

API_PORT= # default 3000

##VARIAVEIS DE AMBIENTE MYSQL
DB_TYPE=mysql
DB_PORT=3306
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=
```
## Estrutura do projeto

```

src\
 |--config\         # Environment variables and configuration
 |--\app\controllers\    # Controllers
 |--\app\models\         # Mongoose models
 |--\app\services\       # Business logic
 |--\database\index.js   # Database migration
 |--docs\         # Documentation
 |--middlewares\    # Custom express middlewares
 |--routes\         # Routes
```

## API Endpoints

Lista de routes disponíveis:




Todas as rotas você pode importar para o insomnia ou postman para testá-la!

Também pode utilizar o documento Swagger:
## Doc Swagger
[http:localhost:3000/docs](#endereco-swagger)

<br ><br >