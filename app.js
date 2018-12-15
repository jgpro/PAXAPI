const { DateTime } = require("luxon");
const http = require("http");
var data = DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds();
http.createServer(function (req, res) {
  res.write(`<p><a href="#" onclick="alert(`data`)">Hello</a> World</p>`);
  res.end();
}).listen(process.env.PORT);
console.log(data);
