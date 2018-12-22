var mysql = require("mysql");
var connection;

module.exports = function (app) {
  app.get("/api/catsArray", function (req, res) {
    res.json(catsArray)
  })
};

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "friends_finder"
});
}
connection.connect(function(err) {
if (err) {
  console.error("error connecting: " + err.stack);
}
  });

connection.connect();
module.exports = connection;


