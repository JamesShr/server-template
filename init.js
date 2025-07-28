const fs = require('fs');
const path = require('path');

function safeCopy(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ 已複製 ${src} → ${dest}`);
  } else {
    console.log(`⚠️  已存在 ${dest}，略過複製`);
  }
}

console.log('🚀 開始初始化專案...');

safeCopy('.env.example', '.env');
safeCopy('pgbouncer/pgbouncer.ini.example', 'pgbouncer/pgbouncer.ini');
safeCopy('pgbouncer/userlist.txt.example', 'pgbouncer/userlist.txt');

console.log('✅ 專案初始化完成');
