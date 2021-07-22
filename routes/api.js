//Require in express and router
const express = require('express');
const app = express.Router();
const Store = require('Store');
//Make a get request and a post request
app.get('/notes', (req, res) => {

   Store.getNotes().then((notes) => {
        return res.json(notes)
    }) .catch((err) => res.status(500).json(err))
}); 
 app.post('/notes', (req, res) => {
     Store.addNote(req.body).then((note) => { 
         return res.json(note)}) 
         .catch((err) => res.status(500).json(err))
 });
//Delete request to delete notes

app.delete('/notes/:id', (req, res) => {
    Store.deleteNote(req.body).then(() => res.json({ ok:true }))
    .catch((err) => res.status(500).json(err))
});

module.exports = app;

