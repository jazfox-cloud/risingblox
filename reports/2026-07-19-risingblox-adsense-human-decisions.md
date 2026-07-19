# RisingBlox AdSense 人工确认清单

当前本地状态：`READY_PENDING_HUMAN_EVIDENCE`。本清单区分已由运营负责人关闭的事实、仍待人工证据的门槛和非阻断监控。

## 1. 实际受众与儿童导向

当前状态：

`CHILD_DIRECTED_STATUS: GENERAL_AUDIENCE_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`

证据状态：`OPERATOR_CONFIRMED_NOT_SPECIFICALLY_DIRECTED_TO_UNDER_13`

### 运营负责人确认

- 确认日期：2026-07-19。
- 证据提供者：RisingBlox 实际运营负责人。
- 确认范围：当前产品定位、内容、功能和运营目标。
- RisingBlox 与 BloxDungeon 定位一致，是面向一般 Roblox 玩家提供英文游戏攻略、代码状态和核验信息的网站。
- 网站不专门面向 13 岁以下儿童。Roblox 受众和 RisingBlox 访客仍可能包含未成年人；本确认不表示网站没有未成年用户。
- 当前内容、设计和运营目标并非专门针对 13 岁以下儿童。
- 当前不提供账户注册、昵称、用户资料、排行榜、评论、聊天、UGC 或用户画像功能。
- 当前游戏代码页和攻略页不要求用户提交个人信息。
- 当前未发现用于行为分析或广告个性化的 Analytics、AdSense 或非必要追踪 Cookie。

### 证据性质与限制

这是实际运营负责人提供的产品定位与当前运营事实确认，不是律师出具的法律意见，也不是对所有司法辖区儿童隐私或广告义务的最终法律结论。该确认关闭本次审计中的“目标受众需要人工决定”事项，但不会改变未来真实功能、推广和数据处理所产生的义务。

### 必须重新评估的变化

出现以下任一变化时，必须重新进行儿童导向评估：

- 新增账户、登录、昵称或用户资料。
- 新增评论、聊天、UGC 或排行榜。
- 收集邮箱或其他个人信息。
- 使用针对儿童的文案、视觉、创意或推广渠道。
- 新增行为追踪或个性化广告。
- 实际内容或推广方向变为专门面向 13 岁以下儿童。

如重新评估表明网站专门面向 13 岁以下儿童，必须相应调整广告、个性化、Consent 和数据处理方式，不得为了广告收益维持不符合事实的一般受众分类。

## 2. Contact

- 页面显示：`hello@risingblox.com`，代码抽查正确。
- 页面形式：mailto 链接；无站内表单，不会把 message/PII 写入 URL。
- Cloudflare Email Routing：任务上下文称已启用；本轮未读取 Cloudflare 后台配置。
- Gmail 转发目标：不得记录，本报告未记录。
- `CONTACT_EMAIL_RECEIVE_TEST: PASS`
- `CONTACT_EMAIL_REPLY_TEST: NOT_TESTED`

运营负责人于 2026-07-19 确认：测试邮件已通过 Cloudflare Email Routing 成功转发到目标 Gmail。该确认关闭 usable-contact 接收门槛。目标 Gmail、邮件正文、发件人信息和其他个人信息均未记录。Reply test 保持 `NOT_TESTED`，归入非阻断运营监控，不推定为 PASS。

发布任务执行时采用以下证据流程：

1. 向网站公开地址 `hello@risingblox.com` 发送测试邮件。
2. 由运营负责人确认其目标 Gmail 是否正常收到。
3. 报告只记录 `CONTACT_EMAIL_RECEIVE_TEST: PASS|FAIL` 和 `CONTACT_EMAIL_REPLY_TEST: PASS|FAIL|NOT_TESTED`。
4. 不记录或公开目标 Gmail 地址、邮件正文、发件人个人信息或其他邮件内容。

## 3. Cloudflare

当前状态：`CLOUDFLARE_WAF_REQUIRES_HUMAN_VERIFICATION`

需要后台只读核对：

- Security Events 可用窗口中是否出现 Googlebot、Mediapartners-Google、AdsBot-Google 的 Block/Challenge。
- WAF custom rules、Managed rules、Bots/Bot Fight、Rate Limiting 和 Access 是否影响公开页面。
- 首页、重点 guide、Privacy、robots.txt、sitemap.xml、静态资源和 404 是否无认证墙。

本轮没有修改任何 Cloudflare 规则。User-Agent 模拟不等于 Google IP 验证。

发布任务中完成只读 WAF/crawler 审计后，只能按证据记录 `PASS`、`PASS_WITH_MONITORING` 或继续保持人工验证状态；不得为取得 PASS 而关闭安全功能。

## 4. AdSense 账户支持的技术步骤

以下不是当前站点侧 Blocker，但必须在真实账户资料可用后完成：

- 选择 Google CMP 或 Google 认证第三方 CMP。
- 对 EEA/UK/Switzerland 验证 Consent、Do not consent、Manage options 和 reopen。
- 确认拒绝前不加载相应非必要广告/分析 cookie。
- 取得真实 Publisher ID 后才配置站点验证、广告 loader/unit 和准确 ads.txt。
- 不得猜测 ID，不得使用 placeholder ads.txt。

## 5. 非阻断监控

- PageSpeed API/CrUX 待配额恢复后补测。
- 本地 Lighthouse LCP 4.0s；接入广告后重新检查 Lighthouse、CLS 和误点风险。
- 每次 code 状态变化需保存来源和实际核验结果，不能只更新日期。
- `CONTACT_EMAIL_REPLY_TEST: NOT_TESTED`；完成回复能力验证后更新，不阻断本次转换门槛。

## 完成门槛

目标受众和 Contact receive 人工事项均已于 2026-07-19 关闭，不再列为待完成项。只有 Cloudflare 后台事实、整改部署和生产复验按要求完成，且没有新的内容/版权/儿童/Consent/crawler Blocker，才可评估：

`READY_FOR_ADSENSE_TECHNICAL_INTEGRATION`

该状态仍不等于账户已创建、CMP 已配置、Publisher ID 已知、ads.txt/广告脚本已部署、审核已提交或 Google 必然批准。
