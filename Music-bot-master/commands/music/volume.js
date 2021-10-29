const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`aucune musique en cour ${message.author}.❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`le volume est à ${queue.volume} 🔊\n*Pour changer le volume entre un chiffre entre **1** et **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Le volume est déjà réglé à cette valeur ${message.author}. ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`le nombre spécifié n'est pas valide il doit être entre **1** et **${maxVol}** ${message.author}. ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `le volume à été mit à **${vol}**/**${maxVol}**% 🔊` : `j'ai rencontré un probléme${message.author}.❌`);
    },
};