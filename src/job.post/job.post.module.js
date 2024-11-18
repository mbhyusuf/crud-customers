const firestore = require('../server/firebase');

const jobCollection = firestore.collection('jobs');

const addJob = async (jobData) => {
    const jobRef = jobCollection.doc(jobData.job_id);
    await jobRef.set(jobData);
    return { id: jobRef.id, ...jobData };
};

module.exports = {
    addJob,
}