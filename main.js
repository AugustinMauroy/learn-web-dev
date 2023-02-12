import * as http from 'node:http';
import * as url from 'node:url';
import { readFile } from 'node:fs';
import { courseGen } from './course.js';
import { blogIndexGen } from './blog_index.js';
import { blogContentGen } from './blog_content.js';


const server = http.createServer(async (req,res) => {  
    let path = url.parse(req.url).pathname;
    let routes = await getRoutes();
    
    if(routes === 404){
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(error404);
    }if(routes.path !== undefined){
        res.statusCode = 200;
        res.setHeader('Content-Type', routes.content_type);
        readFile(routes.path, 'utf8', (err, data) => {
            if (err) {
              res.end(error404);
            }else{
                res.end(data);
            };
        })
    }if(routes.function_name !== undefined){
        res.statusCode = 200;
        res.setHeader('Content-Type', routes.content_type);
        let stringFunction = await getStringFunction(routes);
        let data = await eval(stringFunction);
        res.end(data)
    };

    /**
     * 
     * @returns { object } return object of routes
     */
    async function getRoutes(){
        let raw_routes = await rawRoutes();
        for (let i = 0; i < raw_routes.length; i++) {
            if (path === raw_routes[i].call){
                return raw_routes[i]
            }if(path === raw_routes[i].function_call){
                return raw_routes[i]
            }
        }
        return 404;
    }
});

server.listen(8080, ()=>{
    console.log(`Server run on http://localhost:8080`)
});

const rawRoutes = async () => {
    return new Promise((resolve, reject) => {
        readFile('./routes.json', 'utf8', (err, data) => {
            if (err) {
              reject(err);
            }else{
                resolve(JSON.parse(data));
            };
        });
    });
}; 


const error404 = async () => {
    return new Promise((resolve, reject) => {
        readFile('./content/404.html', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            };
        });
    });
};

/**
 * 
 * @param { Array } argument
 * @returns { string } return string of function
 * @example getStringFunction(["'nodejs'","'first_script'"]) => "courseGen('nodejs','first_script')"
 */
async function getStringFunction(argument){
    let arg = ``
    for (let i = 0; i < argument.function_arg.length; i++) {
        arg += `${argument.function_arg[i]},`
    }
    const resultArg = arg.slice(0, -1);
    return `${argument.function_name}(${resultArg})`
};