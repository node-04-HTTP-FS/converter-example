const http = require('http');
const url = require('url');
const converter = require('./converter');
const log = require('./log');
const answer = require('./answer');

const app = http.createServer((req, res)=>{
    const headers = {
        'Content-Type' : 'text/html'
    };
    let answText = 'idk';
    let status = 400;
    const { pathname, query } = url.parse(req.url, true);

    switch(pathname){
        case '/converter':{
            status = 200;
            answText = converter(query.to, query.value);
            answer(res, status, headers, answText)
            break;
        }
        case '/logs':{
            status = 200;
            log.r((data) => answer(res, status, headers, data));
            break;
        }
        default:{
            answer(res, status, headers, answText);
        }
    }
    
    log.w(pathname, query, answText, status);
    console.log('A');
});

module.exports = app;