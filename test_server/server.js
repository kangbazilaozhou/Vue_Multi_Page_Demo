const express = require("express");


const app = express();
app.use(express.static(__dirname + "/static"));

app.get('/person', (request, response) => {
    response.send({
        name: 'tom',
        age: 18
    });
});

app.listen(80, (err) => {
    if (!err) {
        console.log("服务器启动成功了");
    } else {
        console.log(err);
    }
});