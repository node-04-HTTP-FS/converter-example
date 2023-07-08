const answer = (res, status, headers, answer) => {
    res.writeHead(status, headers);
    res.end(String(answer));
}

module.exports = answer;