/**
 * NewsController
 *
 * @description :: Server-side logic for managing News
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
    Article.find({sort: 'id DESC', limit: 10}).exec(function(err, data) {
      if (!err) {
        res.json([
          {
            id: 1,
            title: 'test',
            article: 'test'
          }
        ]);
      } else {
        res.json(err);
      }
    });
  }
};

