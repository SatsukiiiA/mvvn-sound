module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour ${message.author}. ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `la musique actuelle ${queue.current.title} sautée ✅` : `j'ai rencontré un problème ${message.author}.❌`);
    },
};