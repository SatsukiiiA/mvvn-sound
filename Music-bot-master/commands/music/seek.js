const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour${message.author}. ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Le temps indiqué est supérieur à la durée de la musique ${message.author}. ❌\n*Essaye 30s par exemple`);

        await queue.seek(timeToMS);

        message.channel.send(`Temps réglé à **${ms(timeToMS, { long: true })}** ✅`);
    },
};