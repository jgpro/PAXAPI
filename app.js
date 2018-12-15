const { DateTime } = require("luxon");
const http = require("http");
http.createServer(function (req, res) {
  res.write("hello world");
  res.end();
}).listen(process.env.PORT);
console.log(DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds());
