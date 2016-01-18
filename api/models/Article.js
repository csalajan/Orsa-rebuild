var seq = require('sequelize');
var sequelize = require('../lib/database');

var Article = sequelize.define('articles', {
    title: {
        type: seq.STRING,
        field: 'title'
    },
    article: {
        type: seq.TEXT,
        field: 'article'
    }
});


module.exports = Article;