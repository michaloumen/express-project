const path = require('path');

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", 'public', 'images', 'Example.jpg'));
}

function postMessage(req, res) {
  console.log('Updating messages...');
}

module.exports = {
  getMessages,
  postMessage
};