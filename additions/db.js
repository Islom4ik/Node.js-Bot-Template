require('dotenv').config();

const { MongoClient, ObjectId } = require('mongodb');
const url = process.env.DB;
const clientdb = new MongoClient(url);
clientdb.connect();
const db = clientdb.db('bot');
const collection = db.collection('');
module.exports = {collection, ObjectId};
