var handler = async (m) => {

global.db.data.chats[m.chat].isBanned = false
conn.reply(m.chat, '✅ *Bot Activo De Nuevo En El Grupo*', m, fake, )

}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i

handler.owner = true

export default handler