const firestore = require('../server/firebase');

const jobCollection = firestore.collection('jobs');

const updateJob = async (jobData) => {
    const jobRef = jobCollection.doc(jobData.job_id);
    await jobRef.update(jobData);
    return { id: jobRef.id, ...jobData };
};

const findJobById = async (job_id) => {
    const snapshot = await jobCollection.doc(job_id).get();
    return snapshot.exists;
}


module.exports = {
    updateJob,
    findJobById
}