/**
 * paths.js —— 统一数据目录解析
 *
 * 优先级：命令行参数 > 环境变量 BTC_ROOT > 本目录 data/
 * 这样脚本既能在技能目录内跑，也能指向任意临时工作区。
 */
const path = require('path');
const fs = require('fs');

function resolveRoot() {
  const arg = process.argv[2];
  if (arg && fs.existsSync(arg)) return arg;
  if (process.env.BTC_ROOT && fs.existsSync(process.env.BTC_ROOT)) return process.env.BTC_ROOT;
  return path.join(__dirname, 'data');
}

module.exports = { resolveRoot };
