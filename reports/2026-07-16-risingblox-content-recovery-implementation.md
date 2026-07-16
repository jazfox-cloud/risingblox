# RisingBlox 第一轮流量恢复与内容增强实施报告

- 实施日期：2026-07-16
- 基线分支：`main`
- 基线 HEAD：`e891983916a2308239a84169bb05176675e2440e`
- 诊断输入：`reports/2026-07-16-risingblox-gsc-traffic-decline-audit.md`
- 实施边界：Roblox-only；未新增游戏品类，未批量生成页面，未新增 Codes 页面。
- 发布状态：仅本地实现与验证；未 commit、未 push、未 deploy、未请求 GSC 索引、未提交 sitemap、未修改 Cloudflare。

## 1. 实施前安全审计

实施前 `git status --short --branch` 为：

```text
## main...origin/main
?? reports/
```

HEAD 与用户给定基线一致。除已知 `reports/` 目录外，没有用户代码改动，因此未触发停止条件。

### reports/ 目录约定

- `reports/` 不在 `.gitignore` 中。
- `git ls-files reports` 无输出，项目历史中也没有已提交的 `reports/` 文件。
- 结论：当前项目没有“报告默认可提交”的既有惯例；本轮按用户要求生成报告，但目录仍是未跟踪状态。后续是否提交应单独决定。

## 2. 实施前页面审计

| URL | 实施前 Title / H1 | Primary intent | 主要模块与内链 | 数据来源 | 主要重叠/问题 |
| --- | --- | --- | --- | --- | --- |
| `/games/iron-soul-dungeon/` | `Iron Soul: Dungeon Roblox Game Profile` / `Iron Soul: Dungeon` | 游戏 profile、官方状态 | Roblox CTA、stats、official refresh、BloxDungeon deep-dive；有 codes/BloxDungeon，但 externalGuide 条件使本地 guide 入口不够明显 | `roblox-stats.json`、官方 Roblox page/API | profile 与 broad guide 边界尚可，但缺少明确 profile → local progression guide 路径 |
| `/guides/iron-soul-dungeon/` | `Iron Soul Dungeon Guide: Level Up Fast, Forge Route, Relics, and Best Runes` / 同 Title | 综合攻略、leveling、forge、skill tree、runes | What is、forge、skill tree、weapons、dungeons、leveling、relics、runes、blueprints、FAQ；链 profile/codes/runes/BloxDungeon | 官方 Roblox 描述 + GSC query，但部分细节没有官方机制依据 | relic、blueprint、starter weapon、rune 逻辑过度延伸；与 runes 页重叠；模块重复 |
| `/guides/iron-soul-dungeon-best-runes/` | `Iron Soul Dungeon Best Runes Guide - Rune Priority by Playstyle` / `Iron Soul Dungeon Best Runes Guide` | runes 排名/选择 | damage、survival、farming、boss、FAQ；链 broad guide/profile/official page | 官方 Roblox snapshot，但官方描述不包含 rune 表 | 把 skill-tree/进度 blocker 推导成具体 rune 类型，证据不足；与 broad guide 重叠 |
| `/codes/iron-soul-dungeon/` | `Iron Soul: Dungeon Roblox Codes` / `Iron Soul: Dungeon Codes` | active/expired codes status | empty active state、检查方法、redeem、FAQ；链 profile/guide/BloxDungeon | 官方 Roblox、开发者渠道、BloxDungeon source log policy | 无 verified active codes；页面可保留但不能扩写不存在的 code |
| `/games/noob-incremental/` | `Noob Incremental Roblox Game Profile` / `Noob Incremental` | 简要 profile | stats、通用 gameplay、next steps；链 guide/codes | 官方 Roblox stats | profile 太薄，没有呈现 Noobs→Oof→upgrades→runes→Prestige 的官方循环 |
| `/guides/noob-incremental/` | `Noob Incremental Roblox Beginner Guide` / `Noob Incremental Beginner Guide` | beginner guide | What is、upgrade、runes、Prestige、mistakes、FAQ；链 profile/codes | 官方 Roblox 描述 | 已有稳定 guide URL，不应另建同义 progression URL；部分 timing/priority 用语偏通用 |
| `/codes/noob-incremental/` | `Noob Incremental Roblox Codes` / `Noob Incremental Codes` | codes status | empty state、source policy、redeem、FAQ；链 profile/guide | official/high-confidence code policy | 无 verified active codes；本轮不新增或扩写代码内容 |
| `/games/anime-squadron/` | `Anime Squadron Roblox Guide, Codes Status, Units, and Boss Waves` / `Anime Squadron` | profile + guide hub 混合 | UPD 1.0、units、boss、modes、codes；链 guide/codes | 官方 Roblox page/API | Title、description、intro 与 beginner guide 高度重叠；UPD 1.0 已陈旧 |
| `/guides/anime-squadron/` | `Anime Squadron Roblox Guide: Units, Boss Wave Tips, and Codes Status` / 同 Title | beginner、units、boss、codes | What is、lanes、units、boss、modes、codes status、mistakes、FAQ | 官方 Roblox page + GSC | 重复 profile 基础介绍和 codes 意图；包含面向 SEO 的自述 |
| `/codes/anime-squadron/` | `Anime Squadron Roblox Codes` / `Anime Squadron Codes` | codes status | empty active/expired、check/redeem、FAQ | official/high-confidence code policy | FAQ 含 `What keywords does this page track?`；默认 redemption 文案暗示存在未验证的界面 |
| `/`、`/trending/`、metadata、sitemap、robots | apex canonical | discovery + 技术 SEO | 首页/趋势内链、static metadata、robots、sitemap | 项目配置 + 生产响应 | 代码已统一 apex；全局 nav 仍有无尾斜杠链接 |

## 3. 修改文件清单

| 文件 | 修改内容 |
| --- | --- |
| `content/games.ts` | 为 guide 增加 source/last-verified 字段；重构 Iron、Noob、Anime 的 profile/guide/codes 数据与意图；未新增 active code |
| `app/games/[slug]/page.tsx` | Iron profile 增加本地 progression guide CTA；确保 externalGuide 存在时仍显示本地 Next Steps；Noob/Iron 使用 progression anchor |
| `app/guides/[slug]/page.tsx` | 渲染 guide 的 Last verified、官方来源和证据边界 |
| `app/codes/[slug]/page.tsx` | 支持页面级 redemption 验证说明；默认文案不再假定一定存在 codes/settings button |
| `app/guides/iron-soul-dungeon-best-runes/page.tsx` | 从无依据 rune priority 内容改为 source boundary + in-game verification checklist；保留稳定 URL |
| `app/layout.tsx` | 全局静态导航统一尾斜杠，避免内部链接先经过 trailing-slash redirect |
| `reports/2026-07-16-risingblox-content-recovery-implementation.md` | 本实施报告 |

没有修改 `app/sitemap.ts`、`app/robots.ts`、`functions/_middleware.js` 或 `public/_redirects`，因为当前首选主机配置与生产行为已经一致。

## 4. 修改页面、URL 与目标搜索意图

| URL | 实施后目标 intent | 实施后 Title / H1 |
| --- | --- | --- |
| `/games/iron-soul-dungeon/` | 官方 profile、游戏状态、progression 入口 | `Iron Soul: Dungeon Roblox Game Profile` / `Iron Soul: Dungeon` |
| `/guides/iron-soul-dungeon/` | `iron soul dungeon guide`、source-backed progression、level up、forge、skill tree | `Iron Soul Dungeon Progression Guide: Leveling, Forge, and Skill Tree` / 同 Title |
| `/guides/iron-soul-dungeon-best-runes/` | rune evidence/verification，避免与 broad guide 抢完整 progression intent | `Iron Soul Dungeon Runes Guide - Verification Before You Build` / `Iron Soul Dungeon Runes: What to Verify Before You Build` |
| `/codes/iron-soul-dungeon/` | active/expired status 与验证方法 | `Iron Soul: Dungeon Roblox Codes` / `Iron Soul: Dungeon Codes` |
| `/games/noob-incremental/` | 官方 profile、核心循环、progression guide 入口 | `Noob Incremental Roblox Game Profile and Progression Overview` / `Noob Incremental` |
| `/guides/noob-incremental/` | 唯一 Noob progression guide：upgrades、runes、Prestige | `Noob Incremental Progression Guide: Upgrades, Runes, and Prestige` / 同 Title |
| `/codes/noob-incremental/` | 现有 codes status；无 active code | `Noob Incremental Roblox Codes` / `Noob Incremental Codes` |
| `/games/anime-squadron/` | 游戏身份、Komplex Studio、官方玩法范围、当前状态 | `Anime Squadron Roblox Game Profile and Official Status` / `Anime Squadron` |
| `/guides/anime-squadron/` | 开局 lineup、lane coverage、resource allocation、boss preparation | `Anime Squadron Beginner Guide: Lane Coverage and Boss Preparation` / 同 Title |
| `/codes/anime-squadron/` | active/expired status、来源验证、redemption verification state | `Anime Squadron Roblox Codes` / `Anime Squadron Codes` |

所有 URL 保持不变，没有新增同义 URL。

## 5. Iron Soul Dungeon P0 具体增强

### 综合 guide

- 开头重写为 113 词，直接给出官方可验证的 `monster → crystalized ore/rare materials → ancient forge → weapon/skill change → harder dungeon test` 路径。
- 明确标注是 source-backed quick-start/progression guide，不是完整 Wiki。
- 增强并整理为：First Steps、Early Farming Loop、Forge Progression、When to Attempt Harder Areas、How to Level Up Fast、Skill Tree Direction、Introductory Rune Decisions、Common Progression Blockers、Update Verification、Source Boundaries。
- `How to Level Up Fast` 直接回答历史查询，但明确官方没有公开 XP 公式或单一最快路线；不虚构经验收益。
- Skill tree 只使用官方描述中的 attacker、forge master、survivor 方向，不给精确 build。
- Runes 只保留“读取当前 in-game text、一次改一个变量、重复同一路线”的入门逻辑，并链接专页。
- 增加 `Last verified: 2026-07-16`、官方 Roblox URL 和来源边界。
- 删除/弱化没有来源支撑的 relic route、blueprint table、starter weapon ranking、drop rate 和 rune ranking。

### Profile、Runes、Codes 内链

- Profile → local progression guide、codes status、BloxDungeon deep-dive。
- Progression guide → profile、runes verification guide、codes status、BloxDungeon。
- Runes → progression guide、profile、official Roblox page。
- Codes → profile、progression guide、BloxDungeon codes log。

### Runes 页面处理

保留现有 `/guides/iron-soul-dungeon-best-runes/`，没有删除或 noindex。由于 2026-07-16 官方描述没有 rune 名称、效果、概率或 drop table，本页不再发布 damage/survival/farming rune priority，而是提供：

1. 记录当前 rune 名称与效果。
2. 记录版本。
3. 一次只改一个变量。
4. 重复同一路线。
5. 只保留可观察地改善当前 blocker 的变化。

## 6. Noob Incremental 证据门槛

### Verdict

**满足增强 progression guide 的门槛，但不新增 URL。**

理由：官方 Roblox 页面在 2026-07-16 明确提供了至少五条游戏专属事实：

- Buy Noobs and make Oof。
- Buy Upgrades and become stronger。
- Roll Runes and level them up。
- Multiple Prestige layers。
- Prestige unlocks new content。

这足以说明核心循环、upgrade 决策入口、rune 阶段和 Prestige relevance。官方没有提供精确升级成本、最佳购买顺序、Prestige 阈值或 rune odds，因此这些信息没有写入。

### 实施方式

- 增强 profile：官方循环、creator、UPD 2 freshness signal、当前公开数据入口、progression guide 入口。
- 将现有 `/guides/noob-incremental/` 升级为唯一 progression guide。
- Guide 模块：What to Do First、Early Upgrade Priorities、When Runes Become Relevant、When Prestige Becomes Relevant、Common Progression Blockers、What to Verify After an Update、FAQ。
- Profile 与 guide 双向链接。
- 没有新建 tier list、wiki、codes 或 prism/soldier 独立页。

## 7. Anime Squadron 意图分工

### Profile

- 只保留游戏身份、Komplex Studio、官方玩法范围、UPD 1.5/current status 和 public data。
- Title 从 guide/codes 混合型改为 `Game Profile and Official Status`。
- 删除 beginner tutorial 和 codes status 叙述，保留清晰 guide/codes 出口。

### Beginner guide

- Title/H1 聚焦 `Lane Coverage and Boss Preparation`。
- Guide 承担 opening lineup、lane coverage、unit upgrade allocation、resource allocation、boss waves、multiple modes、post-update checks。
- 删除 profile 式基础介绍、codes status 模块和 SEO query 自述。
- 不创建 unit tier list，不给 unit 名称排名、成本或 mode 公式。

### Codes

- `activeCodes` 和 `expiredCodes` 继续为空。
- 删除 `What keywords does this page track?` 及重复的检查频率 FAQ。
- FAQ 只回答：是否有 verified active code、redemption 是否已验证。
- 明确当前官方来源未验证 redemption interface，不再暗示存在特定 codes/settings button。

## 8. Canonical、sitemap 与生产重定向

### 首选主机

唯一首选版本保持：`https://risingblox.com`。

依据：

- `metadataBase`：apex。
- dynamic/static canonical：apex。
- Open Graph URL：apex。
- sitemap URL 与 30 个 `<loc>`：apex。
- robots sitemap reference：apex。
- middleware 与 `_redirects`：www/pages.dev → apex。
- 项目代码中没有 `https://www.risingblox.com` canonical 或内部绝对链接。

### 2026-07-16 生产重定向验证

以下请求均是一跳 301，且保留子路径：

- `https://www.risingblox.com/` → `https://risingblox.com/`
- `https://www.risingblox.com/guides/iron-soul-dungeon/` → apex 同路径
- `http://www.risingblox.com/` → `https://risingblox.com/`
- `http://www.risingblox.com/guides/iron-soul-dungeon/` → apex HTTPS 同路径
- `http://risingblox.com/` → `https://risingblox.com/`
- `http://risingblox.com/guides/iron-soul-dungeon/` → apex HTTPS 同路径

没有 redirect chain。GSC 中首页/Trending 的旧 `www` canonical 属于历史/外部信号，不能据此更换代码首选域名。

### Sitemap

- 没有新增 URL；构建后 sitemap 仍为 30 URL。
- Iron、Noob、Anime 的 profile/guide lastmod 通过 `lastUpdated=2026-07-16` 自动更新。
- Codes lastmod 继续使用各自 `codesLastChecked`，本轮没有伪造新的 code 检查日期。
- GSC sitemap 旧状态无法通过本地代码真实更新，本轮未提交 sitemap。

## 9. 数据来源与无法验证的信息

### 使用的数据来源

- Official Roblox Games API，2026-07-16 只读查询 universe IDs：
  - Iron Soul: Dungeon `9910245722`
  - Noob Incremental `9965411707`
  - Anime Squadron `8356066619`
- 官方 Roblox 游戏页面：
  - `https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon`
  - `https://www.roblox.com/games/76911729991355/Noob-Incremental`
  - `https://www.roblox.com/games/71132543521245/Anime-Squadron`
- 项目 `content/roblox-stats.json` 的 2026-07-14 可追溯 public-data snapshot。
- GSC 诊断报告中的 query/page evidence。

### 明确未验证、未发布的内容

- Iron：精确 XP、fastest route、rune 名称/效果/概率、relic route、blueprint table、drop rate、starter weapon ranking。
- Noob：精确 upgrade costs/order、Prestige threshold、rune odds/values、Prism tree 或 Soldier 的具体机制。
- Anime：unit ranking、exact costs、best lineup、mode formulas、verified redemption interface、active codes。
- 三款游戏均没有新增任何虚构 code、数值、掉落率、配方或升级成本。

## 10. 质量与验证结果

| 检查 | 结果 |
| --- | --- |
| `npm run lint` | PASS：No ESLint warnings or errors |
| `npm run build` | PASS：compiled、type check、35 static routes generated |
| 项目测试 | N/A：`package.json` 没有 test script 或独立测试套件 |
| `git diff --check` | PASS |
| Target URL build | PASS：10 个相关 profile/guide/codes URL 均有静态 HTML |
| Sitemap | PASS：30 URL；包含全部目标 URL；无 www host |
| Canonical | PASS：10 个目标页面均 self-canonical 到 apex |
| H1 | PASS：32 个导出 HTML 扫描；正常页面均为单一 H1 |
| Internal links | PASS：全站导出 HTML 内部目标存在；要求的双向链接全部存在 |
| FAQ JSON-LD | PASS：JSON 可解析，schema question 均在可见正文出现 |
| Template residue | PASS：未发现 `What keywords does this page track?` |
| Codes | PASS：未新增 active code；Anime 明确 redemption 未验证 |
| Iron intro length | PASS：113 词，符合 100–150 词要求 |
| 生产 redirect | PASS：HTTP/HTTPS、www/apex、首页/子路径均一跳到 apex HTTPS |

## 11. 建议人工执行的 GSC 操作

本轮未执行以下操作。建议在未来完成 commit/push/deploy 并确认线上 HTML 对应新版本后，再人工处理：

1. 在 `sc-domain:risingblox.com` 中打开 Sitemaps，确认 `https://risingblox.com/sitemap.xml` 为什么仍显示 2026-06-20 最后下载和 19 submitted。
2. 如果 GSC UI 仍未重新读取，可人工重新提交同一个 apex sitemap；不要提交 www sitemap。
3. 部署后 48–72 小时抽样检查：Iron progression、Iron runes、Noob progression、Anime profile、Anime guide。
4. 对首页和 `/trending/` 查看 Google canonical 是否逐步从历史 www 收敛到 apex；生产 redirect 已正常，不应重复修改代码。
5. 7 天后比较相关 page/query impressions；不要立即批量 Request Indexing。

## 12. 暂缓执行的内容机会

- Noob Incremental prism tree、soldier、minion、独立 runes 页：等待单一子意图达到更强 GSC 信号并取得可验证机制。
- Anime Squadron tier list、best units、mode 独立页：缺少可验证排名和独立搜索需求。
- Iron Soul relic、blueprint、drop table、weapon ranking：缺少官方或 logged in-game evidence；深度来源继续交给 BloxDungeon。
- 任何新的空 Codes 页面。
- Clash of Clans、Minecraft、Brawl Stars 或综合 GameHub。
- 删除/noindex 现有页面、修改 Cloudflare、提交 sitemap、请求索引。

## 13. 停止点

实现与本地验证已完成。当前停在未提交工作区；没有 commit、push 或 deploy。
