module.exports = {
  index: function(req, res) {
    League.find().exec(function(err, data) {
      if (!err) {
        res.json(data);
      } else {
        res.json(err);
      }
    });
  },
  findOne: function(req, res) {
    League.findOne(req.param('id')).populate('teams').populate('matches').exec(function(err, response) {
      if (!err) {
        res.json(response);
      }
    });
  }
};
