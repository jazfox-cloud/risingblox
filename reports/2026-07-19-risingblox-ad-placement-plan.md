# RisingBlox 广告位置与禁投区方案

本文件只记录未来布局。当前没有 Publisher ID、ad unit、Auto ads、ads.txt、广告脚本、广告请求或真实广告容器。

## 可考虑位置

### 桌面端

1. 长篇 indexable guide 的正文引言和首个完整章节之后，宽度随正文，预留约 `728×90` 或响应式等高容器。
2. 长篇 guide 中段，至少与相邻导航/操作入口隔开一个完整内容段落，预留约 `728×90`。
3. Game profile 的主要事实和玩法说明之后、相关阅读之前，使用独立标注容器。

高流量 `/guides/iron-soul-dungeon/` 只可在完成真实 CMP/Publisher ID 接入后采用以上预留，不得改变 URL、标题结构或首屏正文显示。

### 移动端

1. 首个完整内容章节之后，使用宽度 `100%`、固定最小高度约 `100px` 的响应式容器。
2. 长文中段章节之间，避免紧邻可点击 card、Play、code、navigation 或 privacy control。

## 明确禁止广告的位置

- Header、logo、主导航及其上下邻近区域。
- Footer、About/Contact/Privacy/Terms/Disclaimer/Sources 法律链接。
- Privacy Choices、CMP consent/do-not-consent/manage/reopen 控件周围。
- Copy Code、Play、Download、Redeem、Submit、Hint、Next/Previous 等操作附近。
- Active/expired code 列表中、空 code 状态中或任何看起来像 code/reward 的容器。
- 6 个 `noindex,follow` codes 页面。
- 404、错误页、空搜索/空结果页。
- 更新日志、last checked/last verified、source note 和证据说明附近。
- 任何弹窗、sticky control、移动端固定导航或会遮挡正文的位置。
- 广告不得伪装为游戏卡片、代码、奖励、下载、Play 或导航。

## CLS 与误点防护

- 广告加载前保留明确尺寸；桌面/移动用 CSS breakpoint 选择稳定 min-height。
- 不在 hydration 后把广告插入首屏已有控件之间。
- 不自动刷新，不用 overlay，不把正文按钮位移到广告下方。
- 广告容器与操作按钮保持显著视觉和空间分离，并标注为广告。
- CMP 和 Privacy Choices 容器为永久广告禁投区。
- 接入真实广告后在 1440×900、390×844 复测 CLS、横向溢出和误点距离。

## 当前代码标记

已使用 `data-ad-exclusion-zone` 标记：site header/navigation、site footer/legal、privacy choice control、empty code status、404 recovery actions。这些标记是布局治理信息，不是广告脚本或 Google 配置。
