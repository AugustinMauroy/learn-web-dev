const http          = require('http');
const url           = require('url');
const fs            = require('fs');
const mymarkdown    = require('./markdown.js'); /*template + markdown*/

http.createServer(async function(request, response) {  
    var path = url.parse(request.url).pathname;
    switch (path) {  
        case '/':  
            fs.readFile("Page/index.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end(); 
                }  
            });  
        break;
        case '/html/what_is_html':
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            var call = {lang:"html",type:"what_is_html"};
            response.write(await mymarkdown.markdowntohtml(call)); 
            response.end(); 
        break;
        case '/css/what_is_css':
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            var call = {lang:"css",type:"what_is_css"};
            response.write(await mymarkdown.markdowntohtml(call)); 
            response.end(); 
        break;
        case '/js/what_is_js':
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            var call = {lang:"js",type:"what_is_js"};
            response.write(await mymarkdown.markdowntohtml(call)); 
            response.end(); 
        break;
        case '/nodejs/what_is_node':
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            var call = {lang:"nodejs",type:"what_is_node"};
            response.write(await mymarkdown.markdowntohtml(call)); 
            response.end(); 
        break;
        case '/sql/what_is_sql':
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
            var call = {lang:"sql",type:"what_is_sql"};
            response.write(await mymarkdown.markdowntohtml(call)); 
            response.end(); 
        break;
        case '/css/style.css':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/css'
                    });
                    response.write(data);
                    response.end();
                }
            });
        break;
        case '/js/index.js':
            fs.readFile(__dirname + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/javascript'
                    });
                    response.write(data);
                    response.end();
                }
            });
        break;
        default: 
        response.writeHead(404, {'Content-Type': 'text/html'}); 
        fs.readFile("Page/404.html", function(error, data) {  
            if (error) {  
                response.write('<h1>404</h1><p>Page not found</p><a href="/">Home</a>');
                response.end();
            } else {
                response.write(data);  
                response.end();
            }  
        });
        break;  
    }  
}).listen(8080);