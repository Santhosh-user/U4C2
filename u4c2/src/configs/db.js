const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mongodb+srv://santhosh:santhosh_123@cluster0.mkavl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    
}

module.exports = connect;