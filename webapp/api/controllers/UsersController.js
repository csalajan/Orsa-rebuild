/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  _config: {
    actions: true,
    shortcuts: false,
    rest: false
  },
  index: function(req, res) {
    Users.find().exec(function(err, data) {
      if (!err) {
        res.json(data);
      }
    });
  },
  update: function(req, res) {

  }

};

