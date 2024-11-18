const postJobService = require('./job.post.service');
const Boom = require('@hapi/boom');

const postJobHandler = async (request, h) => {
    const { title, deadline, location, budget, description } = request.payload;

    if(!title || !deadline || !location || !budget || !description) {
        const boomError = Boom.badRequest('Please fill all the required fields.');
        return h.response({
            status: boomError.output.statusCode,
            message: boomError.message,
            error: true
        }).code(boomError.output.statusCode);
    }

    try {
        await postJobService.postJob(request.payload);
        return h.response({
            status: 201,
            message: 'Job posted successfully',
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
    postJobHandler,
};