const crypto = require('crypto');
const postJobModule = require('./job.post.module');

const postJob = async (jobData) => {
    const { title, deadline, location, budget, description } = jobData;

    const id = crypto.randomUUID();

    const newJob = {
        job_id: id,
        title,
        deadline,
        location,
        budget,
        description,
        image_url: 'yang ini belum selesai',
        customer_id: 'yang ini belum selesai',
        status: 'pending',
        postedAt: new Date().toISOString(),
    };

    await postJobModule.addJob(newJob);
};

module.exports = {
    postJob,
};