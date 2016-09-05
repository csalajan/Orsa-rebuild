module.exports = {
  order: ['Users', 'Article', 'Tournament', 'Team', 'Season', 'Match'],
  Users: require('./Users.js'),
  Article: require('./Article.js'),
  Tournament: require('./Tournament.js'),
  Team: require('./Teams.js'),
  Match: require('./Matches.js'),
  Season: require('./Seasons.js')
};
