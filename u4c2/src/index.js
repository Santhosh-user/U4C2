const { application } = require("express")
const express = require("express")

const mongoose = require("mongoose")

const connect = require("./configs/db")

const app = express()

app.use = express()

// app.use(express.json());



app.listen(3255, async function() {
    try {
        await connect()
        console.log("server connected")
    }

    catch (e) {
        console.log(e.message)
    }
})