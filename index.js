const express = require("express");

const app = express();

app.use(express.json());

const mock_res = {
  "a": {
    "abc": [1, 5, 6, 3, 62]
  },
  "b": {},
  "c": [{ "a1": 67 }, { "c1": 89 }],
  "d":false
}

app.post("/test_api", (req, res) => {
  res.json({
    status: "success",
    result: mock_res
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;