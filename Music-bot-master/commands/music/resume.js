module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Aucune musique en cour ${message.author}.❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `La musique actuelle ${queue.current.title} reprise ✅` : `j'ai rencontré un problème ${message.author}.`);
    },
};