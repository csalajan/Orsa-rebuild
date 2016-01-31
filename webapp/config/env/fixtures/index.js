module.exports = {
  order: ['Users', 'Article', 'Tournament'],
  Users: require('./Users.js'),
  Article: require('./Article.js'),
  Tournament: require('./Tournament.js')
};
