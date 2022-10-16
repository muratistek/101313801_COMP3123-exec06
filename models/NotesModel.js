const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const noteSchema = new mongoose.Schema({
  noteTitle: {
    type: String,
    require: true
  },
  noteDescription: {
    type: String,
    require: true
  },
  priority: {
    type: String,
    enum: ['HIGH', 'LOW', 'MEDIUM'],
    default: 'MEDIUM'
  },
  dateAdded: Date,
  dateUpdated: Date
})

// Exporting a model
module.exports = mongoose.model("note", noteSchema)
