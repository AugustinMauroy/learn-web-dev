# Écrire un cours

Si vous voulez ajouter un cours il faut suivre plusieurs étapes.

## code de conduite pour l'écriture des cours

Vous devez respecter le code de conduite du projet. Vous devez écrire à la deuxième personne du singulier ou à la première personne du pluriel.

## road map pour écrire un cour

* Crée le fichier markdown dans le répertoire convenant (`html`,`css`,`js`,`nodejs`,`sql`).
* metre les méta data :

```md
---
title: "intro_node"
display_title: "Introduction à Node"
lang: "fr"
---
```

> Le title **Doit** être le même que le nom du fichier.
> Lang n'a pas d’intérêt à l'heure actuel. Mais le système I18n est prévu réf: #3
> `Introduction à Node` est le titre affichiez sur la lef nav et dans le `<h1></h1>`

* Écrire le cours
* Ouvrir la pull request
