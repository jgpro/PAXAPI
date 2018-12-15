const { DateTime } = require("luxon");
console.log(DateTime.utc().startOf('month').plus( { months: 1 } ).toSeconds());
