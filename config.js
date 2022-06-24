// CREATED BY NEOXY TEAM !!

const fs = require('fs')
const chalk = require('chalk')

// MY OTHERS
global.owner = ['6283834558105','6285380166282','628819514042']
global.premium = ['6283834558105','6285380166282','628819514042']
global.botname = 'FauzyBOT - MD'
global.packname = 'FauzyBOT - MD'
global.author = 'Nomor Bot:6281325984505'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = '© Created By Fauzy-XD'
global.sp = '⭔'
global.limitawal = {
premium: "Infinity",
free: 25
}

// THUMB
global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

// MESSAGE
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
