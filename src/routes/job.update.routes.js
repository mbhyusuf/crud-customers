const { updateJobHandler } = require('../job.update/job.update.controller');

module.exports = [
    {
        method: 'PUT',
        path: '/job/update/{job_id}',
        handler: updateJobHandler,
    }
];