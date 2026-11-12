# btc-report

BTC 相关公开报告站点（GitHub Pages）。

| 目录 | 内容 |
|---|---|
| `index.html` | 报告目录页 |
| `2026-11-08/` | 2026-11-08 期报告 |
| `2026-11-11/` | 2026-11-11 期报告（BTC 博主预测能力评测） |

## 分析代码在哪

本仓库**只放已发布的报告页面**。

生成报告的分析管线（抓取、冻结、LLM 抽取、审计、打分、模拟操作、HTML 生成）已迁回技能仓库：

- 技能仓库：https://github.com/109751269-sketch/web-analysis-ai
- 技能内路径：`topics/btc-analyst/`
- 结论文档：`topics/btc-analyst/FINDINGS.md`
- 数据：不随技能仓库分发，由 `paths.js` 从工作区 `topics-data/btc-analyst/` 解析，可用 `BTC_DATA_DIR` 覆盖

原 `analyses/btc-analyst/` 目录已于 2026-11-12 移除，避免同一份代码在两个仓库分叉。
