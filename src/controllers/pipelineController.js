const pipelineService = require('../services/pipelineService');

class PipelineController {
    async createPipeline(req, res) {
        try {
            const newPipeline = await pipelineService.createPipeline(req.body);
            res.status(201).json(newPipeline);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPipelineById(req, res) {
        try {
            const pipeline = await pipelineService.getPipelineById(req.params.id);
            res.status(200).json(pipeline);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllPipelines(req, res) {
        try {
            const pipelines = await pipelineService.getAllPipelines();
            res.status(200).json(pipelines);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updatePipeline(req, res) {
        try {
            const updatedPipeline = await pipelineService.updatePipeline(req.params.id, req.body);
            res.status(200).json(updatedPipeline);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletePipeline(req, res) {
        try {
            await pipelineService.deletePipeline(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PipelineController();
