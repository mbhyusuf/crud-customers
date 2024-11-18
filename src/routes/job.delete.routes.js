const { deleteJobHandler } = require('../job.delete/job.delete.controller');

module.exports = [
    {
        method: 'DELETE',
        path: '/job/delete/{job_id}',
        handler: deleteJobHandler,
    }
];