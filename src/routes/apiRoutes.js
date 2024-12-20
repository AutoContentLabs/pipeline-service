const express = require('express');
const pipelineRoutes = require('./pipelineRoutes');
const router = express.Router();

router.get('/', async (req, res) => {
    // The return value is configured.
    // The date and time are prepared ISO format.
    var value = {
        dateTime: new Date().toISOString(),
    }

    // The successful answer is transmitted and data is sent.
    var result = res.status(200).json(value)

    // response
    return result
});

router.use(pipelineRoutes)

module.exports = router;
