var express = require("express");
var app = express();
var faker = require("faker");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/falleninlove/:thing", (req, res) => {
    var thing = req.params.thing.toLowerCase();
    res.render("love", {
        thingVar: thing
    });
});

app.get("/shop", (req, res) => {
    var products = [];
    for (var i = 0; i <= 10; i++) {
        var item = {
            name: faker.commerce.productName(),
            price: faker.commerce.price()
        };
        products.push(item);
    }
    res.render("products", {
        products: products
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);