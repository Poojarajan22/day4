const mongoose = require("mongoose")
var schema = mongoose.Schema({
    name: String,
    age: Number,
    department: String,
    salary: Number
})
var Employemodel = mongoose.model("employee", schema);
module.exports = Employemodel;