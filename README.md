# Template
 Discord bot template

## Setup

This does not include the token, which you will need to add manually from the discord developer panel
https://discord.com/developers/applications

Create a json file called config.json and paste it in like this:

```json
{
	"prefix": "prefixGoesHere (examples: !, //, -, _)",
	"token": "tokenGoesHere"
}
```

#### Dependencies

run `npm i` in the bot directory to install dependencies
This will get rid of all the type errors

## Starting

**Run the Bot with:**
`node .` or `npm run start`

## Inviting bot to server
https://discordapi.com/permissions.html

under `scope` leave it blank, and under `Client ID` just grab it from the discord developer website