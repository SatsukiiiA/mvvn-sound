module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cours ${message.author}.❌`);

        if (!queue.tracks[0]) return message.channel.send(`Aucune musique suivante ${message.author}. ❌`);

        await queue.clear();

        message.channel.send(`La file d'attente à été clear 🗑️`);
    },
};