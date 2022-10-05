/*Importation des module*/
import http                                 from 'http';
import url                                  from 'url';
import { readFile, readFileSync }           from 'fs';
import { course_gen }                       from './course.mjs'; /*Generation of course with markdown*/
import { blog_index_gen }                   from './blog_index.mjs';
import { blog_content_gen }                  from './blog_content.mjs';


/*Creation of server http*/
const server = http.createServer(async function(req, res) {  
    var path = url.parse(req.url).pathname;
    let routes = await get_routes();
    
    /*send response*/
    if(routes === 404){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(error_404);
    }if(routes.path !== undefined){
        res.statusCode = 200;
        res.setHeader('Content-Type', routes.content_type);
        readFile(routes.path, 'utf8', (err, data) => {
            if (err) {
              res.end(error_404);
            }else{
                res.end(data);
            };
        })
    }if(routes.function_name !== undefined){
        res.statusCode = 200;
        res.setHeader('Content-Type', routes.content_type);
        var string_function = get_string_function(routes);
        res.end(await eval(string_function))
    };

    /*Check routes*/
    async function get_routes(){
        let raw_routes = await get_raw_routes();
        for (let i = 0; i < raw_routes.length; i++) {
            if (path === raw_routes[i].call){
                return{
                    "path" : raw_routes[i].path,
                    "content_type" : raw_routes[i].content_type
                }
            }if(path === raw_routes[i].function_call){
                return{
                "function_name" : raw_routes[i].function_name,
                "function_arg" : raw_routes[i].function_arg,
                "content_type" : raw_routes[i].content_type
            }
            }
        }
        return 404;
    }
});

server.listen(8080, ()=>{
    console.log(`Server run on http://localhost:8080`)
});

/*get json of routes from routes.json*/
async function get_raw_routes(){
    return JSON.parse(readFileSync('./routes.json'))
}

/*Get data from 404.html*/
const error_404 = readFileSync(`./content/404.html`,(err,data)=>{
    if (err){
        return '<h1>404</h1>'
    }else{
        return data
    }
})

/*generate function with `N` argument*/
function get_string_function(argument){
    var arg_ = ``
    for (let i = 0; i < argument.function_arg.length; i++) {
        arg_ += `${argument.function_arg[i]},`
    }
    const arg = arg_.substring(0, arg_.length - 1);
    return `${argument.function_name}(${arg})`
}