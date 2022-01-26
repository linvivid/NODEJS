const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://Linds:Jlsc4ever!123@cluster0.xw3hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  )
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDb = () => {
  if (_dp) {
    return_db;
  }
  throw 'No database found';
};

exports.mongoConnect = mongoConnect
exports.getDb = getDb;
