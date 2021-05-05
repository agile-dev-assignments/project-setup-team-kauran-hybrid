const express = require("express");
const router = express.Router();
const axios = require("axios");
const bodyParser = require("body-parser");
const scraper = require("./scraper");
const mongo = require("./mongo/mongo");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req,res, next) => {
    // scraper.albert_scraper();
    // res.send('scraping');
    let {course, section} = req.query
    
    mongo.mongoGetNewSection(course, section).then((response) =>{
      //console.log(response)
      res.json(response)
    });
  })

module.exports = router;