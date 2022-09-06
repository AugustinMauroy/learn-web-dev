const MarkdownIt = require('markdown-it')
const fs         = require('fs');

markdown = new MarkdownIt();

exports.markdowntohtml = async function(call){
    switch (call.lang) {
        case 'html':
            var html = "" +
            "<!DOCTYPE html>" +
            "<html>" +
                "<head>" +
                    '<meta charset="utf-8"/>'+
                    "<title>Cours sur l'html</title>" +
                    '<link rel="stylesheet" href="../css/style.css"/>' +
                    '<script scr="../js/inde.js"></script>' +
                "</head>" +
                "<header>" +
                    '<button onclick='+'"document.location='+"'/'"+'">Home</button>'+
                    '<button onclick='+'"document.location='+"'/html/what_is_html'"+'">Html</button>'+
                    '<button onclick='+'"document.location='+"'/css/what_is_css'"+'">CSS</button>'+
                    '<button onclick='+'"document.location='+"'/js/what_is_js'"+'">JavaScript</button>'+
                    '<button onclick='+'"document.location='+"'/nodejs/what_is_node'"+'">Nodejs</button>'+
                    '<button onclick='+'"document.location='+"'/sql/what_is_sql'"+'">SQL</button>'+
                "</header> " +
                "<body>" +
                    '<div class="left_nav">' +
                        "<h2>L'html</h2>"+
                        "<ul>" +
                            "<li>" +
                                '<a href="/html/what_is_html">'+"Qu'est ce que l'html?"+'</a>' +
                            "</li>" +
                        "</ul>" +
                    "</div>"+
                    '<div class="content">';
                    html+=await markdown.render(
                        fs.readFileSync('Page/html/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenu.</h1>"
                            }else{
                                return data
                            }
                        })
                    );
                html +="</div>" ;
                "</body>" +
            "</html>";
            return html;
        case 'css':
            var html = "" +
            "<!DOCTYPE html>" +
            "<html>" +
                "<head>" +
                    '<meta charset="utf-8"/>'+
                    "<title>Cours sur le css</title>" +
                    '<link rel="stylesheet" href="../css/style.css"/>' +
                    '<script scr="../js/inde.js"></script>' +
                "</head>" +
                "<header>" +
                    '<button onclick='+'"document.location='+"'/'"+'">Home</button>'+
                    '<button onclick='+'"document.location='+"'/html/what_is_html'"+'">Html</button>'+
                    '<button onclick='+'"document.location='+"'/css/what_is_css'"+'">CSS</button>'+
                    '<button onclick='+'"document.location='+"'/js/what_is_js'"+'">JavaScript</button>'+
                    '<button onclick='+'"document.location='+"'/nodejs/what_is_node'"+'">Nodejs</button>'+
                    '<button onclick='+'"document.location='+"'/sql/what_is_sql'"+'">SQL</button>'+
                "</header> " +
                "<body>" +
                    '<div class="left_nav">' +
                        "<h2>Le css</h2>"+
                        "<ul>" +
                            "<li>" +
                                '<a href="/css/what_is_css">'+"Qu'est ce que le CSS?"+'</a>' +
                            "</li>" +
                        "</ul>" +
                    "</div>"+
                    '<div class="content">';
                    html+=await markdown.render(
                        fs.readFileSync('Page/css/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenus.</h1>"
                            }else{
                                return data
                            }
                        })
                    );
                html +="</div>" ;
                "</body>" +
            "</html>";
            return html;
        case 'js':
            var html = "" +
            "<!DOCTYPE html>" +
            "<html>" +
                "<head>" +
                    '<meta charset="utf-8"/>'+
                    "<title>Cours sur le Javascript</title>" +
                    '<link rel="stylesheet" href="../css/style.css"/>' +
                    '<script scr="../js/inde.js"></script>' +
                "</head>" +
                "<header>" +
                    '<button onclick='+'"document.location='+"'/'"+'">Home</button>'+
                    '<button onclick='+'"document.location='+"'/html/what_is_html'"+'">Html</button>'+
                    '<button onclick='+'"document.location='+"'/css/what_is_css'"+'">CSS</button>'+
                    '<button onclick='+'"document.location='+"'/js/what_is_js'"+'">JavaScript</button>'+
                    '<button onclick='+'"document.location='+"'/nodejs/what_is_node'"+'">Nodejs</button>'+
                    '<button onclick='+'"document.location='+"'/sql/what_is_sql'"+'">SQL</button>'+
                "</header> " +
                "<body>" +
                    '<div class="left_nav">' +
                        "<h2>Le javascript</h2>"+
                        "<ul>" +
                            "<li>" +
                                '<a href="/js/what_is_js">'+"Qu'est ce que le JavaScript?"+'</a>' +
                            "</li>" +
                        "</ul>" +
                    "</div>"+
                    '<div class="content">';
                    html+=await markdown.render(
                        fs.readFileSync('Page/js/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenus.</h1>"
                            }else{
                                return data
                            }
                        })
                    );
                html +="</div>" ;
                "</body>" +
            "</html>";
            return html;
        case 'nodejs':
            var html = "" +
            "<!DOCTYPE html>" +
            "<html>" +
                "<head>" +
                    '<meta charset="utf-8"/>'+
                    "<title>Cours sur NodeJS</title>" +
                    '<link rel="stylesheet" href="../css/style.css"/>' +
                    '<script scr="../js/inde.js"></script>' +
                "</head>" +
                "<header>" +
                    '<button onclick='+'"document.location='+"'/'"+'">Home</button>'+
                    '<button onclick='+'"document.location='+"'/html/what_is_html'"+'">Html</button>'+
                    '<button onclick='+'"document.location='+"'/css/what_is_css'"+'">CSS</button>'+
                    '<button onclick='+'"document.location='+"'/js/what_is_js'"+'">JavaScript</button>'+
                    '<button onclick='+'"document.location='+"'/nodejs/what_is_node'"+'">Nodejs</button>'+
                    '<button onclick='+'"document.location='+"'/sql/what_is_sql'"+'">SQL</button>'+
                "</header> " +
                "<body>" +
                    '<div class="left_nav">' +
                        "<h2>NodeJS</h2>"+
                        "<ul>" +
                            "<li>" +
                                '<a href="/nodejs/what_is_node">'+"Qu'est ce que nodejs?"+'</a>' +
                            "</li>" +
                        "</ul>" +
                    "</div>"+
                    '<div class="content">';
                    html+=await markdown.render(
                            fs.readFileSync('Page/nodejs/'+ call.type +'.md', 'utf8',function (error,data){
                                if (error){
                                    return "<h1>Un probème est survenus.</h1>"
                                }else{
                                    return data
                                }
                            })
                        );
                html +="</div>" ;
                "</body>" +
            "</html>";
            return html;
        case 'sql':
            var html = "" +
            "<!DOCTYPE html>" +
            "<html>" +
                "<head>" +
                    '<meta charset="utf-8"/>'+
                    "<title>Cours sur le sql</title>" +
                    '<link rel="stylesheet" href="../css/style.css"/>' +
                    '<script scr="../js/inde.js"></script>' +
                "</head>" +
                "<header>" +
                    '<button onclick='+'"document.location='+"'/'"+'">Home</button>'+
                    '<button onclick='+'"document.location='+"'/html/what_is_html'"+'">Html</button>'+
                    '<button onclick='+'"document.location='+"'/css/what_is_css'"+'">CSS</button>'+
                    '<button onclick='+'"document.location='+"'/js/what_is_js'"+'">JavaScript</button>'+
                    '<button onclick='+'"document.location='+"'/nodejs/what_is_node'"+'">Nodejs</button>'+
                    '<button onclick='+'"document.location='+"'/sql/what_is_sql'"+'">SQL</button>'+
                "</header> " +
                "<body>" +
                    '<div class="left_nav">' +
                        "<h2>Le sql</h2>"+
                        "<ul>" +
                            "<li>" +
                                '<a href="/sql/what_is_sql">'+"Qu'est ce que le SQL?"+'</a>' +
                            "</li>" +
                        "</ul>" +
                    "</div>"+
                    '<div class="content">';
                    html+=await markdown.render(
                        fs.readFileSync('Page/sql/'+ call.type +'.md', 'utf8',function (error,data){
                            if (error){
                                return "<h1>Un probème est survenus.</h1>"
                            }else{
                                return data
                            }
                        })
                    );
                html +="</div>" ;
                "</body>" +
            "</html>";
            return html;
        default:
            return "<h1>Un gros problème est survenus</h1>"
        }
};
