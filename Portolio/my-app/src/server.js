const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url =
  'mongodb+srv://thycap:nCJ6MzZontupxy@cluster-thycap-bqjw4.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);

  const db = client.db('portfolio');
  let cursor = db.collection('projects').find({});

  function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
  }

  function errorFunc(error) {
    console.log(error);
  }

  cursor.forEach(iterateFunc, errorFunc);

  client.close();
});
