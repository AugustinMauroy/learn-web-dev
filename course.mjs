/*Importation des modules*/
import { readdirSync, readFileSync }    from 'fs';
import path                             from 'path';
import mdMeta                           from 'markdown-it-meta';
import mdImport                         from 'markdown-it';
const md = mdImport({html: false,linkify: true,typographer: true}).use(mdMeta);

/*export function qui crée les cours*/
async function course_gen(call_lang, call_type){
    return`<!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8"/>
                    <title>${html_title(call_lang, call_type)}</title>
                    <link rel="icon" type="image/svg+xml" href="${icon(call_lang)}" sizes="any">
                    <link rel="stylesheet" href="../css/style.css"/>
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
                        <nav class="left_nav">
                            <h2>${left_nav_tile(call_lang)}</h2>
                            ${left_nav(call_lang)}
                        </nav>
                        <article>
                            ${content(call_lang, call_type)}
                        </article>
                    </main>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
                    <script>hljs.highlightAll();</script>
                </body>
            </html>`;
};

/*Generate Content*/
function content(type,path){
    return md.render(
    readFileSync(`content/${type}/${path}.md`, 'utf8',function (error,data){
        if (error){
            return "<h1>Un problème est survenu.</h1>"
        }else{
            return data
        };
    })
    );
};

/*Generate <h2> lef_nav*/
function left_nav_tile(title){
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

/*Select icon*/
function icon(link){
    switch (link){
    case 'html':
        return "/img/html.svg";
    case 'css':
        return "/img/css.svg";
    case 'js':
        return "/img/html.svg";
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

/*Generate lef_nav*/
function left_nav(content){
    var directory = `./content/${content}/`;
    var files = readdirSync(directory);
    var nav = `<ul>`
    files.forEach(file => {        
        if (path.extname(file) == ".md")
            var rawMd = readFileSync(directory+file, 'utf8');
            var html = md.render(rawMd);
            var metaData = md.meta;
            var title = metaData.title;
            var display_title = metaData.display_title;
            nav +=`
            <li>
                <a href="${title}">${display_title}</a>
            </li>`
        })
    nav += `</ul>`
    return nav;
};

/*Generate html title*/
function html_title(type,path){
    var rawMd = readFileSync(`content/${type}/${path}.md`, 'utf8', (err, data)=>{
        if(err){
            return 'Error'
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
export {course_gen};