const app = require('./config/express')();
const port = app.get('port');

// RODANDO APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Server running in port ${port}`)
});