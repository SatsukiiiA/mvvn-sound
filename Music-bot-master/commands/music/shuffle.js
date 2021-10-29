module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour ${message.author}.❌`);

        if (!queue.tracks[0]) return message.channel.send(`Aucune musique suivante ${message.author}. ❌`);

        await queue.shuffle();

        return message.channel.send(`Je joue **${queue.tracks.length}** de son(s) ! ✅`);
    },
};