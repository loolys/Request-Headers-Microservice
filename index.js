const express = require ('express');
const os = require('os');

var app = express();
function data(ip, oper, lang) {
  return {
    "ip": ip.replace(/^.*:/, ''),
    "Operating System": oper,
    "Language": lang,
  };
}
app.get('/', function(req, res) {
  let jason = data(req.ip, os.platform(), req.acceptsLanguages()[0]);
  let obj = JSON.stringify(jason, null, 2);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(obj);
});
let port = process.env.PORT || 5000;
app.listen(port);
