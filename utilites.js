const bcrypt = require('bcrypt');

const HashGen = (plainText, saltRounds = 10) => {
  const hash = bcrypt.hashSync(plainText, saltRounds);
  return hash;
};

module.exports = HashGen;
