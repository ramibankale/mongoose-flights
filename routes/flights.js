const express = require('express');
const router = express.Router();

/* GET users listing. */
const flightsCtrl = require("../controllers/flights");

// GET route for /flights
router.get('/', flightsCtrl.index);
// GET route for /flights/new
router.get("/new", flightsCtrl.new);
//GET flights/show
router.get('/flights/:id', flightsCtrl.show);
//POST route for /flights
router.post("/", flightsCtrl.create);

module.exports = router;
