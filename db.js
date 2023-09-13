const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://Cingisxanchina:v5ErqAZS2BfgnZqf@cluster0.dvhpekh.mongodb.net/?retryWrites=true&w=majority";

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient
    .connect(URL).then((client) => {
      console.log('connected to mongoDB')
      dbConnection = client.db()
      return cb()
    }).catch((err) => {
      return cb(err)
    })
  },
  getDb:() =>dbConnection,
}