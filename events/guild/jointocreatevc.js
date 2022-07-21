const client = require('../../index')
const {Collection} = require('discord.js')
const voiceCollection = new Collection()
const db = require('../../schemas/vc')

client.on('voiceStateUpdate', async (os, ns) => {
    const user = await client.users.fetch(ns.id)
    const member = ns.guild.members.cache.get(user.id)
    const data = await db.findOne({Guild: os.guild.id})
    if (!data) return

    if (!os.channel && ns.channel.id === data.Channel) {
        const channel = await ns.guild.channels.create(user.tag, {
            type: 'GUILD_VOICE',
            parent: ns.channel.parent
        })
        member.voice.setChannel(channel)
        voiceCollection.set(user.id, channel.id)
    } else if (!ns.channel) {
        if (os.channelId === voiceCollection.get(ns.id)) return os.channel.delete()
    }
})
