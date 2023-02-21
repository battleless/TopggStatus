const checkStatus = require('./utils/functions/checkStatus.js');
const config = require('./config.json');

setInterval(checkStatus, config.checkInterval);

console.log('Top.gg status checker is now online!');