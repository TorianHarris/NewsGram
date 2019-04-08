const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const exphbs = require ('express-handlebars');
const scrape = require('./scraper');
//const routes = require('./routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

router.get('/', function(req, res) {
    res.render('./homepage.handlebars', {name: 'Shaun'})
})

app.use(router);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

 MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
scrape();
app.listen(PORT, () => console.log("Listening on port: " + PORT));