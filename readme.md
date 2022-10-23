---
version: 'out-of-date'
---

# Course site project

This project aims to provide courses to learn web development.
Through html, css, javascript. Then nodejs for the back-end.

## things to do

- Write courses
- CSS
    - Adding color constants
    - Add responsive 
    - update to support blogs
    - Update 404 style
    - Hover dropdown I18n
    - Update le `<footer>`
- Add translation of I18n system
- Add toggle dark mode
- add system to order left nav (create json withe metadata and file -> create the left nav)
    - Add nex ent prev to course
- Update the `<head>`
- Add about section 
- Add contact section
- Add quizzes
- Add "exercise" section
    - Automatic generation of exercises 
- Write code of conduct
- Update the `<footer>`

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
