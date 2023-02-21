const { EmbedBuilder } = require('discord.js');

const statusDown = new EmbedBuilder()
    .setColor('#ff3366')
    .setTitle('Top.gg is currently experiencing issues!');

const statusOnline = new EmbedBuilder()
    .setColor('#ff3366')
    .setTitle('Top.gg is back online!');

module.exports = { statusDown, statusOnline };