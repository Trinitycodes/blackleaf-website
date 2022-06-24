const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const List = new mongoose.Schema({
    name: { type: String },
    phone: { type: String, unique: true },
},
{ timestamps: true },
{ collection: 'list-data' }
)

const model = mongoose.model('ListData', List)

module.exports = model;