/**
 * NewsController
 *
 * @description :: Server-side logic for managing News
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
    Article.find({sort: 'id DESC', limit: 10}).populate('author').exec(function(err, data) {
      if (!err) {
        res.json(data);
      } else {
        res.json(err);
      }
    });
  }
};

