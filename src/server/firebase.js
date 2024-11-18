const { Firestore } = require('@google-cloud/firestore');
const admin = require('firebase-admin');
const path = require('path');

admin.initializeApp();

const db = admin.firestore();
db.settings({
    ignoreUndefinedProperties: true
});

const firestore = new Firestore({
    projectId: 'yusuf-practice-project',
    keyFilename: path.join(__dirname, '../../private-key.json'),
});

module.exports = firestore;