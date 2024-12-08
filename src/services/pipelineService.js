const pipelineRepository = require('../repositories/pipelineRepository');

class PipelineService {
    async createPipeline(pipelineData) {
        return await pipelineRepository.createPipeline(pipelineData);
    }

    async getPipelineById(pipelineId) {
        return await pipelineRepository.getPipelineById(pipelineId);
    }

    async getAllPipelines() {
        return await pipelineRepository.getAllPipelines();
    }

    async updatePipeline(pipelineId, updateData) {
        return await pipelineRepository.updatePipeline(pipelineId, updateData);
    }

    async deletePipeline(pipelineId) {
        return await pipelineRepository.deletePipeline(pipelineId);
    }
}

module.exports = new PipelineService();
