# TableBoss App

Um aplicativo de gerenciamento de restaurante composto por um backend Express, um frontend React e um banco de dados MySQL.

## Estrutura do Projeto

- **/backend**: Código fonte do servidor Express.
- **/frontend**: Código fonte da aplicação React.
- **/shared**: Biblioteca compartilhada entre o frontend e backend
- **docker-compose.yml**: Arquivo Docker Compose para inicializar todos os serviços.

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Como Rodar

1. Clone o repositório:

```bash
git clone git@github.com:ThalesGSN/tableboss.git
cd restaurante-app
```

2. Use o Docker Compose para inicializar os serviços:

```bash
docker-compose up
```

O frontend estará disponível em `http://localhost:8080`, e o backend em `http://localhost:3000`.

## Desenvolvimento

### Backend

Localizado na pasta `/backend`. Para iniciar o servidor Express durante o desenvolvimento (fora do Docker):

```bash
cd backend
npm install
npm run dev
```

### Frontend

Localizado na pasta `/frontend`. Para iniciar a aplicação React durante o desenvolvimento (fora do Docker):

```bash
cd frontend
npm install
npm start
```

## Contribuições

Sinta-se à vontade para enviar pull requests ou abrir issues.
