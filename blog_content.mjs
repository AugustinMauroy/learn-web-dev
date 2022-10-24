/*Importation des modules*/
import { readFileSync }    from 'fs';
import path                             from 'path';
import mdMeta                           from 'markdown-it-meta';
import mdImport                         from 'markdown-it';
const md = mdImport({html: false,linkify: true,typographer: true}).use(mdMeta);

/*export function qui crée les cours*/
async function blog_content_gen(call){
    return`<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>${html_title(call)}</title>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link href="./css/theme.css" rel="stylesheet">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/dark.min.css">
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
                        <article>
                            <h1>${html_title(call)}</h1>
                            ${content(call)}
                        </article>
                    </main>
                    <footer>
                        <noscript>Votre navigateur n'accepte pas le JavaScript. Certaines fonctionnalités ne serons pas disponible.</noscript>
                        <p>Date de sortie: <time>${get_time(call)}</time></p>
                        <a href="/blog">Retour à la liste des post</a>
                    </footer>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
                    <script>hljs.highlightAll();</script>
                </body>
            </html>`;
};

/*Generate Content*/
function content(path){
    return md.render(
    readFileSync(`./content/blog/${path}.md`, 'utf8',function (error,data){
        if (error){
            return "<h1>Un problème est survenu.</h1>"
        }else{
            return data
        };
    })
    );
};

/*Generate date of blog*/
function get_time(path){
    var rawMd = readFileSync(`./content/blog/${path}.md`, 'utf8', (err, data)=>{
        if(err){
            return 'error'
        }else{
            return data
        }
    });
    if (rawMd === 'error'){
        return 'error'
    }
    var html = md.render(rawMd);
    var metaData = md.meta
    return metaData.date;
}

/*Generate html title*/
function html_title(path){
    var rawMd = readFileSync(`./content/blog/${path}.md`, 'utf8', (err, data)=>{
        if(err){
            return 'error'
        }else{
            return data
        }
    });
    if (rawMd === 'error'){
        return 'error'
    }
    var html = md.render(rawMd);
    var metaData = md.meta
    return metaData.display_title;
};

/*Export html of course*/
export {blog_content_gen};