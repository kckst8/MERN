var express = require("express");

var api = express();

api.get("/data", function(req, res) {
  res.json([
    {
      id: 1,
      name: "One"
    },
    {
      id: 2,
      name: "Two"
    }
  ]);
});

api.post("/data", function(req, res) {});

api.listen(3000);
