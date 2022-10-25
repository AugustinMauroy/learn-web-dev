---
title: "intro_node"
display_title: "Introduction à Node"
lang: "fr"
---

Node.js est un environnement d'exécution JavaScript gratuit, ouvert et multiplatform qui permet aux développeurs d'écrire des outils en ligne de commande et des scripts côté serveur, en dehors d'un navigateur.

## Que peut faire Node.js ?

- Node.js peut générer du contenu de page dynamique.
- Node.js peut créer, ouvrir, lire, écrire, supprimer et fermer des fichiers sur le serveur.
- Node.js peut collecter des données de formulaire
- Node.js peut ajouter, supprimer et modifier des données dans votre base de données.

## Un exemple simple de se que peut faire nodeJS

```javascript
const http = require('http')

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Bonjours tout le monde!</h1>')
})

server.listen(port, () => {
  console.log(`Serveur function au port: ${port}`)
})
```

## Télécharger node

Rendez vous sur le [site nodejs](https://nodejs.dev/fr/) et suivez les instruction.
