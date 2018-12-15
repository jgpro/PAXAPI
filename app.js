const { DateTime } = require("luxon");
const http = require("http");
http.createServer(function (req, res) {
  res.write(DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds());
  res.end();
}).listen(8080);
