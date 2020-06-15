const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbname = 'portfolio';
const url =
  'mongodb+srv://thycap:nCJ6MzZontupxy@cluster-thycap-bqjw4.mongodb.net/portfolio?retryWrites=true&w=majority';
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const state = {
  db: null,
};

const connect = (cb) => {
  if (state.db) {
    cb();
  } else {
    MongoClient.connect(url, mongoOptions, (err, client) => {
      if (err) {
        cb(err);
      } else {
        state.db = client.db(dbname);
        console.log(`Connected MongoDB: ${url}`);
        console.log(`Database: ${dbname}`);
        cb();
      }
    });
  }
};

const getPrimaryKey = (_id) => {
  return ObjectID(_id);
};

const getDB = () => {
  return state.db;
};

module.exports = { getDB, connect, getPrimaryKey };
