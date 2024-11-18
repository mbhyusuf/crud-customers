const updateJobService = require('./job.update.service');
const Boom = require('@hapi/boom');

const updateJobHandler = async (request, h) => {
    const { title, deadline, location, budget, description } = request.payload;
    const {job_id} = request.params;

    if(!title || !deadline || !location || !budget || !description) {
        const boomError = Boom.badRequest('Please fill all the required fields.');
        return h.response({
            status: boomError.output.statusCode,
            message: boomError.message,
            error: true
        }).code(boomError.output.statusCode);
    }

    try {
        await updateJobService.updateJob(request.payload, job_id);
        return h.response({
            status: 201,
            message: 'Job updated successfully',
            error: false,
        }).code(201);
    } catch (error) {
        const boomError = Boom.badRequest(error.message);
        return h.response({
            status: boomError.output.statusCode,
            message: boomError.message,
            error: true,
        }).code(boomError.output.statusCode);
    }
};

module.exports = {
    updateJobHandler,
};