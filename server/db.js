const {MongoClient} = require ("mongodb")

let dbconnection

module.exports = {
    connectToDb: (callback) => {
        MongoClient.connect("mongodb://@fakestring")
        .then((client) => {
            dbconnection = client.db()
            return callback()
        })
        .catch(err => {
            console.log(err)
            return callback(err)
        })
    },

    getDb: () => dbconnection
}