const express = require('express');
const router = express.Router();
const pipelineController = require('../controllers/pipelineController');

router.post('/pipelines', pipelineController.createPipeline);
router.get('/pipelines', pipelineController.getAllPipelines);
router.get('/pipelines/:id', pipelineController.getPipelineById);
router.put('/pipelines/:id', pipelineController.updatePipeline);
router.delete('/pipelines/:id', pipelineController.deletePipeline);

module.exports = router;
