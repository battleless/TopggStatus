const topggQuery = require('./topggQuery.js');
const { statusDown, statusOnline } = require('../messages/statusMessages.js');
const config = require('../../config.json');
const fs = require('node:fs');

const { WebhookClient } = require('discord.js');
const webhook = new WebhookClient({ url: config.webhookUrl });

const checkStatus = async () => {
    const topggData = await topggQuery('bots?limit=1');
    const status = JSON.parse(fs.readFileSync('./status.json'));
    const statusWrite = { "previousStatus": topggData.status };

    if (topggData.status.toString() === '502') {
        if (status.previousStatus.toString() === '502') return;
        else {
            fs.writeFileSync('./status.json', JSON.stringify(statusWrite));
            webhook.send({
                content: `||Status: ${topggData.status}||`,
                embeds: [statusDown]
            });
        };
    } else if (topggData.status.toString() === '401') {
        if (status.previousStatus.toString() === '401') return;
        else {
            fs.writeFileSync('./status.json', JSON.stringify(statusWrite));
            webhook.send({
                content: `||Status: ${topggData.status}||`,
                embeds: [statusOnline]
            });
        };
    } else fs.writeFileSync('./status.json', JSON.stringify({ "previousStatus": 401 }));
};

module.exports = checkStatus;