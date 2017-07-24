module.exports = function(app, db) {

    app.post('/notes/:id', (req, res) => {
        const id = req.params.id;
        const text = req.body.body;
        const title = req.body.title;
    db.get(id)
        .catch((err)=>{
            if(err.name === 'not_found') {
                return {
                    _id: id,
                    text: text,
                    title: title
                }
            } else {
                console.log('some other err')}})
        .then((doc)=> {
            doc.text = text;
            doc.title = title;
            return db.put(doc).then(()=> {res.send(doc)})
        })
    });

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        db.get(id)
            .then((doc)=> {res.send(doc)})
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        db.get(id)
            .then((doc)=>{db.remove(doc)
            .then(()=> {res.send('Deleted')})
        })
    });
};
