const express = require("express"); // create web server belongs to nodejs
const app = express();
const port = 3000;

const Article = require("./models/Article");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.get("/numbers", (req, res) => {
  let numbers = 0;
  for (let i = 0; i < 1000000000; i++) {
    numbers += i;
  }
  // res.send(`Hello World! The sum is: ${numbers}`);
  // res.send('<h1 style="color: red;">Hello World! The sum is: ' + numbers + "</h1>");
  // res.sendFile(__dirname + "/views/numbers.html");
  res.render("numbers.ejs", { numbers });
});

app.get("/find-sum-path/:num1/:num2", (req, res) => {
  res.send(
    `sum of ${req.params.num1} and ${req.params.num2} is: ${parseInt(req.params.num1) + parseInt(req.params.num2)}`,
  );
});

app.get("/find-sum-body", (req, res) => {
  console.log("res.body:", req.body);
  res.send("Hello");
});

app.get("/find-sum-query", (req, res) => {
  console.log("res.query:", req.query.num1);
  // res.send(`Hello ${req.query.num1}`);
  res.json({
    num1: req.query.num1,
    num2: req.query.num2,
    sum: parseInt(req.query.num1) + parseInt(req.query.num2),
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
