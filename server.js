var express = require('express');
var defineWord = require('define-word');

var app = express();
var port = process.env.PORT || 3000;



app.get('/', function (req, res) {
    // if (req.params.word == undefined && req.params.word == ' ') {
    //     res.status(404).send({ msg: 'Missing peremeter' });
    // } else {
    var words = [
        "volatile",
        "vortex",
        "warranted",
        "wary",
        "welter",
        "whimsical",
        "whimsy",
        "wistful",
        "zealot",
        "zealotry",
        "de facto",
        "deviant",
        "defer",
        "platonic",
        "discern",
        "bionics",
        "heuristic",
        "equitable",
        "guile",
        //"reductionistic",
        "inertia",
        "pathos",
        "pedant"
    ];
    var dictionary = {}
    words.forEach(function (word) {
        console.log(word);
        var x = defineWord.define(word);
        var synonyms = defineWord.synonyms(word);
        dictionary[word] = { type: x.type, meaning: x.definitions, synonyms: synonyms };
    })

    res.status(200).send(dictionary);
    // }
});

//app.all('*', (req, res) => res.redirect('/'));

app.listen(port, () => console.log('Server is live on port : ', port));


