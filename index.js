const app = require('./src/app');
const PORT = 3000;
const startText = `Server is on http://localhost:${ PORT }`;

app.listen(PORT, () => console.log(startText));

