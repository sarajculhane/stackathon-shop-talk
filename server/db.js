const sqlite3 = require('sqlite3').verbose();
const Sequelize = require('sequelize');

const db= new Sequelize({
    dialect: 'sqlite',
    storage: './shop-talk.db'
  });

  const User = db.define('User', {
    // Model attributes are defined here
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      // Making `.password` act like a func hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      validate: {
        len: [6, 100]
      }
    }
  });

  User.sync()
  
module.exports = User;
  
  
// const db =  async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }
// db()
// let db = new sqlite3.Database('/shop-talk.db', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Connected to the in-memory SQlite database.');
//   });

//   db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });