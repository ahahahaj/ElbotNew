let handler = async (m, { conn, command, text, usedPrefix, participants }) => 

 const userChar = [
      "أراماكي",
      "أكاينو",
      "ألفونس إلريك",
      "ألن والكر",
      "أوبيتو أوتشيها",
      "أوروتشيمارو",
      "أوسوب",
      "أوكيجي",
      "غون فريكس",
      "ميوجين ياهيكو",
      "مونكي دي دراغون",
      "ماركو",
      "رانما ساوتومي",
      "كابتن كورو",
      "غوجو",
      "لوفي",
      "اينوسكي",
    ]
    const userCharacterSeletion =
      userChar[Math.floor(Math.random() * userChar.length)]

    let message = `*${userCharacterSeletion}*`
    
    conn.sendMessage(m.chat, { text: message }, { quoted: m })
    
}
handler.help = ["character @tag"]
handler.tags = ['fun']
handler.command = /^(كت)/i

export default handler 
