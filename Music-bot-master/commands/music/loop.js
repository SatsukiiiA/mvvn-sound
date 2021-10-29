const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Aucune musique en cour ${message.author}.❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Tu dois d'abord enlever la musique en loop (${client.config.app.px}loop) ${message.author}.❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répéter **${queue.repeatMode === 0 ? 'désactivé' : 'activé'}**La liste entiére est répétée sans fin 🔁` : `J'ai rencontré un probléme ${message.author}... réessaye ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Tu dois d'abord désactiver la loop(${client.config.app.px}loop queue) ${message.author}... réessaye ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Mode répéter **${queue.repeatMode === 0 ? 'désactiver' : 'activer'}** La musique actuelle sera répétée sans fin (tu peux répéter toute la file avec l'option <queue>) 🔂` : `j'ai rencontré un probléme ${message.author}... réessaye ❌`);
        };
    },
};