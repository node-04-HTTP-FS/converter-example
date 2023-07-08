const fs = require('fs');
const F_NAME = 'log.txt';

const w = (pathname, query, answer, status) => {
    const queries = Object.entries(query)
        .reduce((acc, [key, val])=>`${ acc } ${ key }:${ val },`, '');
    const logRecord = `${ pathname } -- arguments:${ queries } -- ${ status } -- ${ answer }`;
    const now = Date.now();
    const wText = `${ now } :: ${ logRecord }\n`;

    fs.appendFile(F_NAME, wText, (err) => {
        if(err) throw err;
        console.log('ADD LOG --> ', wText);
    });
}

const r = (cback) => {
    fs.readFile(F_NAME, (err, data) => {
        if(err) throw err;
        cback(data);
    });
}

module.exports = { w, r };