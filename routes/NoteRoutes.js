const express = require("express")

const NoteModel = require('../models/NotesModel');

const routes = express.Router()


//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
    try {
        const newNote = new NoteModel(req.body)
        const note = await newNote.save()
        res.status(201).send(note)
    }
    catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async (req, res) => {
    //TODO - Write your code here to returns all note
    try {
        const notes = await NoteModel.find()
        res.status(201).send(notes)
    }
    catch (error) {
        res.status(400).send(error)
    }

});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async (req, res) => {
    //TODO - Write your code here to return onlt one note using noteid
    try {
        const oneNote = await NoteModel.findById(req.params.noteId)
        res.status(201).send(oneNote)
    }
    catch (error) {
        res.status(400).send(error)
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.patch('/notes/:noteId', async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid

    try {
        const updatedNote = await NoteModel.findByIdAndUpdate(req.params.noteId, req.body)
        res.status(201).send(updatedNote)
    }
    catch (error) {
        res.status(401).send(error)
    }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid

    try {
        const deletedNote = await NoteModel.findByIdAndRemove(req.params.noteId)

        if (!deletedNote) {
            res.status(400).send({ message: "No Note to Delete" })
        }
        res.status(201).send(deletedBook)
    }
    catch (error) {
        res.status(401).send(error)
    }
});


module.exports = routes