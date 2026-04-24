const express = require("express");

const router = express.Router();

const services = require("../data/services");

const startTime = Date.now();


// HEALTH CHECK
router.get("/health", (req, res) => {

    res.json({
        status: "OK",
        message: "Server is healthy"
    });

});


// GET SERVICES
router.get("/services", (req, res) => {

    res.json(services);

});


// GET UPTIME
router.get("/uptime", (req, res) => {

    const uptimeSeconds =
        Math.floor((Date.now() - startTime) / 1000);

    res.json({
        uptime: `${uptimeSeconds} seconds`
    });

});


// PING
router.get("/ping", (req, res) => {

    res.json({
        message: "pong"
    });

});


module.exports = router;
