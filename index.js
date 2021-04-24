const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port =8080;
// const usersRoute = require('./routes/users.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use('/api/users',usersRoute);

const srv =
mongoose.connect('mongodb+srv://BankApi:20308581@bankapi.jyjei.mongodb.net/bank',
 {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(() => {
    console.log("database connect")
});

app.listen(port,()=>{
    console.log(`application start at ${port}`)
})
