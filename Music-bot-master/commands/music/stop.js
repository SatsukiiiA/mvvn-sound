module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour ${message.author}. ❌`);

        queue.destroy();

        message.channel.send(`J'ai arréter la musique ✅`);
    },
};