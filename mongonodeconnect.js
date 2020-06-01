const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});