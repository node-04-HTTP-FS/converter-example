const http = require('http');
const url = require('url');
const converter = require('./converter');
const log = require('./log');

const serverFunc = async (req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    let respText = 'idk';
    let status = 400;
    let headers = {
        'Content-Type': 'text/html'
    };

    switch(pathname){
        case '/converter':{
            status = 200;
            respText = converter(query.value, query.to);
            break;
        }
        case '/logs':{
            status = 200;
            respText = await log.r();
            break;
        }
        default:{
            break;
        }
    }

    log.w(pathname, query, status, respText);
    res.writeHead(status, headers);
    res.end(String(respText));
};

const app = http.createServer(serverFunc);

module.exports = app;