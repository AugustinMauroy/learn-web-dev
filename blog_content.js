import * as fs from 'node:fs';
import mdMeta from 'markdown-it-meta';
import mdImport from 'markdown-it';
const md = mdImport({html: false, linkify: true, typographer: true}).use(mdMeta);

/**
 * 
 * @param { string } call 
 * @returns { string } html
 */
async function blogContentGen(call){
    return`<!DOCTYPE html>
            <html lang="fr">
                <head>
                    <meta charset="utf-8"/>
                    <title>${ await htmlTitle(call) }</title>
                    <link href="/css/style_blog.css" rel="stylesheet"/>
                    <link href="/css/theme.css" rel="stylesheet">
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
                        <article class="blog">
                            <h1>${ await htmlTitle(call) }</h1>
                            ${ await content(call) }
                        </article>
                    </main>
                    <footer>
                        <noscript>Votre navigateur n'accepte pas le JavaScript. Certaines fonctionnalités ne serons pas disponible.</noscript>
                        <p>Date de sortie: <time>${ await getTime(call) }</time></p>
                        <a href="/blog">Retour à la liste des post</a> | <a href="https://github.com/AugustinMauroy/learn_web_dev" target="_blank">Github</a>
                    </footer>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
                    <script>hljs.highlightAll();</script>
                </body>
            </html>`;
};

/**
 * 
 * @param { path } path 
 * @returns { string } html
 */
async function content(path){
    return md.render(
        fs.readFileSync(`./content/blog/${path}.md`, 'utf8')
    );
};

/**
 * 
 * @param { path } path 
 * @returns { string } date
 */
async function getTime(path){
    const rawMd = fs.readFileSync(`./content/blog/${path}.md`, 'utf8');
    const html = md.render(rawMd);
    const metaData = md.meta
    return metaData.date;
}

/**
 * 
 * @param { path } path 
 * @returns { string } html
 */
function htmlTitle(path){
    const rawMd = fs.readFileSync(`./content/blog/${path}.md`, 'utf8');
    const html = md.render(rawMd);
    const metaData = md.meta
    return metaData.display_title;
};

/**
 * 
 * @param { path } path
 * @returns { string } html
 */
export { blogContentGen };
export default blogContentGen;
