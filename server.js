const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('./dist/test'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/test/' }
    );
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log('server started at post 8080')
});