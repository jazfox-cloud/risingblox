# RisingBlox AdSense 发布与证据状态报告

- 报告日期：2026-07-19（America/Los_Angeles）
- 报告阶段：`PRE_RELEASE_EVIDENCE_RECORD`
- 初始审计状态：`READY_AFTER_MINOR_FIXES`
- 当前本地生命周期状态：`READY_PENDING_HUMAN_EVIDENCE`
- 生产部署：未执行
- 生产验收：未执行
- `CONTACT_EMAIL_RECEIVE_TEST: PASS`
- `CONTACT_EMAIL_REPLY_TEST: NOT_TESTED`
- AdSense 提交：否

本报告当前只记录已完成的人工受众证据。文件名中的 release 不表示整改已发布；不得把本报告作为生产验收通过的证明。

## 受众与儿童导向确认

当前状态：

`CHILD_DIRECTED_STATUS: GENERAL_AUDIENCE_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`

证据状态：`OPERATOR_CONFIRMED_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`

| 字段 | 记录 |
|---|---|
| 确认日期 | 2026-07-19 |
| 证据提供者 | RisingBlox 实际运营负责人 |
| 证据类型 | 产品定位与当前运营事实的 operator statement |
| 确认范围 | 当前内容、功能、设计、数据处理和运营目标 |
| 状态变化 | `CHILD_DIRECTED_STATUS_REQUIRES_HUMAN_DECISION` → `GENERAL_AUDIENCE_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13` |
| 关闭类型 | 关闭受众人工决策事项；不是生产、账户或技术接入完成 |

运营负责人确认：

- RisingBlox 与 BloxDungeon 定位一致，面向一般 Roblox 玩家提供英文游戏攻略、代码状态和核验信息。
- 网站不专门面向 13 岁以下儿童；内容、设计和运营目标也不是专门针对该年龄段。
- Roblox 受众和 RisingBlox 访客可能包含未成年人。本记录不声称网站没有未成年用户。
- 当前没有账户注册、登录、昵称、用户资料、排行榜、评论、聊天、UGC 或用户画像功能。
- 当前攻略页和代码页不要求用户提交个人信息。
- 当前未发现用于行为分析或广告个性化的 Analytics、AdSense 或非必要追踪 Cookie。

## 证据限制

本确认来自实际运营负责人，属于当前产品和运营事实证据，不是律师出具的法律意见，不是监管机构认定，也不自动解决未来儿童隐私、广告个性化或 Consent 义务。

以下变化会使本确认需要重新评估：

- 账户、登录、昵称或用户资料。
- 评论、聊天、UGC 或排行榜。
- 邮箱或其他个人信息收集。
- 针对儿童的文案、视觉、创意或推广。
- 行为追踪或个性化广告。
- 实际内容或推广方向变为专门面向 13 岁以下儿童。

若实际方向发生上述变化，必须重新进行儿童导向判断，并按真实结论调整广告和数据处理方式。

## 生命周期状态门槛

受众人工事项已经关闭，但当前不能升级为 `READY_FOR_ADSENSE_TECHNICAL_INTEGRATION`。仍需全部满足：

1. 本地整改版本完成生产部署并通过生产验收。
2. 代码和内容 Blocker 继续保持 0。
3. `CONTACT_EMAIL_RECEIVE_TEST: PASS`。
4. Cloudflare WAF/crawler 为 `PASS` 或 `PASS_WITH_MONITORING`。
5. 没有新增版权、儿童导向、Consent、crawler、内容、技术或其他人工 Blocker。

Contact reply test 可在用户明确接受时作为单独监控项，但本报告未将其推定为 PASS。

### Contact 接收证据

- 测试日期：2026-07-19。
- 证据提供者：实际运营负责人。
- 结果：`CONTACT_EMAIL_RECEIVE_TEST: PASS`。
- 运营负责人确认测试邮件已由 Cloudflare Email Routing 成功转发至目标 Gmail。
- `CONTACT_EMAIL_REPLY_TEST: NOT_TESTED`，属于非阻断监控。
- 证据限制：报告未记录目标 Gmail 地址、邮件正文、发件人个人信息或其他邮件内容。

## 发布任务同步执行协议

### Contact 邮箱

发布验收时：

1. 向网站公开的 `hello@risingblox.com` 发送一封测试邮件。
2. 由运营负责人确认目标 Gmail 是否收到。
3. 只在本报告记录以下机器可读状态之一：
   - `CONTACT_EMAIL_RECEIVE_TEST: PASS|FAIL`
   - `CONTACT_EMAIL_REPLY_TEST: PASS|FAIL|NOT_TESTED`
4. 不记录或公开目标 Gmail 地址、邮件正文、发件人个人信息、转发路径或其他邮件内容。

收信成功不能推定回复成功；两项必须独立记录。

### Cloudflare WAF/crawler

发布验收时同步完成只读审计，至少覆盖 Security Events 可用窗口、WAF custom/managed rules、Bots/Bot Fight、Rate Limiting、Access，以及公开页面、robots.txt、sitemap、法律页、404 和静态资源的 crawler 可访问性。代表性 Google crawler User-Agent 请求不得出现 challenge、403、429、5xx、登录墙、cloaking 或异常 cookie。

结果只能按证据记录为：

- `CLOUDFLARE_WAF_CRAWLER_STATUS: PASS`
- `CLOUDFLARE_WAF_CRAWLER_STATUS: PASS_WITH_MONITORING`
- 或保留未通过/未完成状态

User-Agent 模拟不能证明请求来自 Google IP；可用 Security Events 窗口不足时应使用 `PASS_WITH_MONITORING` 并保留接入后监控，不得关闭安全规则来换取 PASS。

### 状态转换

只有生产验收通过、代码和内容 Blocker 为 0、`CONTACT_EMAIL_RECEIVE_TEST: PASS`、Cloudflare WAF/crawler 为 `PASS` 或 `PASS_WITH_MONITORING`，且没有新增其他人工或政策 Blocker 时，才将网站侧状态更新为：

`READY_FOR_ADSENSE_TECHNICAL_INTEGRATION`

儿童导向判断已经完成，不得在发布任务中重新列为待完成事项；只有实际功能、受众、推广或数据处理发生相关变化时才重新打开评估。

## 当前未完成项分类

### site_side_blocker / evidence gate

- 生产部署与生产验收：未完成。
- Contact email receive test：`PASS`；已完成。
- Cloudflare WAF/crawler 后台证据：未完成。

### technical_integration_step

- 真实 Google 或 Google 认证第三方 CMP。
- 真实 Publisher ID。
- 账户提供的准确 ads.txt。
- 真实广告 loader/unit 和接入后 Consent/cookie/CSP/crawler 验证。

### non_blocking_monitoring

- 功能、推广、受众或数据处理变化时重新评估 child-directed 状态。
- 接入广告后重新检查 Lighthouse、CLS 和误点风险。

## 操作声明

- 本次报告更新未修改网站代码。
- 未修改 Cloudflare。
- 未 commit、push 或部署。
- 未登录或操作 AdSense 账户。
- 未猜测 Publisher ID。
- 未创建 ads.txt。
- 未加载广告脚本或真实广告。
- 未提交 AdSense 审核。
