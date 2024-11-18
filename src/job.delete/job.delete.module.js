const firestore = require('../server/firebase');

const jobCollection = firestore.collection('jobs');

const deleteJobById = async (job_id) => {
    await jobCollection.doc(job_id).delete();
    return { "deleted_job": job_id };
};

const findJobById = async (job_id) => {
    const snapshot = await jobCollection.doc(job_id).get();
    return snapshot.exists;
}

module.exports = {
    deleteJobById,
    findJobById
}