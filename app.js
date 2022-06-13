const express = require('express')
const app = express()
const rutasMain = require('./routers/main.js')





app.use('/', rutasMain)



 


app.listen(3000, ()=>{
    console.log('Servidor funcionando en 3000');
});

