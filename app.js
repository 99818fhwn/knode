const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! Change trigger Pipeline");
});
 
module.exports.app = app;
