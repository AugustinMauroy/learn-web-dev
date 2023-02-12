import * as fs from 'node:fs';
import path from 'node:path';
import mdMeta from 'markdown-it-meta';
import mdImport from 'markdown-it';
const md = mdImport({html: false, linkify: true, typographer: true}).use(mdMeta);

/**
 * 
 * @param { string } call_lang 
 * @param { sting } call_type 
 * @returns { string } html
 */
async function courseGen(call_lang, call_type){
    return`<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>${ await htmlTitle(call_lang, call_type)}</title>
                    <link rel="icon" type="image/svg+xml" href="${ await icon(call_lang)}" sizes="any">
                    <link rel="stylesheet" href="/css/style_course.css"/>
                    <link rel="stylesheet" href="/css/theme.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/dark.min.css">
                    <script src="/js/index.js"></script>
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
                    <nav class="left_nav">
                        <h2>${ await leftNavTile(call_lang)}</h2>
                        ${await leftNav(call_lang)}
                    </nav>
                    <main class="course">
                        <h1>${ await htmlTitle(call_lang, call_type)}</h1>
                        ${await content(call_lang, call_type)}
                    </main>
                    <footer>
                        <!-- Si le browser ne support pas le javascript -->
                        <noscript>Votre navigateur n'accepte pas le JavaScript. Certaines fonctionnalités ne serons pas disponible.</noscript>
                        <a href="https://github.com/AugustinMauroy/learn_web_dev" target="_blank">Github</a>
                    </footer>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
                    <script>hljs.highlightAll();</script>
                </body>
            </html>`;
};

/**
 * 
 * @param { string } type
 * @param { string } path
 * @returns { string } html
 */
function content(type, path){
    return md.render(
        fs.readFileSync(`./content/${type}/${path}.md`, 'utf8')
    );
};

/**
 * 
 * @param { string } title
 * @returns { string } title
 */
function leftNavTile(title){
    switch (title){
    case 'html':
        return "L'html";
    case 'css':
        return "Le css";
    case 'js':
        return "Le javascript";
    case 'nodejs':
        return "NodeJS";
    case 'sql':
        return "Le sql";
    case undefined:
        return "404"
    default:
        return "404";
    };
};

/**
 * 
 * @param { sting } link 
 * @returns { path } icon
 */
function icon(link){
    switch (link){
    case 'html':
        return "/img/html.svg";
    case 'css':
        return "/img/css.svg";
    case 'js':
        return "/img/js.svg";
    case 'nodejs':
        return "/img/node.svg";
    case 'sql':
        return "";
    case undefined:
        return "404"
    default:
        return "404";
    };
};


async function leftNav(content){
    const directory = `./content/${content}/`;
    const files = fs.readdirSync(directory);
    let nav = `<ul>`
    files.forEach(async file => {        
        if (path.extname(file) == ".md")
            var rawMd = fs.readFileSync(`./content/${content}/${file}`, 'utf8')
            let html = md.render(rawMd);
            let metaData = md.meta;
            nav +=`
            <li>
                <a href="${metaData.title}">${metaData.display_title}</a>
            </li>`
        })
    nav += `</ul>`
    return nav;
};

async function htmlTitle(type,path){
    const rawMd = fs.readFileSync(`./content/${type}/${path}.md`, 'utf8');
    const html = md.render(rawMd);
    const metaData = md.meta
    return metaData.display_title;
};

export { courseGen };
export default courseGen;
