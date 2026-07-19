# RisingBlox Code 核验证据记录

## 本轮方法

- 核验日期：2026-07-19（本轮未保存精确分钟，不补造时间）
- 核验者角色：Codex，read-only remediation auditor
- 一手接口：`https://games.roblox.com/v1/games?universeIds=...`
- 辅助一手页面：各游戏官方 Roblox experience page
- 结果范围：验证当前官方 title、description、creator、playing、visits、updated 和可见 code strings；未登录游戏、Discord 或开发者账户。
- 统一限制：官方描述没有 code 不等于绝对不存在；无法确认的 developer announcement、redemption UI 和 in-game result 标记 `PRIMARY_SOURCE_NOT_AVAILABLE`。

## 记录

### Scale Slimy Fish

- Page URL：`/codes/scale-slimy-fish/`
- Official source：`https://www.roblox.com/games/82208825713916/Scale-Slimy-Fish`
- Universe ID：`10299611114`
- Result：官方 API description 仍明确列出 `10kccu`、`weather`、`turtle`。
- Active codes：`10kccu`, `weather`, `turtle`
- Expired codes：无已验证记录
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Rewards：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未在游戏内兑换，不能声明 reward 或 redemption success。
- Decision：保持 indexable；`codesLastChecked: 2026-07-19` 由本轮真实检查支持。

### Iron Soul: Dungeon

- Page URL：`/codes/iron-soul-dungeon/`
- Official source：`https://www.roblox.com/games/117533937949084/Iron-Soul-Dungeon`
- Universe ID：`9910245722`
- Result：游戏有效；官方 description 未列 active/expired code 或 redemption system。
- Active codes：[]
- Expired codes：[]
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未检查 developer Discord 或游戏内界面；BloxDungeon source log 仅是补充线索。
- Decision：`noindex,follow`。

### Grow a Garden 2

- Page URL：`/codes/grow-a-garden-2/`
- Official source：`https://www.roblox.com/games/97598239454123/Grow-a-Garden-2`
- Universe ID：`10200395747`
- Result：游戏有效；官方 description 说明玩法但未列 code 或 redemption system。
- Active codes：[]
- Expired codes：[]
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未检查 developer Discord 或游戏内界面。
- Decision：`noindex,follow`。

### Mini War

- Page URL：`/codes/mini-war/`
- Official source：`https://www.roblox.com/games/131346454575416/Mini-War`
- Universe ID：`9837612476`
- Result：游戏有效；当前 official description 未列 specific active code。历史官方 update text 曾说明新增 code system，但不能证明当前 code。
- Active codes：[]
- Expired codes：[]
- Redeem system：historically referenced; current in-game UI `PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未登录游戏；没有可验证的 specific code string。
- Decision：`noindex,follow`。

### Noob Incremental

- Page URL：`/codes/noob-incremental/`
- Official source：`https://www.roblox.com/games/76911729991355/Noob-Incremental`
- Universe ID：`9965411707`
- Result：游戏有效；官方 description 列 gameplay、runes 和 Prestige，但没有 code 或 redemption system。
- Active codes：[]
- Expired codes：[]
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未检查 developer Discord 或游戏内界面。
- Decision：`noindex,follow`。

### Anime Squadron

- Page URL：`/codes/anime-squadron/`
- Official source：`https://www.roblox.com/games/71132543521245/Anime-Squadron`
- Universe ID：`8356066619`
- Result：游戏有效；官方 description 未列 code 或 redemption UI。
- Active codes：[]
- Expired codes：[]
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未检查 Komplex Studio 的 developer-linked announcement 或游戏内界面。
- Decision：`noindex,follow`。

### Animal Hospital (Anomaly)

- Page URL：`/codes/animal-hospital-anomaly/`
- Official source：`https://www.roblox.com/games/78515283254292/Animal-Hospital`
- Universe ID：`10148749921`
- Result：游戏有效；官方 description 仅说明 night-shift/anomaly premise，没有 code 或 redemption system。
- Active codes：[]
- Expired codes：[]
- Redeem system：`PRIMARY_SOURCE_NOT_AVAILABLE`
- Evidence limitation：未检查 developer Discord 或游戏内界面。
- Decision：`noindex,follow`。

## Scale Slimy Fish 时间线

| Date | Evidence | Interpretation |
|---|---|---|
| 2026-07-10 | 初始 source-backed content | 官方描述列 3 个 code strings |
| 2026-07-15 | commit `89d7574...` | 旧检查日期刷新 |
| 2026-07-18 | commit `48bef8a...` authored/committed | 将 `codesLastChecked` 从 2026-07-15 改为未来的 2026-07-19；提交中无核验证据 |
| 2026-07-19 | 本轮 Roblox Games API response | 官方描述仍列 3 个 code strings；从此时起 2026-07-19 日期有实际证据 |

不得把 2026-07-19 的复核证据倒写为 2026-07-18 已完成，也不得从 code strings 推断 reward 或兑换成功。
