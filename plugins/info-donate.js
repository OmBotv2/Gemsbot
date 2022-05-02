let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONASI 』––––––*`, 
`🇮🇩 METODE PEMBAYARAN :
⮕ VIA GOPAY DANA – BY ALWI
★ sᴄᴀɴ ǫʀ ᴄᴏᴅᴇ ﹠ ᴅᴏɴᴀᴛᴇ ᴠɪᴀ
PULSA, DANA , GOPAY, TERIMA KASIH, BY ALWI.
💱 GOPAY DANA PULSA :
⮕ PᴀʏPᴀʟ
★ SHILAKAN PENCET BUTTON DI BAWA.`, './media/donate.jpg', 'wa.me/6282239202895', 'Gopay', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
