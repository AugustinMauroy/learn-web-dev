---
title: "fs_http"
display_title: "Envoyé les donnée d'un fichier à un browser"
lang: "fr"
---

Pour envoyé les donnée stocker dans un fichier il faut le lire c'est pour cela que nous allons utiliser le module [FS](https://nodejs.dev/en/api/v19/fs/) qui signifie **f**ile **s**ystème.

## Comment lire les donnée d'un fichier

Comme dit nous allons utiliser le module `FS` qui est inclut de base dans nodejs.
Pour l'importer dans votre script (si vous n'avez pas encore fait de script avec node allez voir [ceci](/nodejs/first_script)) nous allons écrire ceci. (Tout cela est dans la syntaxe ECMA)

```mjs
import fs from 'node:fs';
```

Lorsqu'il est correctement importer nous pouvons lire un fichier html pour l'example. Dans l'example présent nous allons inscrire notre document html dans le même répertoire que celui de notre application nodejs.
Si vous avez crée votre fichier html vous pouvez retourner dans votre application node. Et y inscrire le code si dessous:

```mjs
const html = fs.readFileSync("./index.html", "utf-8", (err,data)=>{
    if (err){
        return err;
    }else{
        return data;
    }
})
console.log(html);
```

Dès que votre script est écrit vous pouvez l'exécuter grâce à cette commande:

```bash
node test.mjs
```

Que fait la fonction `readFileSync`? Elle lit le document "./index.html" qui est un paramètre appelé chemin d'accès. On finit par une [Fonctions fléchées](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Qui dit que si il y a une erreur on revois l'erreur mais dans le cas du serveur http nous retournerons autre chose.

Si tout c'est bien passer vous devez avoir reçus votre code html. Si un problème surviens contacter nous [contacter](/contact)

## Comment mettre tout cela dans un script http

Nous allons reprendre le script expliquer dans ce [tutoriel](/blog/node_http). Pour ensuite ajouté l'html en provenance d'un fichier.

Voici le script http

```JS
import http from "node:http";

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(html)
})

server.listen(port, () => {
  console.log(`Serveur running on http://localhost:${port}`)
})

const html = fs.readFileSync("./index.html", "utf-8", (err,data)=>{
    if (err){
        return "<h1>404</h1>";
    }else{
        return data;
    }
})
```

Nous renvoyons simplement le code html récupérer par la fonction fs.readFileSync au serveur http grâce à la variable html. Si une erreur se produit lors de la lecture du fichier un `<h1>404</h1>` sera renvoyer. Vous pouvez bien sur renvoyer un autre variable 404 qui lit un fichier 404.html.

### Voilà vous avez les rudiment pour les serveur http
