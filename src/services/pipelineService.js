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

    async runPipeline(pipelineId) {
        const pipeline = await pipelineRepository.getPipelineById(pipelineId);
        if (!pipeline) throw new Error('Pipeline not found');

        pipeline.state = 'RUNNING';
        await pipeline.save();

        try {
            for (const step of pipeline.steps) {
                // Simulate step execution
                console.log(`Running step: ${step}`);
            }
            pipeline.state = 'COMPLETED';
        } catch (error) {
            pipeline.state = 'FAILED';
            pipeline.error_log.push({ error_message: error.message });
        }

        await pipeline.save();
        return pipeline;
    };
}

module.exports = new PipelineService();
