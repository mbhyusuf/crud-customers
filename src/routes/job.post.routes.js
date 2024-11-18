const { postJobHandler } = require('../job.post/job.post.controller');

module.exports = [
    {
        method: 'POST',
        path: '/job/post',
        handler: postJobHandler,
    }
]