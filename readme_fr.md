---
version: 'release'
---

# Projet de site de cours

Ce projet vise à fournir des cours pour apprendre le développement web.
Grâce à l'html, le css, le javascript. Puis nodejs pour le back-end.

## Pour teste le projet en locale

Utiliser cette commande pour installer les dépendance:

```bash
npm install
```

Et par la suite il faut exécuter cette commande:

```bash
npm start
```

## Et avec Docker

Utiliser cette commande pour installer les dépendance:

```bash
docker run -v $(pwd):/app learnweb npm install
```

Et par la suite il faut exécuter cette commande:

```bash
docker-compose up -d
```
