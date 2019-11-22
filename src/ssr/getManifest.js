const fs = require('fs');

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (error) {
    return console.log(error);
  }
};

module.exports = getManifest;
