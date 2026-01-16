const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const express = require('express');
const app = express();

// --- MA3LOMAT DYALK (Beddel hadchi) ---
const TOKEN = process.env.TOKEN; 
const CHANNEL_ID = "1388555164708900955"; 
const GUILD_ID = "777271906486976512";
// -------------------------------------

app.get('/', (req, res) => res.send('Si Az El Arab Bot is ON!'));
app.listen(3000, () => console.log("Server started"));

const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`✅ ${client.user.username} connecta!`);
    const channel = client.channels.cache.get(CHANNEL_ID);
    
    if (channel) {
        joinVoiceChannel({
            channelId: channel.id,
            guildId: GUILD_ID,
            adapterCreator: channel.guild.voiceAdapterCreator,
            selfMute: true,
            selfDeaf: false,
        });
        console.log("🔊 Dkhelna l-Voice!");
    } else {
        console.log("❌ Room ID ghalet!");
    }
});

client.login(TOKEN);
