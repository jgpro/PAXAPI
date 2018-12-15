const { DateTime } = require("luxon");
const http = require("http");
var data = DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds();
http.createServer(function (req, res) {
  res.write(`<p><a href="#">Hello</a> World</p>`);
  console.log(JSON.stringify(DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds()));
  res.end();
}).listen(process.env.PORT);
console.log(data);
