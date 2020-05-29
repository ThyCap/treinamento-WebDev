const { MongoClient } = require('mongodb');

async function listDatabases(client) {
  let databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function main() {
  const uri =
    'mongodb+srv://thycap:nCJ6MzZontupxy@cluster-thycap-bqjw4.mongodb.net/test?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    await listDatabases(client);
  } catch (e) {
    console.log(e);
  }
}

main().catch(console.error);
