//Require in express and router
const express = require('express');
const app = express.Router();
const store = require('../db/store');
console.log(store.getNotes());
//Make a get request and a post request
app.get('/notes', (req, res) => {

   store.getNotes().then((notes) => {
        return res.json(notes)
    }) .catch((err) => res.status(500).json(err))
}); 
 app.post('/notes', (req, res) => {
     store.addNote(req.body).then((note) => { 
         return res.json(note)}) 
         .catch((err) => res.status(500).json(err))
 });
//Delete request to delete notes

app.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    store.deleteNote(req.params.id).then((res) => res.json({ ok:true }))
    .catch((err) => res.status(500).json(err))
});

module.exports = app;

