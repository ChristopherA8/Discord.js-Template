const Discord1 = require('discord.js');
module.exports = {
    name: 'about',
    description: '',
    execute(msg, args) {

        const aboutEmbed = new Discord1.MessageEmbed()
        .setTitle(`title`)
        .setURL(`https://example.com`)
        .setAuthor(`text`, `image`,`https://example.com`)
        .setColor('#55128E')
        .setDescription(`text`)
        .setFooter(`text`, `https://example.com`)
        .setThumbnail(`link to image`)
        msg.channel.send(aboutEmbed)

    },
}