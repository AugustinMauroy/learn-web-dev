---
title: "node_http"
display_title: "Serveur http"
lang: "fr"
---

# Serveur http avec nodejs

Nous allons voir tout ce que peux faire nodejs avec le module http.

## Qu'est ce que http?

L’Hypertext Transfer Protocol, généralement abrégé HTTP, littéralement « protocole de transfert hypertexte », est un protocole de communication client-serveur développé pour le World Wide Web.
Les clients HTTP les plus connus sont les navigateurs Web. Il est aussi utilisé dans des interfaces de programmation d’application (API) pour accéder aux données d'un serveur ainsi que des systèmes pour récupérer automatiquement le contenu d'un site tels que les aspirateurs de site Web et les robots d'indexation.

## Premier "Hello world"

Pour notre premier serveur http nous allons crée un fichier en `.mjs` qui vas s’appeler `index.mjs`(Bien évidemment que vous pouvez l'appeler comme bon vous semble). 

### La première étape est d'importer les modules.

Pour cela nous allons ouvrir notre fichier index.mjs dans notre éditeur de text ou de code.
Et insérer cela :

```mjs
import http from "node:http";
```

### La deuxième étape est le script http

Dans cette partie nous allons crée le serveur http grâce au module http importer juste avant.
Ajouter cela à votre `index.mjs`:

```mjs
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