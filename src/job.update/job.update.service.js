const updateJobModule = require('./job.update.module');

const updateJob = async (jobData, job_id) => {
    const { title, deadline, location, budget, description } = jobData;

    if(!(await updateJobModule.findJobById(job_id))) {
        throw new Error("Couldn't find job.");
    }

    const updatedJob = {
        job_id: job_id,
        title,
        deadline,
        location,
        budget,
        description,
    };

    await updateJobModule.updateJob(updatedJob);
};

module.exports = {
    updateJob,
};