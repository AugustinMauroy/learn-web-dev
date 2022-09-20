/*importation des modules*/
import fs from 'fs';
import path from 'path';
import mdMeta   from 'markdown-it-meta'
import mdImport from 'markdown-it';
const md = mdImport({html: false,linkify: true,typographer: true}).use(mdMeta);

/*function left_nav*/
async function left_nav (lang){
    var directory = "./Page/"+lang+"/";
    var files = fs.readdirSync(directory);
    var nav = `<ul>`
    files.forEach(file => {        
        if (path.extname(file) == ".md")
            var rawMd = fs.readFileSync(directory+file, 'utf8');
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
}

/*export de la function left_nav*/
export {left_nav}