const { Pipeline } = require('../models/mongoModel');

class PipelineRepository {
    async createPipeline(data) {
        return await Pipeline.create(data);
    }

    async getPipelineById(pipelineId) {
        return await Pipeline.findById(pipelineId).populate('dependencies');
    }

    async getAllPipelines() {
        return await Pipeline.find();
    }

    async updatePipeline(pipelineId, updateData) {
        return await Pipeline.findByIdAndUpdate(pipelineId, updateData, { new: true });
    }

    async deletePipeline(pipelineId) {
        return await Pipeline.findByIdAndDelete(pipelineId);
    }
}

module.exports = new PipelineRepository();
