const fs = require('fs');
const FNAME = 'log.txt';

const w = (pathname, query, status, respText) => {
    const queryStr = Object.entries(query).reduce((acc, [key, val]) => `${ acc }${ key }=${ val }, `, '');

    const now = Date.now();
    if(pathname === '/logs') respText = 'logs';
    const logStr = `${ now } IN: ${ pathname }  {${ queryStr }} OUT: ${ status }  ${ respText }\n`;

    const appFileCBack = (err) => {
        if(err) throw err;
        console.log(logStr);
    }

    fs.appendFile(FNAME, logStr, appFileCBack);
}

const r = () => {
    return fs.promises.readFile(FNAME).then(d => d);
}

module.exports = { w, r };