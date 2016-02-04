module.exports = {
  order: ['Users', 'Article', 'Tournament', 'Team'],
  Users: require('./Users.js'),
  Article: require('./Article.js'),
  Tournament: require('./Tournament.js'),
  Team: require('./Teams.js')
};
