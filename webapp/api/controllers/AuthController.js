/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  register: function (req, res) {
      if (req.body.password !== req.body.confirmPassword) {
        return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
      }
      Users.create(req.body).exec(function (err, user) {
        if (err) {
          return res.json(err.status, {err: err});
        }
        // If user created successfuly we return user and token as response
        if (user) {
          // NOTE: payload is { id: user.id}
          res.json(200, {user: user, token: jwToken.issue({id: user.id})});
        }
      });
    },
    login: function (req, res) {
      var username = req.param('username');
      var password = req.param('password');

      if (!username || !password) {
        return res.json(401, {err: 'username and password required'});
      }

      Users.findOne({username: username}, function (err, user) {
        if (!user) {
          return res.json(401, {err: 'invalid username or password'});
        }

        if (!user.active) {
          return res.json(401, {err: 'user account is not active'});
        }

        Users.comparePassword(password, user, function (err, valid) {
          if (err) {
            return res.json(403, {err: 'forbidden'});
          }

          if (!valid) {
            return res.json(401, {err: 'invalid username or password'});
          } else {
            res.json({
              user: user,
              token: jwToken.issue({id : user.id })
            });
          }
        });
      })
    },
    verify: function(req, res) {
      var token = req.param('token');

      jwToken.verify(token, function(err, data) {
        if (err) return res.json(401, {err: 'Invalid Token!'});
        Users.findOne({id: data.id}).exec(function(err, user) {
          if (err) return res.json(404, {err: 'User Not Found'});
          res.json({
            user: user
          });
        });
      });
    }
};

