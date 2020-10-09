const Discord2 = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Lists all commands',
	execute(msg, args) {
        
        const exampleEmbed = new Discord2.MessageEmbed()
        .setColor('#55128E')
        .setTitle('Command List')
        .setFooter('')
        .setDescription('')
        .addFields(
            { name: 'hello\nworld', value: "page 1/1"}
        )
        .setThumbnail(`link to image`)
        msg.channel.send(exampleEmbed);
	},
};

// \n is used to make a newline same as hitting enter in word