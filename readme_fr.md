---
version: 'release'
---

# Projet de site de cours

Ce projet vise à fournir des cours pour apprendre le développement web.
Grâce à l'html, le css, le javascript. Puis nodejs pour le back-end.
## choses à faire

- Rédiger des cours
- CSS
    - Ajouter des constantes de couleur
    - Ajouter du responsive 
    - Mise à jour pour supporter les blogs
    - Mettre à jour le style 404
    - Hover dropdown I18n
    - Mise à jour du `<footer>`.
    - Update le css pour index.hml
    - Update de index_blog
    - Support correct highlight.js
- Ajout de la traduction du système I18n
- Ajout du toggle dark mode
- Ajouter un système pour ordonner le nav de gauche (créer json avec les metadata et le fichier -> créer la `lef_nav`)
    - Ajouter nex ent prev au cours
- Mettre à jour le `<head>`
- Ajouter la section about 
- Ajouter la section contact
- Ajouter des quiz
- Ajouter une section "exercices
    - Génération automatique d'exercices 
- Rédiger un code de conduite
- Mettre à jour le `<footer>`.

## Pour teste le projet en locale

Utiliser cette commande pour installer les dépendance:

```bash
npm install
```

Et par la suite il faut exécuter cette commande:

```bash
npm start
```

## Docker
Install node dependencies
```bash
docker run -v $(pwd):/app learnweb npm install
```

Start project
```bash
docker-compose up -d
```
