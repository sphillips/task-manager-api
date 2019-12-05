// CRUD
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = process.env.MONGODB_URL
const databaseName = process.env.DATABASE_NAME

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)
  }
)
