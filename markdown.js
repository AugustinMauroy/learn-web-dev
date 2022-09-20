/*Importation des modules*/
import fs           from 'fs';
import mdMeta       from 'markdown-it-meta';
import mdImport     from 'markdown-it';
import {left_nav}   from './left_nav.js'
const md = mdImport({html: false,linkify: true,typographer: true}).use(mdMeta);

/*export function qui crée les cours*/
async function markdowntohtml(call){
    switch (call.lang) {
        case 'html':
        var html =  `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Cours sur l'html</title>
                    <link rel="stylesheet" href="../css/style.css"/>
                    <script src="../js/index.js"></script>
                </head>
                <header>
                    <button onclick="document.location='/'">Home</button>
                    <button onclick="document.location='/html/what_is_html'">Html</button>
                    <button onclick="document.location='/css/what_is_css'">CSS</button>
                    <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                    <button onclick="document.location='/nodejs/what_is_node'">Nodejs</button>
                    <button onclick="document.location='/sql/what_is_sql'">sql</button>
                </header>
                <body>
                    <nav class="left_nav">
                        <h2>L'html</h2>`+
                    await left_nav(call.lang)+
                    `</nav>
                    <main>`+
                    await md.render(
                        fs.readFileSync('Page/html/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenu.</h1>"
                            }else{
                                return data
                            }
                        })
                    )+
                    `</main>
                </body>
            </html>`
            return html;
        case 'css':
            var html =`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Cours sur le css</title>
                    <link rel="stylesheet" href="../css/style.css"/>
                    <script src="../js/index.js"></script>
                </head>
                <header>
                    <button onclick="document.location='/'">Home</button>
                    <button onclick="document.location='/html/what_is_html'">Html</button>
                    <button onclick="document.location='/css/what_is_css'">CSS</button>
                    <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                    <button onclick="document.location='/nodejs/what_is_node'">Nodejs</button>
                    <button onclick="document.location='/sql/what_is_sql'">sql</button>
                </header>
                <body>
                    <nav class="left_nav">
                        <h2>Le css</h2>`+
                        await left_nav(call.lang)+
                    `</nav>
                    <main>`+
                    await md.render(
                        fs.readFileSync('Page/css/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenus.</h1>"
                            }else{
                                return data
                            }
                        })
                    )+
                    `<main>
                </body>
            </html>`;
            return html;
        case 'js':
            var html =`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Cours sur le Javascript</title>
                    <link rel="stylesheet" href="../css/style.css"/>
                    <script src="../js/index.js"></script>
                </head>
                <header>
                    <button onclick="document.location='/'">Home</button>
                    <button onclick="document.location='/html/what_is_html'">Html</button>
                    <button onclick="document.location='/css/what_is_css'">CSS</button>
                    <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                    <button onclick="document.location='/nodejs/what_is_node'">Nodejs</button>
                    <button onclick="document.location='/sql/what_is_sql'">sql</button>
                </header>
                <body>
                    <nav class="left_nav">
                        <h2>Le javascript</h2>`+
                        await left_nav(call.lang)+
                    `</nav>
                    <main>`+
                    await md.render(
                        fs.readFileSync('Page/js/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenus.</h1>"
                            }else{
                                return data
                            }
                        })
                    )+
                    `<main>
                </body>
            </html>`;
            return html;
        case 'nodejs':
            var html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Cours sur NodeJS</title>
                    <link rel="stylesheet" href="../css/style.css"/>
                    <script src="../js/index.js"></script>
                </head>
                <header>
                    <button onclick="document.location='/'">Home</button>
                    <button onclick="document.location='/html/what_is_html'">Html</button>
                    <button onclick="document.location='/css/what_is_css'">CSS</button>
                    <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                    <button onclick="document.location='/nodejs/what_is_node'">Nodejs</button>
                    <button onclick="document.location='/sql/what_is_sql'">sql</button>
                </header>
                <body>
                    <nav class="left_nav">
                        <h2>NodeJS</h2>`+
                        await left_nav(call.lang)+
                    `</nav>
                    <main>`+
                    await md.render(
                            fs.readFileSync('Page/nodejs/'+ call.type +'.md', 'utf8',function (error,data){
                                if (error){
                                    return "<h1>Un probème est survenu.</h1>"
                                }else{
                                    return data
                                }
                            })
                        )+
                    `</main>
                </body>
            </html>`
            return html;
        case 'sql':
            var html =`
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Cours sur le sql</title>
                    <link rel="stylesheet" href="../css/style.css"/>
                    <script src="../js/index.js"></script>
                </head>
                <header>
                    <button onclick="document.location='/'">Home</button>
                    <button onclick="document.location='/html/what_is_html'">Html</button>
                    <button onclick="document.location='/css/what_is_css'">CSS</button>
                    <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                    <button onclick="document.location='/nodejs/what_is_node'">Nodejs</button>
                    <button onclick="document.location='/sql/what_is_sql'">sql</button>
                </header>
                <body>
                    <nav class="left_nav">
                        <h2>Le sql</h2>`+
                        await left_nav(call.lang)+
                    `</nav>
                    <main>`+
                    await md.render(
                        fs.readFileSync('Page/sql/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenu.</h1>"
                            }else{
                                return data
                            }
                        })
                    )+
                    `</main>
                </body>
            </html>`
            return html;
        default:
            return "<h1>Un gros problème est survenu.</h1>"
        }
};

export {markdowntohtml};