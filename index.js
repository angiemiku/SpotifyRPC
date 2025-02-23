const { Client, SpotifyRPC } = require("discord.js-selfbot-v13");
const client = new Client();
const express = require('express')
const app = express();

////////////////////////////////////////////////////////////////
const port = 3000; // Port
const status = 'idle'; //online / idle / dnd / invisible
const token = proccess.env.token || "DISCORD TOKEN HERE"; //Your discord account TOKEN
///////////////////////////////////////////////////////////////


app.get('/', (req, res) => {
  res.send('Success!!')
});
app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}`)
    const spotify = new SpotifyRPC(client)
      .setAssetsLargeImage('spotify:ab67616d00001e02768629f8bc5b39b68797d1bb') // Image ID or Image Link
      .setAssetsSmallImage('spotify:ab6761610000f178049d8aeae802c96c8208f3b7') // Image ID or Image Link
      .setAssetsLargeText('未来茶屋 (vol.1)') // Album Name
      .setState('Yunomi; Kizuna AI') // Artists
      .setDetails('ロボットハート') // Song name
      .setStartTimestamp(Date.now())
      .setEndTimestamp(Date.now() + 1_000 * (2 * 60 + 56)) // Song length = 2m56s
      .setSongId('667eE4CFfNtJloC6Lvmgrx') // Song ID
      .setAlbumId('6AAmvxoPoDbJAwbatKwMb9') // Album ID
  .setArtistIds('2j00CVYTPx6q9ANbmB2keb', '2nKGmC5Mc13ct02xAY8ccS'); // Artist IDs
  client.user.setPresence({ activities: [spotify], status: status });
});

client.login(token);
