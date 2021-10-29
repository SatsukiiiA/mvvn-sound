module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique en cour ${message.author}. ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `La musique actuelle ${queue.current.title} en pause ✅` : `j'ai rencontré une erreur ${message.author}. ❌`);
    },
};