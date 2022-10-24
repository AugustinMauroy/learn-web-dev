---
version: 'release'
---

# Course site project

This project aims to provide courses to learn web development.
Through html, css, javascript. Then nodejs for the back-end.

## To test the project locally

Use this command to install the dependencies:

```bash
npm install
```

And to test:

```bash
npm start
```

## To test with Docker

Install node dependencies

```bash
docker run -v $(pwd):/app learnweb npm install
```

Start project

```bash
docker-compose up -d
```
