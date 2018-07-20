const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     console.log(req.query);
//     console.log(req.body);
//     console.log(req.header);
//     console.log(req.params);
//     res.send('Hello');
// });

app.use(express.static(__dirname + '/public'));

app.listen(8080);