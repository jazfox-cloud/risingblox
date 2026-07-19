# RisingBlox AdSense P0 准入整改报告

- 日期：2026-07-19（America/Los_Angeles）
- 项目：`/Users/jazfox/Documents/risingblox`
- 生产域名：`https://risingblox.com/`
- 修复前审计状态：`READY_AFTER_MINOR_FIXES`
- 本地整改后状态：`READY_PENDING_HUMAN_EVIDENCE`
- 生产状态：本轮未部署；生产站仍是整改前版本
- 本地代码/内容 Blocker：0
- AdSense：未登录、未接入、未提交

## 开始前核对

| 项目 | 结果 |
|---|---|
| 分支 | `main` |
| HEAD | `48bef8acfc707d408d163873431c6ef3be8182ff` |
| origin/main | `48bef8acfc707d408d163873431c6ef3be8182ff` |
| 工作区 | 开始时完全干净 |
| 用户未提交修改 | 无 |
| 部署方式 | GitHub `main` push 触发 Cloudflare Pages 静态部署 |
| 最近一次有记录的 deployment | `3ad08ff5-239e-490a-8781-6e1a15059ce6`；不是本轮部署 |
| 当前生产证据 | 线上包含 HEAD 的 Scale Slimy Fish `2026-07-19` 日期；未读取 Cloudflare 后台精确当前 deployment ID |

没有覆盖用户修改，没有触碰其他网站。`/guides/iron-soul-dungeon/` 及其他高流量 URL、现有 canonical 和路径结构均保留。

## 五组审计问题与关闭结果

### 1. Grow a Garden 2 薄页

选择方案 A：增强并保留索引。

- 官方 Roblox Games API 在 2026-07-19 返回有效 experience、517,250 playing、1,308,180,311 visits，并给出当前官方描述。
- 官方描述可核验 seed shop restock、brown plot planting、harvest、sheckles、guild weekly rewards、night stealing 和 offline growth。
- `/guides/grow-a-garden-2/` 保持原 URL、200、indexable 和原 canonical。
- 删除构建中/MVP 表述，新增来源边界、5 个游戏特定章节、4 个 FAQ 和明确的未核验范围。
- 没有编造 crop value、timer、seed ranking、protection mechanic、code 或 reward。

### 2. 六个无有效代码页面

六页均保留 200，但改为 `noindex,follow`，移出 sitemap、首页卡片、Trending 主要入口和通用 guide code 入口。原因不是游戏失效，而是当前没有足够的一手 code 证据满足独立搜索落地页意图。

- `/codes/iron-soul-dungeon/`
- `/codes/grow-a-garden-2/`
- `/codes/mini-war/`
- `/codes/noob-incremental/`
- `/codes/anime-squadron/`
- `/codes/animal-hospital-anomaly/`

页面继续承担有限的站内状态说明，不进入未来广告范围。只有出现真实 active/expired code 和可追溯证据后才重新评估索引。

### 3. Scale Slimy Fish 日期

- 修复前可见日期：`2026-07-19`。
- 历史问题：commit `48bef8ac...` 在 2026-07-18 将日期从 2026-07-15 改为 2026-07-19，提交本身没有核验证据，不能倒推为已在未来完成检查。
- 本轮证据：2026-07-19 重新请求 Roblox 官方 Games API；当前官方描述仍列出 `10kccu`、`weather`、`turtle`。
- 修复后：日期诚实保留 `2026-07-19`，并在 code verification record 中新增本轮来源记录。
- 仍未核验：具体 reward、游戏内兑换入口和实际 redemption success；这些不得从官方描述外推。

### 4. Privacy、信任页、404 与隐私入口

- Privacy 明确区分当前状态与未来 AdSense 状态。
- 当前声明：无 GA4、无 AdSense、无其他广告网络、无非必要 analytics cookie、无用于广告/追踪的 localStorage。
- 披露 Cloudflare 网络/安全数据、运营日志、Cloudflare Email Routing、邮件内容和外部链接。
- 未来披露 Google/第三方供应商、cookie/IP/device identifier、个性化/非个性化广告、衡量、防欺诈和 Google partner-sites notice。
- 新增最后更新时间、用户请求方式、Sources、Disclaimer、增强 About。
- Footer 可访问 About、Contact、Privacy、Privacy Choices、Terms、Disclaimer、Sources。
- Privacy Choices 只在兼容的 Google Funding Choices API 就绪时出现；没有 CMP 时不显示伪按钮、不报错。
- 新增自定义 404：noindex、无 canonical、有恢复路径、标记广告禁投区。

### 5. 人工证据

#### 已关闭：实际受众与儿童导向

- 确认日期：2026-07-19。
- 证据提供者：RisingBlox 实际运营负责人。
- 当前状态：`CHILD_DIRECTED_STATUS: GENERAL_AUDIENCE_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`。
- 证据状态：`OPERATOR_CONFIRMED_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`。
- 运营负责人确认 RisingBlox 是面向一般 Roblox 玩家提供英文游戏攻略、代码状态和核验信息的网站，不专门面向 13 岁以下儿童。
- Roblox 受众和网站访客可能包含未成年人；本确认不表示网站没有未成年用户。
- 当前无账户、昵称/用户资料、排行榜、评论、聊天、UGC、用户画像或要求访客提交个人信息的攻略/code 功能。
- 当前未发现用于行为分析或广告个性化的 Analytics、AdSense 或非必要追踪 Cookie。
- 这是产品定位和当前运营事实确认，不是律师法律意见。
- 如果未来新增账户/登录、昵称/资料、评论/聊天/UGC、排行榜、邮箱或其他个人信息收集、儿童导向文案/视觉/推广、行为追踪或个性化广告，必须重新评估。若实际方向变为专门面向 13 岁以下儿童，必须调整广告和数据处理方式。

#### 仍待人工证据

- `CONTACT_EMAIL_RECEIVE_TEST: PASS`（2026-07-19，运营负责人确认测试邮件经 Cloudflare Email Routing 成功转发；未记录目标 Gmail、正文或个人信息）。
- `CONTACT_EMAIL_REPLY_TEST: NOT_TESTED`，作为非阻断运营监控，仍不得推定为 PASS。
- Cloudflare Security Events、WAF、Bots、Rate Limiting、Access 后台只读确认。
- 本地整改版本的生产部署与生产验收。

受众与 Contact receive 事项不再阻止状态转换；Cloudflare 只读证据、生产部署和生产验收仍阻止升级到 `READY_FOR_ADSENSE_TECHNICAL_INTEGRATION`。本地代码/内容已无已识别 Blocker。

## 日期与 code 核验结构

本轮在报告中建立可追溯记录，字段包括游戏、URL、检查日期、来源、结果、active/expired、redeem system、核验者角色和限制。六个空 code 页的页面日期更新到 2026-07-19 是实际一手来源复核的结果，不是单独刷新日期。

## SEO 与 URL 影响

- `/guides/iron-soul-dungeon/`：未改写、未 noindex、未移出 sitemap。
- Grow guide：原 URL/canonical 保持；内容增强；仍在 sitemap。
- 6 个 empty-code URL：仍为 200 和自引用 canonical；新增 noindex，退出 sitemap。
- Scale Slimy Fish codes：仍 indexable，仍在 sitemap。
- sitemap 从原 30 URL 中移除 6 个 noindex code URL，并新增 Disclaimer 与 Sources；本地导出共 26 个 sitemap URL。
- robots.txt 没有阻止 crawler。

## 隐私与广告接入边界

- 当前没有 Publisher ID、AdSense loader、ad unit、Auto ads、ads.txt 或真实广告请求。
- 当前没有 Google 认证 CMP；这是取得真实 AdSense 账户上下文后的技术接入步骤。
- 本轮没有自制 CMP，也没有模拟 consent UI。
- Header、Footer、Privacy Choices、空 code 状态和 404 已标记 future ad-exclusion zone。

## 测试与验收

| 检查 | 结果 |
|---|---|
| `npm run lint` | PASS；0 warnings/errors（Next 提示 lint command 未来弃用） |
| `npm run typecheck` | PASS |
| `npm test` | PASS，16/16 |
| `npm run build` | PASS；37 个静态页面生成成功 |
| `git diff --check` | PASS |
| JSON-LD | 抽查全部可解析 |
| noindex | 6/6 empty-code 页面正确 |
| sitemap | 不包含 6 个 noindex 页面；包含 Grow guide 和 Scale codes |
| 404 | 静态 `404.html` 含 noindex、无 canonical、恢复路径 |
| 1440×900 | 首页无横向溢出；无广告脚本 |
| 390×844 | 首页、Grow guide 及抽查页无横向溢出 |
| Console | 14 个本地页面抽查无 warning/error |
| Privacy Choices | 未配置 CMP 时隐藏；无 console error |
| AdSense/Publisher ID/ads.txt | 均未添加 |

### 性能证据

- PageSpeed API：2026-07-19 返回 HTTP 429、`RESOURCE_EXHAUSTED`，每日 Queries 配额为 0；没有 PSI 或 CrUX 数据。
- 本地 Lighthouse lab（`http://127.0.0.1:4173/`）：Performance 88、Accessibility 95、Best Practices 96、SEO 100、FCP 1.1s、LCP 4.0s、TBT 0ms、CLS 0。
- Lighthouse 是本地实验室数据，不代表生产 CrUX。LCP 不是本轮阻断项，接入广告后必须重测。

## 重新评级

| 维度 | 修复后 | 依据 |
|---|---|---|
| 内容价值 | Low risk | Grow guide 有独立、来源型价值；核心强页保留 |
| 原创性 | Low risk | 来源边界和独立编辑贡献明确 |
| 模板化/薄内容 | Low risk | 6 个空 code 页退出索引/广告范围 |
| 游戏代码准确性 | Medium risk | 有记录结构；in-game redemption 仍需真实证据 |
| 隐私与 Consent | Medium risk | 当前处理准确；真实 certified CMP 仍是账户接入步骤 |
| 儿童内容 | Low / monitoring | 运营负责人确认一般受众、非专门面向 under 13；可能有未成年访客，功能/推广/追踪变化时重评 |
| 技术可访问性 | Low risk | build、canonical、robots、sitemap、noindex 通过 |
| 广告误点风险 | Medium future risk | 禁投区已定义；真实广告接入后复验 |

## 当前状态

`READY_PENDING_HUMAN_EVIDENCE`

这是本地整改状态，不表示生产已更新，也不保证 Google 批准。受众与 Contact receive 人工确认已完成；仍需完成 Cloudflare WAF/crawler 证据、部署和生产复验，且不得出现其他人工阻断项，才可评估是否进入 `READY_FOR_ADSENSE_TECHNICAL_INTEGRATION`。

## 操作声明

- Commit：否
- Push：否
- Deploy：否
- Cloudflare 修改：否
- AdSense 登录/账户操作：否
- Publisher ID：未填写
- ads.txt：未创建
- 广告脚本/真实广告：未加载
- AdSense 审核提交：否
