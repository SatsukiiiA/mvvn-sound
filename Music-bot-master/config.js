module.exports = {
    app: {
        px: 'M:',
        token: 'OTAzNzY2MzY1MDIwNzU4MDU3.YXxwBA.ostfU1kJ86WC5MWKeQCc650Vn9Q',
        playing: 'By Mvvn 🌙#0001'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', // je comprend pas il ne tourne pas sur la machine virtuelle pourtant sur mon disque local il marche... mais pour une raison inconnue, il crash
                highWaterMark: 1 << 25
            }
        }
    }
};
