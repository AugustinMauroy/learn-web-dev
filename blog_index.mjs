/*Importation des modules*/
import { readdirSync, readFileSync }    from 'fs';
import path                             from 'path';
import mdMeta                           from 'markdown-it-meta';
import mdImport                         from 'markdown-it';
const md = mdImport({html: false,linkify: true,typographer: true}).use(mdMeta);

/*export function qui crée les cours*/
async function blog_index_gen(){
    return`<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>Blog</title>
                    <link href="/css/style_blog.css" rel="stylesheet"/>
                    <link href="./css/theme.css" rel="stylesheet">
                    <script src="../js/index.js"></script>
                </head>
                <body>
                    <header>
                        <button onclick="document.location='/'">Home</button>
                        <button onclick="document.location='/html/what_is_html'">Html</button>
                        <button onclick="document.location='/css/what_is_css'">CSS</button>
                        <button onclick="document.location='/js/what_is_js'">JavaScript</button>
                        <button onclick="document.location='/nodejs/intro_node'">Nodejs</button>
                        <button onclick="document.location='/sql/what_is_sql'">sql</button>
                    </header>
                    <main>
                        ${await content()}
                    </main>
                    <footer>
                        <!-- Si le browser ne support pas le javascript -->
                        <noscript>Votre navigateur n'accepte pas le JavaScript. Certaines fonctionnalités ne serons pas disponible.</noscript>
                        <a href="https://github.com/AugustinMauroy/learn_web_dev" target="_blank">Github</a>
                    </footer>
                </body>
            </html>`;
};

/*Generate Content*/
async function content(){
    var files = readdirSync('./content/blog');
    var html = ``  
    files.forEach(file => { 
             
        if (path.extname(file) == ".md"){
            var rawMd = readFileSync(`./content/blog/${file}`, 'utf8');
            var markdown = md.render(rawMd);
            var metaData = md.meta;
            var title = metaData.title;
            var display_title = metaData.display_title;
            var description = metaData.description;
            html += `<article class="blog">
                        <h2>${display_title}</h2>
                        <p>${description}</p>
                        <a href="blog/${title}">${display_title}</a>
                     </article>`
        }
    });
    return html
};

/*Export html of course*/
export {blog_index_gen};
