const deleteJobService = require('./job.delete.service');
const Boom = require('@hapi/boom');

const deleteJobHandler = async (request, h) => {
    const {job_id} = request.params;
    try {
        await deleteJobService.deleteJob(job_id);
        return h.response({
            status: 200,
            message: 'Job deleted successfully',
            error: false,
        }).code(200);
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
    deleteJobHandler,
}