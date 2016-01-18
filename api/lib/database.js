var Sequilze = require('sequelize');

module.exports = new Sequilze('ncs', 'ncsuser', 'test123', {
    host: 'localhost',
    dialect: 'mysql'
});
