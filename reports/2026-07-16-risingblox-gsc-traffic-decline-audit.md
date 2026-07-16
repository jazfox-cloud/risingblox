# RisingBlox GSC 流量下滑诊断报告

- 审计日期：2026-07-16
- 网站：https://www.risingblox.com/（canonical 主机为 `https://risingblox.com`）
- Git 基线：`e891983916a2308239a84169bb05176675e2440e`
- 范围：仅分析和报告；未修改代码、未新增页面、未提交、未部署。
- 最新完整 GSC 日期：2026-07-14（采用 `dataState=final`）。

## 1. 执行摘要

最新 7 天（2026-07-08–07-14）相较前 7 天（2026-07-01–07-07），站点级展示从 79 降到 7，下降 72（-91.1%）；两段点击均为 0；平均排名从 14.29 变为 17.00，下降 2.71 位。最近 3 天展示也从 5 降到 1，没有恢复迹象。

下降不是全站同等发生，而是高度集中在 `/guides/iron-soul-dungeon/`：按页面维度，该页从 62 次展示降到 0，贡献了绝大多数已识别页面损失。`/games/animal-hospital-anomaly/`、Anime Squadron 的 profile/guide 以及 Grow a Garden 2、Mini War 的少量页面也下降，但量级很小。

当前没有证据支持“Google 惩罚”或最新部署导致全站技术故障。主要下滑页仍为 `Submitted and indexed`，抓取、robots、canonical 和页面获取均正常；下降在 7 月 1–3 日已经开始，而 7 月 4 日后的 canonical、内容和 ESLint 改动发生在主要下滑之后。

## 2. 数据口径与限制

- 站点总指标使用无维度的 property aggregation；页面、查询、国家、设备使用各自维度聚合。GSC 在不同聚合口径下可能因同一 SERP 展示多个 URL、匿名查询和隐私阈值而不完全相加。
- 页面 URL 已把 `www`/apex、尾斜杠/无尾斜杠归一到 canonical apex 后判断新增、下降和内容类型。
- 最近 28 天之前只有 2026-06-16 的 1 次展示；该窗口主要反映新站启动，不适合据此判断长期同比下降。
- 查询维度受匿名化影响：最近 7 天只返回 1 个当前查询和 7 个已消失查询，不能凑足 30 个；不得据此猜测被隐藏查询。
- Search appearance 两个比较窗口均无返回行，无法确认富结果变化。

## 3. 核心指标比较

| 比较窗口 | Clicks | Impressions | CTR | Average Position | Clicks 变化 | Impressions 变化 | CTR 变化 | Position 变化 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-07-08–07-14 vs 2026-07-01–07-07 | 0 vs 0 | 7 vs 79 | 0.00% vs 0.00% | 17.00 vs 14.29 | 0；百分比 N/A | -72；-91.1% | 0.00pp；百分比 N/A | +2.71；18.9% 变差 |
| 2026-06-17–07-14 vs 2026-05-20–06-16 | 14 vs 0 | 917 vs 1 | 1.53% vs 0.00% | 10.92 vs 11.00 | +14；百分比 N/A | +916；+91,600% | +1.53pp；百分比 N/A | -0.08；0.7% 改善 |
| 2026-07-12–07-14 vs 2026-07-09–07-11 | 0 vs 0 | 1 vs 5 | 0.00% vs 0.00% | 1.00 vs 22.80 | 0；百分比 N/A | -4；-80.0% | 0.00pp；百分比 N/A | -21.80；样本仅 1 次展示，无解释力 |

### 近 3 个月趋势

GSC 在 2026-06-16 前没有有效数据，因此“3 个月趋势”实际是上线以来趋势：

- 6 月 16 日开始有展示；6 月 20–30 日快速放量，每日 48–145 次展示。
- 6 月 21 日为单日峰值 145；6 月 23 日 92；6 月 28 日 85。
- 7 月 1 日降至 48，7 月 2 日降至 28，7 月 3–4 日为 0。
- 7 月 5–14 日每天仅 0–3 次展示；7 月 13–14 日均为 0。
- 点击集中在 6 月 17–29 日，共 14 次；7 月以来没有点击。

结论：这是“6 月下旬短期峰值后，在 7 月初快速消退”，不是 7 月 12–15 日突然发生的部署型断崖。

## 4. 下降来源拆解

### 4.1 Pages

#### 点击下降最多

最新 7 天和前 7 天均为 0 点击，因此没有可识别的页面点击下降榜。最近 28 天的 14 次点击中，页面维度可识别的主要来源是 Iron Soul Dungeon guide 的 apex/www 版本共 12 次；Grow a Garden 2 profile 的 apex/www 版本共 2 次。页面归一后，历史点击高度集中于两个主题。

#### 展示下降最多（归一化，最新 7 天 vs 前 7 天）

| URL | 类型 | 展示现在 | 展示此前 | 变化 | 排名现在 | 排名此前 |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| https://risingblox.com/guides/iron-soul-dungeon/ | Guides | 0 | 62 | -62 | N/A | 13.31 |
| https://risingblox.com/games/animal-hospital-anomaly/ | Games | 4 | 7 | -3 | 7.25 | 12.43 |
| https://risingblox.com/games/anime-squadron/ | Games | 1 | 3 | -2 | 3.00 | 14.00 |
| https://risingblox.com/guides/anime-squadron/ | Guides | 2 | 3 | -1 | 5.50 | 13.00 |
| https://risingblox.com/games/grow-a-garden-2/ | Games | 0 | 1 | -1 | N/A | 3.00 |
| https://risingblox.com/games/mini-war/ | Games | 0 | 1 | -1 | N/A | 6.00 |
| https://risingblox.com/guides/grow-a-garden-2/ | Guides | 0 | 1 | -1 | N/A | 2.00 |

数据只支持 7 个下降 URL，不能提供真实的前 20 名。

#### 有效 URL 排名下降

仅列两个时期都有展示的 URL；单次展示的排名变化不可过度解读。

| URL | 展示现在/此前 | 排名现在 | 排名此前 | 变化 |
| --- | ---: | ---: | ---: | ---: |
| https://risingblox.com/trending/ | 3 / 2 | 32.67 | 27.00 | +5.67 变差 |
| https://risingblox.com/codes/grow-a-garden-2/ | 1 / 1 | 8.00 | 4.00 | +4.00 变差 |
| https://risingblox.com/games/animal-hospital-anomaly/ | 4 / 7 | 7.25 | 12.43 | -5.18 改善 |
| https://risingblox.com/guides/anime-squadron/ | 2 / 3 | 5.50 | 13.00 | -7.50 改善 |

#### 新增曝光页面

| URL | 展示 | 平均排名 |
| --- | ---: | ---: |
| https://risingblox.com/games/noob-incremental/ | 1 | 6.00 |
| https://risingblox.com/codes/anime-squadron/ | 1 | 10.00 |
| https://risingblox.com/codes/iron-soul-dungeon/ | 1 | 5.00 |

#### 完全失去曝光或点击

- 完全失去曝光：`/guides/iron-soul-dungeon/`（62→0）、`/games/grow-a-garden-2/`（1→0）、`/games/mini-war/`（1→0）、`/guides/grow-a-garden-2/`（1→0）。
- 完全失去点击：无法列出，因为两个最新 7 天窗口的页面点击均为 0。

### 4.2 Queries

#### 点击下降最多的查询

最新 7 天两个窗口返回的可识别查询点击均为 0，因此没有真实的点击下降查询榜。最近 28 天查询维度仅公开 4 个各 1 点击的查询（其余点击被匿名化）：`iron soul dungeon forge guide`、`iron soul dungeon guide`、`iron soul dungeon roblox wiki`、`iron soul dungeon wiki roblox`。

#### 展示下降最多的查询（最新 7 天）

| Query | 展示现在 | 展示此前 | 变化 | 此前排名 |
| --- | ---: | ---: | ---: | ---: |
| how to level up fast in iron soul dungeon | 0 | 7 | -7 | 8.57 |
| anime squadron | 0 | 2 | -2 | 14.00 |
| animal hospital anomaly game | 0 | 1 | -1 | 35.00 |
| iron soul dungeon | 0 | 1 | -1 | 46.00 |
| iron soul dungeon best starter weapon | 0 | 1 | -1 | 9.00 |
| iron soul wiki | 0 | 1 | -1 | 40.00 |
| roblox anime squadron | 0 | 1 | -1 | 14.00 |

当前唯一公开的新查询是 `current roblox trends`，1 次展示、平均排名 45。查询隐私阈值导致无法提供前 30 名。

#### 排名下降明显的查询

没有查询在两个最新 7 天窗口都保有足够展示，因此无法可靠计算查询级排名下降。把“此前有排名、现在无返回”直接写成排名跌至某一位置会是猜测；本报告不这样处理。

#### 新出现且排名 8–30 的查询（最近 28 天）

| Query | 展示 | 点击 | CTR | 排名 |
| --- | ---: | ---: | ---: | ---: |
| how to level up fast in iron soul dungeon | 13 | 0 | 0.00% | 8.92 |
| iron soul dungeon guide | 7 | 1 | 14.29% | 25.43 |
| anime squadron | 9 | 0 | 0.00% | 25.89 |
| anime squadron roblox | 5 | 0 | 0.00% | 20.20 |
| roblox anime squadron | 3 | 0 | 0.00% | 12.67 |
| iron soul dungeon beginner guide | 2 | 0 | 0.00% | 9.50 |
| iron soul dungeon best runes | 2 | 0 | 0.00% | 23.00 |
| iron soul dungeon tips | 2 | 0 | 0.00% | 16.50 |
| noob incremental | 5 | 0 | 0.00% | 23.20 |
| noob incremental roblox | 1 | 0 | 0.00% | 10.00 |
| noob incremental prism tree | 1 | 0 | 0.00% | 26.00 |
| noob incremental soldier | 1 | 0 | 0.00% | 15.00 |
| minion noob incremental | 1 | 0 | 0.00% | 10.00 |
| mini war roblox | 1 | 0 | 0.00% | 22.00 |

#### 排名不错但 CTR 偏低

| Query | 展示 | CTR | 排名 | 判断 |
| --- | ---: | ---: | ---: | --- |
| how to level up fast in iron soul dungeon | 13 | 0.00% | 8.92 | 最强可操作信号；标题/答案匹配或 SERP 竞争可能不足 |
| iron soul best runes | 4 | 0.00% | 7.75 | 有专页机会，但必须先验证与 broad guide 的意图分工 |
| iron soul dungeon skill tree | 4 | 0.00% | 8.00 | 适合增强现有 guide 的明确章节，不足以自动建页 |
| iron soul dungeon beginner guide | 2 | 0.00% | 9.50 | 样本小，继续观察 |
| rising roblox games | 2 | 0.00% | 5.50 | 首页 snippet/品牌信任问题可能存在，但样本太小 |

### 4.3 Countries（最新 7 天）

| 国家 | 展示现在 | 展示此前 | 变化 | 点击现在/此前 | 排名现在/此前 |
| --- | ---: | ---: | ---: | ---: | ---: |
| USA | 4 | 36 | -32 | 0 / 0 | 17.25 / 16.17 |
| Philippines | 0 | 7 | -7 | 0 / 0 | N/A / 10.71 |
| Vietnam | 0 | 5 | -5 | 0 / 0 | N/A / 12.20 |
| Canada | 0 | 4 | -4 | 0 / 0 | N/A / 11.25 |
| Germany | 0 | 4 | -4 | 0 / 0 | N/A / 10.50 |
| Indonesia | 0 | 4 | -4 | 0 / 0 | N/A / 17.25 |
| India | 0 | 3 | -3 | 0 / 0 | N/A / 19.67 |
| Thailand | 0 | 2 | -2 | 0 / 0 | N/A / 11.00 |
| Turkey | 0 | 2 | -2 | 0 / 0 | N/A / 24.50 |
| Netherlands | 2 | 1 | +1 | 0 / 0 | 2.50 / 35.00 |
| Egypt | 1 | 0 | +1 | 0 / 0 | 45.00 / N/A |

美国绝对下降最大，因为它原本就是最大市场；菲律宾、越南、加拿大、德国、印尼等同时下降。结论是跨国家的整体可见度衰退，不是单一国家故障。

### 4.4 Devices（最新 7 天）

| 设备 | 展示现在 | 展示此前 | 变化 | 百分比 | 点击现在/此前 | 排名现在/此前 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Desktop | 7 | 45 | -38 | -84.4% | 0 / 0 | 17.00 / 17.47 |
| Mobile | 0 | 32 | -32 | -100.0% | 0 / 0 | N/A / 10.31 |
| Tablet | 0 | 2 | -2 | -100.0% | 0 / 0 | N/A / 6.50 |

移动端相对下降最彻底，但桌面绝对损失更大，不能归类为“仅移动端故障”。URL Inspection 使用 mobile crawler 成功抓取主要页面，robots/indexing 均允许；仍建议把移动端作为 Possible 监控项，而不是已确认 UX 故障。

### 4.5 Search appearance

7 天和 28 天窗口均无 `searchAppearance` 行。无法确认 FAQ、富结果或其他展示类型的增减，也不能把其作为下滑原因。

## 5. 按内容类型归类

页面数量来自当前线上 sitemap（30 URL）；指标使用归一化页面聚合的最新 7 天对比。页面维度与站点总维度不要求相加一致。

| 类型 | Sitemap 页面数 | 点击变化 | 展示现在/此前 | 展示变化 | CTR 现在/此前 | 平均排名现在/此前 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Homepage | 1 | 0 | 1 / 1 | 0 | 0.00% / 0.00% | 2.00 / 5.00 |
| `/trending/` | 1 | 0 | 3 / 2 | +1 | 0.00% / 0.00% | 32.67 / 27.00 |
| `/games/` | 8 | 0 | 6 / 12 | -6 | 0.00% / 0.00% | 6.33 / 11.50 |
| `/guides/` | 9 | 0 | 3 / 67 | -64 | 0.00% / 0.00% | 4.00 / 14.13 |
| `/codes/` | 7 | 0 | 3 / 1 | +2 | 0.00% / 0.00% | 7.67 / 4.00 |
| About/Contact/Privacy/Terms | 4 | 0 | 0 / 0 | 0 | N/A | N/A |

重点验证结果：

1. **少数热门游戏热度下降：Confirmed（站内表现层面）**。Iron Soul guide 单页损失 62 次页面维度展示，远高于其他已识别 URL；但“Roblox 游戏本身热度下降”尚无外部趋势时间序列，不能直接确认。
2. **无有效 Code 页面失去曝光：Ruled out as primary cause**。Codes 类从 1 增到 3 次页面展示，本来就没有形成有效流量；薄内容风险存在，但不是本次主跌幅。
3. **Games/Codes/Guides 关键词互相竞争：Possible**。28 天 query-page 数据主要显示 `www`/apex 主机重复，同一 query 没有稳定跨内容类型分流；Anime Squadron profile 与 guide、Iron Soul broad guide 与 runes guide 在语义上重叠，但尚不能确认 cannibalization。
4. **页面相似/意图重复：Likely**。5 个无 code 页面共享高度相似结构；Anime Squadron profile 与 guide 同时覆盖 units、boss waves、codes status。
5. **首页或 Trending 下滑：Ruled out as primary cause**。首页展示持平；Trending 展示增加 1，但排名变差。
6. **收录/canonical/抓取/sitemap/robots 异常：Possible but not primary**。主要内容页已收录、抓取成功；首页与 Trending 仍有 Google 选 `www` canonical 的历史信号；GSC sitemap 汇总明显滞后。
7. **与代码改动/部署时间相关：Ruled out for recent commits; Possible for older launch volatility**。下降 7 月 1–3 日开始，7 月 4–15 日主要改动在下降之后。

## 6. 技术 SEO 与部署时间线

### 线上检查（2026-07-16）

- `https://risingblox.com/`：200。
- `https://www.risingblox.com/`：301 一跳到 apex。
- `/trending/`、`/guides/iron-soul-dungeon/`：200。
- `robots.txt`：200，`User-Agent: *` + `Allow: /`。
- `sitemap.xml`：200，当前列出 30 个 canonical apex URL。

### URL Inspection

| URL | Verdict | Coverage | Google/User canonical | Last crawl |
| --- | --- | --- | --- | --- |
| `/` | NEUTRAL | Duplicate, Google chose different canonical | `www` / apex | 2026-07-06 |
| `/trending/` | NEUTRAL | Duplicate, Google chose different canonical | `www` / apex | 2026-07-10 |
| `/guides/iron-soul-dungeon/` | PASS | Submitted and indexed | apex / apex | 2026-07-09 |
| `/games/anime-squadron/` | PASS | Submitted and indexed | apex / apex | 2026-07-04 |
| `/codes/grow-a-garden-2/` | PASS | Submitted and indexed | apex / apex | 2026-07-04 |

GSC sitemap 状态仍为：2026-06-20 最后提交/下载、0 warnings、0 errors、`submitted=19`、`indexed=0`。这与当前线上 30 URL 和抽样 URL Inspection 的 `Submitted and indexed` 冲突，说明汇总陈旧；但 sitemap 长期未重新下载仍应人工在 GSC 中复核，不应直接当成 30 页未收录。

### 改动时间相关性

- 7 月 1 日展示已从 60 降到 48，7 月 2 日降到 28，7 月 3 日为 0。
- 7 月 4 日才出现 canonical/sitemap/hostname 修复和独立页内链改动。
- 7 月 5–7 日的 Mini War、Anime Squadron、Iron Soul 内容增强发生在下滑之后。
- 7 月 12 日 canonical/email 修复、7 月 15 日 ESLint 基线更晚。

因此：没有证据证明最近代码或部署造成下滑；也没有足够数据证明后续内容改动已带来恢复。

## 7. 页面质量抽样

### 抽样组

- 流量下降最大 5 页：Iron Soul guide、Animal Hospital profile、Anime Squadron profile、Anime Squadron guide、Grow a Garden 2 profile。
- 仍增长页实际只有 4 个归一化 URL：Trending、Noob Incremental profile、Anime Squadron codes、Iron Soul codes；为满足质量对照，增加 1 个“持平页”Grow a Garden 2 codes，不伪称其增长。
- 有展示无点击 5 页：首页、Trending、Animal Hospital profile、Anime Squadron profile、Noob Incremental profile。
- 无有效 code 5 页：Iron Soul、Grow a Garden 2、Mini War、Noob Incremental、Anime Squadron codes。

### 页面记录

| URL | Target query / intent | Title / H1 | Meta description | Last checked | 主要模块与内链 | 独有、可验证信息 | 风险判断 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/guides/iron-soul-dungeon/` | `how to level up fast...`; beginner/forge/runes | `Iron Soul Dungeon Guide: Level Up Fast, Forge Route, Relics, and Best Runes` / 同标题 | 覆盖 leveling、forge、relic、runes、weapon、blueprint | 2026-07-08 | intro、目录、策略章节、FAQ；链到 profile、codes、best-runes、BloxDungeon | 有针对查询的细分内容和来源分工 | 内容过宽；与 best-runes 和外部 BloxDungeon 部分重叠；更新节奏高 |
| `/games/animal-hospital-anomaly/` | `animal hospital anomaly game`; profile | `Animal Hospital (Anomaly) Roblox Game Profile` / `Animal Hospital (Anomaly)` | profile、官方来源、玩法、snapshot、guide/codes | 2026-07-03 | play link、stats、gameplay、data notes；链到 guide/codes | 有官方 Roblox snapshot 和独立异常玩法信息 | 技术健康，主要问题是需求小，不是薄页故障 |
| `/games/anime-squadron/` | `anime squadron`; profile/hub | `Anime Squadron Roblox Guide, Codes Status, Units, and Boss Waves` / `Anime Squadron` | units、boss waves、modes、UPD 1.0、codes | 2026-07-14 stats；内容 2026-07-09 | play、stats、gameplay、guide/codes | 官方 Roblox snapshot、UPD 1.0 信息 | profile 过像 guide，意图边界模糊 |
| `/guides/anime-squadron/` | `roblox anime squadron`; beginner/units/boss | `Anime Squadron Roblox Guide: Units, Boss Wave Tips, and Codes Status` / 同标题 | early units、placement、boss waves、codes、modes | 2026-07-09 | 目录、early strategy、章节、FAQ；链到 profile/codes | 有游戏特定结构 | 与 profile 覆盖相同 head terms；具体 unit 证据仍偏少 |
| `/games/grow-a-garden-2/` | `grow a garden 2 roblox`; profile | `Grow a Garden 2 Roblox Game Profile` / `Grow a Garden 2` | gameplay、play link、guide、codes | 2026-07-14 stats；内容 2026-06-23 | seed restock、guild、night stealing、offline growth；链到 guide/codes | 官方玩法与高 Roblox snapshot 可验证 | 内容日期较旧，搜索展示已归零；应 refresh 而非扩页 |
| `/trending/` | `current roblox trends`; discovery | `Trending Roblox Games` / 同标题 | 手工 watchlist、验证状态、review dates | 页面 2026-07-10 | methodology、new this week、table、standalone checks；链到各 profile/guide/codes | 有策展方法和更新时间 | 当前 query 排名 45；discover intent 与搜索词匹配仍弱 |
| `/games/noob-incremental/` | `noob incremental`; profile | `Noob Incremental Roblox Game Profile` / `Noob Incremental` | profile、gameplay、play、guide、codes | 2026-07-14 stats；内容 2026-06-22 | stats、gameplay、next steps；链到 guide/codes | 官方 snapshot 可验证 | profile 内容较薄；新 query 指向 prism tree、soldier 等未覆盖细节 |
| `/` | `rising roblox games`; discovery/brand | `RisingBlox - Rising Roblox Games, Codes, and Guides` / `Find the Roblox games...` | rising games、guides、scores、codes | 页面 lastmod 2026-07-10 | hero、Today’s Pick、Trending、profiles、standalone pages | 有站点策展定位 | 2 次展示、排名 5.5 但无点击；样本小；Google canonical 仍是 www |
| `/codes/iron-soul-dungeon/` | `iron soul dungeon codes`; codes | `Iron Soul: Dungeon Roblox Codes` / `Iron Soul: Dungeon Codes` | 只列经官方/开发者/兑换验证的 codes | 2026-07-14 | empty active box、检查方法、兑换、FAQ；链到 profile/guide/BloxDungeon | 有来源政策但无 active code | 模板化、用户满足度低；当前只有 1 次新展示 |
| `/codes/grow-a-garden-2/` | `grow a garden 2 codes`; codes | `Grow a Garden 2 Roblox Codes` / `Grow a Garden 2 Codes` | verified-only code policy | 2026-07-14 | empty active box、检查方法、兑换、FAQ；链到 profile/guide | 无当前 code；仅政策可验证 | 排名 8、1 展示、0 点击；薄内容风险高 |
| `/codes/mini-war/` | `mini war codes`; codes | `Mini War Roblox Codes` / `Mini War Codes` | verified-only code policy | 2026-07-14 | empty active box、检查方法、兑换、FAQ | 官方描述提到 code system，但无具体 active code | 有潜在意图，无可满足答案；应 Hold |
| `/codes/noob-incremental/` | `noob incremental codes`; codes | `Noob Incremental Roblox Codes` / `Noob Incremental Codes` | verified-only code policy | 2026-07-14 | empty active box、检查方法、兑换、FAQ | 无 active code | 模板化；GSC 未显示 codes demand |
| `/codes/anime-squadron/` | `anime squadron codes`; codes | `Anime Squadron Roblox Codes` / `Anime Squadron Codes` | verified-only code policy | 2026-07-11 | empty active box、检查方法、兑换、FAQ | 无 active code | 1 次新展示、排名 10；需观察，不应假造代码 |

## 8. 原因分类

### Confirmed

- 最新 7 天展示下降 91.1%，最近 3 天继续下降；不是统计口径上的轻微波动。
- 下滑高度集中于 Iron Soul Dungeon guide；其页面展示 62→0。
- 7 月以来没有点击，6 月下旬的点击与展示峰值未延续。
- 下滑跨国家、跨 Desktop/Mobile 发生，不是单一国家或单一设备独占。
- 主要下滑内容页仍可抓取且已收录。

### Likely

- 6 月下旬的流量主要来自 Iron Soul 的短期查询热度或 SERP 测试，站点缺少第二个稳定主题承接，因此单一主题退潮造成全站大幅下降。
- Iron Soul broad guide、Anime Squadron profile/guide 的意图过宽，标题和内容分工不足，降低了持续排名与 CTR 的可能性。
- 无 code 页面结构高度相似且答案为空，长期存在薄内容/低满意风险，但不是本次下滑主因。

### Possible

- 首页和 Trending 的 `www` Google canonical 历史信号可能分散主机一致性，但没有扩散到主要下滑页。
- GSC sitemap 长期未重新下载、汇总仍为 19/0，可能影响新 URL 发现速度；抽样收录结果与其冲突，需在 GSC UI 人工复核。
- Mobile 从 32 次展示降到 0 可能包含移动 SERP 需求或排名差异；当前抓取证据不足以确认移动 UX 问题。
- Iron Soul broad guide 与新 best-runes guide 可能发生未来关键词竞争；best-runes 7 月 13 日才上线，尚无足够 GSC 数据。

### Ruled out

- 最新 ESLint、canonical/email 修复直接导致本轮下滑：主要下降更早发生。
- robots.txt 阻挡、页面无法抓取、主要内容页被 noindex：抽样均不成立。
- Homepage 或 Trending 是主要损失来源：它们没有贡献主要展示下降。
- Codes 类是当前主要流量损失来源：其展示基数过低且最新窗口反而略增。
- “Google 惩罚”“算法打击”：没有证据，不能写成事实。

## 9. 内容机会清单（只提议，不实施）

### Refresh

1. **P0 — `/guides/iron-soul-dungeon/`**：围绕 `how to level up fast`、forge、skill tree、starter weapon 重构信息层级；核实每个机制的当前版本；让 broad guide 做 hub，不与 runes 专页抢同一主意图。
2. **P0 — `/guides/noob-incremental/` + profile**：内容仍停在 2026-06-22，而 GSC 已出现 prism tree、soldier、minion、runes、prestige 查询。先增强现有 guide，不立即拆多页。
3. **P1 — Anime Squadron profile/guide**：profile 收窄为游戏事实与导航，guide 聚焦 beginner units、lane、boss waves；先解决重复意图，再考虑新页。
4. **P1 — Grow a Garden 2 profile/guide**：Roblox snapshot 很强（2026-07-14 为 318,327 online、1.21B visits），但站内页面 7 天曝光归零且内容自 6 月 23 日未更新；优先核实版本/玩法变化。
5. **P2 — 首页与 Trending**：改善 `rising roblox games` / `current roblox trends` 的可验证方法、更新日期和具体趋势证据；样本小，不做大改。

### Consolidate

- **Iron Soul**：broad guide 保留 leveling/forge/skill tree 入口；best-runes 专页独占 runes 深度意图；避免两页同时把“best runes”放在主标题中心。
- **Anime Squadron**：profile 负责“是什么、官方来源、状态、导航”；guide 负责“怎么玩”；codes 仅在有真实 code 或持续 codes query 时保持强入口。
- **无 code 页面**：不建议现在批量删除；先降低站内推荐权重并观察 28 天 query。如果持续无 codes demand、无 active/expired code、无独有信息，再评估合并到 profile 的 codes-status 模块。

### Hold

- Mini War、Noob Incremental、Anime Squadron 的空 Codes 页：没有可验证 active code，不扩写模板文字。
- Animal Hospital (Anomaly)：已收录且技术健康，但搜索需求极小，不继续拆页。
- Drain the Lake：Roblox snapshot 强，但当前 GSC 没有 query 证据；保持 profile/guide，不新增 codes 或通用攻略页。
- 非 Roblox 扩张：继续排除 Clash of Clans、Minecraft、Brawl Stars 和综合 GameHub。

### New cluster

当前没有“全新 Roblox 游戏”同时满足 GSC 搜索证据、可验证信息和独特内容深度，因此不建议为新游戏自动建三件套。以下仅是**现有游戏的候选子集群**：

#### P0 — Noob Incremental advanced mechanics

- 游戏：Noob Incremental。
- 热度/搜索证据：GSC 有 `noob incremental`（5 展示，pos 23.2）、`prism tree`（pos 26）、`soldier`（pos 15）、`minion`（pos 10）；2026-07-14 Roblox snapshot 为 5,750 online、23.1M visits。
- 核心关键词：`noob incremental prism tree`、`noob incremental soldier`、`noob incremental runes`、`prestige guide`。
- 搜索意图：进阶机制与升级路径。
- 建议页面：先增强现有 guide；只有单一子意图达到 10–100 展示且能提供独有验证内容时，再拆 `prism tree guide` 或 `soldier progression`。
- 值得做的原因：已有多条具体 GSC long-tail，现有页面只做通用 beginner coverage。
- 信息验证：官方 Roblox 页面、开发者渠道、游戏内实测、后续 GSC query-page。
- 内链：profile → guide hub → future mechanic page；Trending 只在有近期更新时链接。
- 过时风险：中高，数值和 prestige 路线会随更新变化。

#### P1 — Anime Squadron units and boss modes

- 游戏：Anime Squadron。
- 热度/搜索证据：`anime squadron` 9 展示（pos 25.9）、`anime squadron roblox` 5（pos 20.2）、`roblox anime squadron` 3（pos 12.7）；2026-07-14 Roblox snapshot 为 34,783 online、71.7M visits。
- 核心关键词：`anime squadron best units`、`boss wave guide`、`game modes`。
- 搜索意图：阵容选择、boss 生存、模式说明。
- 建议页面：先重构现有 guide 的 units/boss/modes 章节；只有 GSC 或 SERP 明确出现独立意图后再拆页。没有证据支持空 tier list。
- 值得做的原因：品牌 query 已出现，且游戏结构支持可验证策略内容。
- 信息验证：官方 Roblox 描述、官方更新说明、开发者链接、游戏内测试。
- 内链：profile → guide；codes 仅作状态页，不抢 guide head term。
- 过时风险：高，unit meta 与 boss 机制可能快速变化。

#### P2 — Scale Slimy Fish verified progression/codes

- 游戏：Scale Slimy Fish。
- 热度/搜索证据：2026-07-14 Roblox snapshot 为 5,350 online、16.2M visits；现有站点有经官方描述记录的 codes，但当前 GSC 尚无足够 query 证据。
- 核心关键词：`scale slimy fish codes`、`rod upgrade`、`knife upgrade`。
- 搜索意图：兑换、工具升级、catch-to-cash progression。
- 建议页面：维持现有 profile/guide/codes；仅在 GSC 有 10+ 相关展示或新的官方 code/update 时增强，不新建通用 wiki/tier list。
- 值得做的原因：事实差异化强于空 Codes 页，但需求证据仍弱。
- 信息验证：官方 Roblox 页面、游戏内兑换、Roblox public snapshot。
- 内链：首页/Trending → profile；profile ↔ guide/codes。
- 过时风险：中，codes 和工具数值会变化。

## 10. 缺失或不足的数据

- 2026-05-20–06-15 几乎无 GSC 数据，28 天对比不能回答成熟站点的环比下降。
- 查询隐私阈值隐藏了大部分点击和低量查询，无法真实输出 30 个查询下降项。
- Search appearance 无行，无法评估富结果变化。
- 没有 Google Trends、第三方关键词量、SERP 历史排名或 Roblox 游戏热度时间序列；因此只能确认“站内 Iron Soul 曝光消失”，不能确认“游戏本身热度下降”。
- URL Inspection 是抽样而非全站 30 URL；GSC sitemap UI 的陈旧状态需要人工打开 Search Console 复核最后读取/提交状态。

## 11. 最终诊断

RisingBlox 的本轮下滑主要是**单一主题依赖导致的可见度退潮**：6 月下旬 Iron Soul Dungeon guide 获得短期展示和点击，7 月初该主题几乎完全退出，其他 Roblox 页面尚未形成足够流量接棒。站点当前还处于数据很稀疏的新站阶段，91.1% 的百分比跌幅由很小的绝对量放大。

最合理的下一步是先刷新并明确分工 Iron Soul、Noob Incremental、Anime Squadron 和 Grow a Garden 2 的现有页面，同时继续观察 GSC；不是扩展到非 Roblox，也不是批量制造空 Codes 页。技术侧应人工复核 GSC sitemap 长期未重新下载以及首页/Trending 的历史 `www` canonical 信号，但现有证据不足以把它们认定为主要下滑原因。
