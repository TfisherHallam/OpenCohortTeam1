import Listing from "../client/src/components/listing/listing"
import { getDb } from "./db"

const express = express()


//Db connection
let db

connectionToDb((err)) => {
    if (!err) {
        app.listen(3000, () => {
            console.log ("listening on port 3000")
        })
        db = getDb
    }
}

// routes

app.get("/listing", (req, res) => {
    db.collection("Listing")
        .find()  //cursor toArray forEach
    res.json({mssg:"Welcome to the API"})    
})