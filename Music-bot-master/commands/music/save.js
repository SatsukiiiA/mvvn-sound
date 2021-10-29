module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour ${message.author}. ❌`);

        message.author.send(`tu as enregistré la musique :  ${queue.current.title} | ${queue.current.author} depuis le serveur ${message.guild.name} ✅`).then(() => {
            message.channel.send(`je t'ai envoyé le titre en message privé✅`);
        }).catch(error => {
            message.channel.send(`Impossible de vous envoyer un message privé ${message.author}.❌`);
        });
    },
};