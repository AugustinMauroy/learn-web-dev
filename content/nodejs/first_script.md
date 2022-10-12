---
title: "first_script"
display_title: "Premier script avec nodejs"
lang: "fr"
---

# Premier script avec nodejs

Nos scripts peuvent être écrits dans des fichiers `.js` ou `.mjs`. 
Cela évidemment peut changer un petit peu la syntax mais la logic reste la même.

## Qu'est-ce qu'un module dans Node.js ?

Considérez que les modules sont les mêmes que les bibliothèques JavaScript.
Un ensemble de fonctions que vous voulez inclure dans votre application.

## Les modules intégrés à nodejs

Node.js possède un ensemble de modules intégrés que vous pouvez utiliser sans aucune installation supplémentaire.
Comme :

- `http`
- `url`
- `path`
- `fs` (file system)

## Création du premier script avec nodejs

Pour crée notre première script/application avec node. Il faut crée un fichier dans un répertoire dit roots. Vous pouvez l’appeler comme vous voulez. Nous dans notre cas on vas l'appelez 'index.js'.

Dans se premier script nous allons utiliser des variable et la console.
Nous allons calculer une multiplication. Rappelle : sur les [opérateurs arithmétique](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Math#opérateurs_arithmétiques) en javascript.

Voici le script

```JS
const pi = 3.14159265359;
var rayon = 10;

function calcul_aire(){
    return pi*rayon**2
};

console.log(calcul_aire());
```

Après avoir écrit se script dans votre fichier javascript. Pour exécuter votre code il faut fait:

```bash
node index.js
```

Vous obtiendrai:
314.159265359

Voilà vous avez vu comment créer un script javascript et l’exécuter avec nodejs.