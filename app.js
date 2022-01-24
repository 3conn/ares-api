require('dotenv').config()
const app = require('./src/config/express');

const port = process.env.PORT;

// RODANDO APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
    console.log(`Server running in port ${port}`)
  });