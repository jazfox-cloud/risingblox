# RisingBlox Codes 页面决策表

日期：2026-07-19。所有游戏状态来自本轮 Roblox 官方 Games API 只读检查；GSC 数值来自现有 2026-07-16/18 审计材料，未把隐私过滤或缺失行当成 0。

| URL | Game Active | GSC Data | Verified No Active Codes | Unique Value | Decision |
|---|---|---|---|---|---|
| `/codes/iron-soul-dungeon/` | Yes；16,577 playing | 历史最近 7 天新增 1 impression，avg position 5；28d 精确行未单独保存 | 官方描述未列 code；无游戏内兑换证据 | 有 BloxDungeon source-log 分工，但当前不能满足 code intent | `noindex,follow`；200；退出 sitemap/主要入口/广告范围 |
| `/codes/grow-a-garden-2/` | Yes；517,250 playing | 最近/此前 7 天均 1 impression、0 click；avg position 8/4 | 官方描述未列 code；无游戏内兑换证据 | 仅 verified-only 方法，独立价值不足 | `noindex,follow`；200；退出 sitemap/主要入口/广告范围 |
| `/codes/mini-war/` | Yes；27,702 playing | 现有审计未显示 codes demand；不能写成真实 0 | 当前官方描述未列 active code；历史官方更新曾提 code system | Code system 历史存在，但没有可发布 code | `noindex,follow`；200；退出 sitemap/主要入口/广告范围 |
| `/codes/noob-incremental/` | Yes；9,034 playing | 现有审计称未显示 codes demand；不能写成真实 0 | 官方描述未列 code 或 redemption system | 模板状态说明，独立价值不足 | `noindex,follow`；200；退出 sitemap/主要入口/广告范围 |
| `/codes/anime-squadron/` | Yes；17,577 playing | 历史最近 7 天新增 1 impression，avg position 10 | 官方描述未列 code；redemption interface 未验证 | 对“redemption 未验证”有诚实说明，但无法满足 code intent | `noindex,follow`；200；退出 sitemap/主要入口/广告范围 |
| `/codes/animal-hospital-anomaly/` | Yes；358,271 playing | codes URL 的独立 28d row 未保存在现有审计；不能写成 0 | 官方描述未列 code；无 developer/in-game evidence | 独立 source snapshot，但不是有效 codes 答案 | `noindex,follow`；200；退出 sitemap/首页/Trending/广告范围 |

## 统一实施规则

- 页面不删除、不重定向，避免把用户送往无关首页。
- 保留自引用 canonical；robots 为 `noindex,follow`。
- 不出现在 sitemap、首页 code 卡片、Trending code 入口或通用 guide code 按钮中。
- 空 active/expired 状态标记为未来广告禁投区。
- 只有在 active 或 expired code 获得一手/可靠游戏内证据后，才重新评估索引；不能仅更新日期。
- 第三方攻略站不作为唯一事实来源。

## 一手来源限制

官方 experience 描述没有列出 code，只能支持“本次官方描述未发现 code”，不能证明游戏内、Discord 或历史公告绝对不存在 code。没有进一步一手来源的部分统一记录为 `PRIMARY_SOURCE_NOT_AVAILABLE`。
