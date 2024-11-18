const deleteJobModule = require('./job.delete.module');

const deleteJob = async (job_id) => {
    if(!(await deleteJobModule.findJobById(job_id))) {
        throw new Error("Couldn't find job.");
    }
    await deleteJobModule.deleteJobById(job_id);
};

module.exports = {
    deleteJob,
}