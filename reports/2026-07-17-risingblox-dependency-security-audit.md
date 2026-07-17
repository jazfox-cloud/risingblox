# RisingBlox dependency security audit — 2026-07-17

## 1. 执行摘要

- 修复前：5 个 npm 漏洞节点（1 moderate、3 high、1 critical）。
- 修复前生产依赖：2 个漏洞节点（1 moderate、1 critical）。
- 修复后：完整依赖与生产依赖均为 0。
- 主要升级：`next` 14.2.23 → 15.5.20，`eslint-config-next` 14.2.23 → 15.5.20。
- 精确 override：仅将 Next.js 内置的 `postcss` 8.4.31 替换为兼容的 8.5.10，以修复 GHSA-qx2v-qp2m-jg93。
- React 与 React DOM 保持 18.3.1；目标 Next.js 的 peer range 支持 React 18.2 及以上。
- 这是一次必要的单 major 升级。当前公告中多项修复要求 Next.js ≥15.5.16，新增的 GHSA-26hh-7cqf-hhc6 又要求 ≥15.5.18；Next.js 14 已不存在可将当前 audit 降至 0 的同-major 版本。选择 15.5.20，而不是 npm 建议的 16.2.10，避免额外 major 跨越。
- 已处理 Next.js 15 的异步动态路由参数、静态 metadata route 和 ESLint 行为变化。未进行 UI、SEO、内容或架构改造。

## 2. 修复前环境

| 项目 | 值 |
| --- | --- |
| 仓库分支 | `main` |
| 基线提交 | `b589cd0583b57cc629b6dc6c471c20c9f7247d46` |
| 声明 Node 版本 | `.node-version`: 20 |
| 本地审计 Node | 26.4.0 |
| 本地 npm | 11.17.0 |
| Next.js | 14.2.23 |
| React / React DOM | 18.3.1 / 18.3.1 |
| Cloudflare adapter | 无；`output: "export"` 静态导出，由 Git push 部署 |
| lockfileVersion | 3 |
| workspaces / monorepo | 无 |
| overrides / resolutions | 修复前无 |

## 3. 漏洞明细

### npm 漏洞节点与依赖路径

| 漏洞节点 | 级别 | 直接/传递 | 生产/开发 | 引入路径 | 处理 |
| --- | --- | --- | --- | --- | --- |
| `next` | critical（聚合最高级别） | 直接 | 生产 | 项目 → next 14.2.23 | 升级至 15.5.20 |
| `postcss` | moderate | 传递 | 生产 | 项目 → next → postcss 8.4.31 | 精确 override 至 8.5.10 |
| `eslint-config-next` | high（传递聚合） | 直接 | 开发 | 项目 → eslint-config-next 14.2.23 | 升级至 15.5.20 |
| `@next/eslint-plugin-next` | high（传递聚合） | 传递 | 开发 | 项目 → eslint-config-next → plugin → glob | 随 eslint-config-next 升级 |
| `glob` | high | 传递 | 开发 | 项目 → eslint-config-next → plugin → glob 10.4.5 | 上游升级后移除受影响版本 |

`npm audit` 以受影响包节点计数，因此摘要是 5；`next` 节点内部同时关联多份公告。以下逐份记录修复前 JSON 中的公告。

### 公告逐项记录

风险判断缩写：

- **静态生产不可达**：站点使用 `output: "export"`，生产不运行 Next.js server、Middleware、Image Optimizer、WebSocket upgrade 或 RSC 请求反序列化端点。
- **开发/构建可达**：仅本地 dev server、CI 或构建工具链可能触达；输入均来自受控仓库，仍通过安全升级消除。
- **功能未使用**：代码扫描未发现 Middleware、Server Actions、`next/image`、CSP nonce 或不可信 `beforeInteractive` 数据路径。

| GHSA（npm JSON 未提供 CVE） | 级别 | 包与受影响范围 | RisingBlox 实际风险 | 修复 |
| --- | --- | --- | --- | --- |
| GHSA-3h52-269p-cp9r | low | next `>=13.0 <14.2.30` | dev server 信息暴露；生产静态不可达，开发可达 | next 15.5.20 |
| GHSA-g5qg-72qw-gw5v | moderate | next `<14.2.31` | Image Optimizer cache key；功能未使用且静态生产不可达 | next 15.5.20 |
| GHSA-4342-x723-ch2f | moderate | next `<14.2.32` | Middleware redirect SSRF；无 Middleware，静态生产不可达 | next 15.5.20 |
| GHSA-xv57-4mr9-wg8v | moderate | next `<14.2.31` | Image Optimization content injection；功能未使用 | next 15.5.20 |
| GHSA-qpjv-v59x-3qc4 | low | next `<14.2.24` | server cache race；静态生产不可达 | next 15.5.20 |
| GHSA-mwv6-3258-q52c | high | next `<14.2.34` | RSC DoS；App Router 构建使用 RSC，但生产无 Next server endpoint | next 15.5.20 |
| GHSA-5j59-xgg2-r9c4 | high | next `<14.2.35` | RSC DoS follow-up；静态生产不可达 | next 15.5.20 |
| GHSA-9g9p-9gw9-jx7f | moderate | next `<15.5.10` | self-hosted Image Optimizer DoS；不自托管 optimizer | next 15.5.20 |
| GHSA-h25m-26qc-wcjf | high | next `<15.0.8` | RSC HTTP deserialization DoS；静态生产不可达 | next 15.5.20 |
| GHSA-f82v-jwr5-mffw | critical | next `>=14 <14.2.25` | Middleware auth bypass；无 Middleware 或基于它的鉴权，生产不可达 | next 15.5.20 |
| GHSA-ggv3-7p47-pfv8 | moderate | next `<15.5.13` | rewrites request smuggling；无 server rewrites，静态生产不可达 | next 15.5.20 |
| GHSA-3x4c-7xq6-9pq8 | moderate | next `<15.5.14` | next/image disk cache exhaustion；功能未使用 | next 15.5.20 |
| GHSA-q4gf-8mx6-v5v3 | high | next `<15.5.15` | RSC DoS；静态生产不可达 | next 15.5.20 |
| GHSA-8h8q-6873-q5fj | high | next `<15.5.16` | RSC DoS；静态生产不可达 | next 15.5.20 |
| GHSA-3g8h-86w9-wvmq | low | next `<15.5.16` | Middleware redirect cache poisoning；无 Middleware | next 15.5.20 |
| GHSA-ffhc-5mcf-pf4q | moderate | next `<15.5.16` | App Router CSP nonce XSS；未配置 CSP nonce | next 15.5.20 |
| GHSA-vfv6-92ff-j949 | low | next `<15.5.16` | RSC cache-busting collision；静态生产不可达 | next 15.5.20 |
| GHSA-gx5p-jg67-6x7h | moderate | next `<15.5.16` | untrusted beforeInteractive XSS；未使用该路径 | next 15.5.20 |
| GHSA-h64f-5h5j-jqjh | moderate | next `<15.5.16` | Image Optimization DoS；功能未使用 | next 15.5.20 |
| GHSA-c4j6-fc7j-m34r | high | next `<15.5.16` | WebSocket upgrade SSRF；纯静态部署无 upgrade handler | next 15.5.20 |
| GHSA-wfc6-r584-vfw7 | moderate | next `>=14.2 <15.5.16` | RSC response cache poisoning；静态生产不可达 | next 15.5.20 |
| GHSA-36qx-fr4f-26g5 | high | next `<15.5.16` | Pages Router i18n Middleware bypass；项目使用 App Router且无 i18n/Middleware | next 15.5.20 |
| GHSA-5j98-mcp5-4vw2 | high | glob `>=10.2 <10.5` | glob CLI `--cmd` command injection；仅开发依赖且项目不调用该 CLI 参数 | eslint-config-next 15.5.20 移除受影响路径 |
| GHSA-qx2v-qp2m-jg93 | moderate | postcss `<8.5.10` | CSS stringify XSS；构建输入仅为受控仓库 CSS，生产不动态处理 CSS | Next 内 postcss override 8.5.10 |

候选 15.5.16 在解析 lockfile 后仍报告 GHSA-26hh-7cqf-hhc6（high，修复要求 ≥15.5.18），因此未采用，最终选择 15.5.20。

## 4. 版本变化

| Package | Before | After | Reason |
| --- | ---: | ---: | --- |
| next | 14.2.23 | 15.5.20 | 当前全部 Next 公告的最低维护安全线；避免 Next 16 |
| eslint-config-next | 14.2.23 | 15.5.20 | 与框架对齐并移除受影响 glob 路径 |
| next → postcss | 8.4.31（目标 Next 默认 pin） | 8.5.10 override | GHSA-qx2v-qp2m-jg93；同 major、API 兼容 |
| react | 18.3.1 | 18.3.1 | Next 15.5.20 明确支持，无安全升级必要 |
| react-dom | 18.3.1 | 18.3.1 | 与 React 保持一致 |

未使用 `npm audit fix --force`，未删除 lockfile，lockfileVersion 仍为 3。

## 5. 代码兼容修改

- `app/codes/[slug]/page.tsx`、`app/games/[slug]/page.tsx`、`app/guides/[slug]/page.tsx`：适配 Next 15 的 Promise-based dynamic route `params`，页面与 metadata 函数改为 async。
- `app/robots.ts`、`app/sitemap.ts`：为 `output: "export"` 明确声明 `dynamic = "force-static"`。
- `app/guides/animal-hospital-anomaly/page.tsx`：将 Next 15 ESLint 新识别出的内部 `<a>` 改为 `next/link`；URL 与页面内容不变。
- `next-env.d.ts`：由 Next 15 构建生成的路由类型引用和官方注释路径更新。

## 6. 测试结果

| 检查 | 结果 |
| --- | --- |
| `npm ci` | PASS；366 packages，audit 0 |
| `npm run lint` | PASS；0 warning / 0 error |
| `./node_modules/.bin/tsc --noEmit` | PASS |
| `npm test` / stats unit tests | PASS；11/11 |
| `npm run build` | PASS；35 个静态页面，sitemap/robots 与动态 slug 均生成 |
| 本地 HTTP 回归 | PASS；首页、2 个 game、codes、guide、sitemap、robots 为 200，未知路由为 404 |
| `npm audit` | PASS；0 |
| `npm audit --omit=dev` | PASS；0 |
| `npm ls` | PASS；无 invalid / extraneous / unmet；Next 内 postcss 显示为预期 overridden |
| `git diff --check` | PASS |
| GitHub Actions | PASS；run 29602093320，Node 20 项目环境完成 npm ci、API、stats、lint、test、build 与 guarded push |

GitHub 提示 `actions/checkout@v4` 和 `actions/setup-node@v4` 的 action runtime 从 Node 20 强制迁移到 Node 24；这不是项目 `.node-version` 的失败，也不是本次依赖漏洞，但应在独立维护任务中升级 action major。

## 7. 部署结果

- 安全提交：`ca372837eb05e1dcb2f89ba94c7e131871bebdf9`（`Fix dependency security vulnerabilities`）。
- Push：成功推送至 `origin/main`，触发既有 Cloudflare Git 部署。
- Production URL：<https://risingblox.com/>。
- Deployment ID / Preview URL：当前 Git 链路和公开响应未提供，未编造。
- 新构建验证：生产 webpack 指纹与本地 Next 15.5.20 导出一致。
- 生产验收：主页、两个 game 页面、一个 codes 页面、一个 guide 页面、`sitemap.xml`、`robots.txt` 均 HTTP 200；未知路由 HTTP 404。
- Cloudflare：响应头 `server: cloudflare`，验收请求具有有效 `cf-ray`。
- Metadata：主页 canonical 为 `https://risingblox.com/`，抽查页面 title/canonical 正常。
- 数据：抽查 Noob Incremental 页面显示非零玩家数、like rate、opportunity 与 2026-07-17 检查日期；未发现可见 `undefined`、`NaN` 或全零统计。
- Workflow run 29602093320 刷新真实 Roblox 数据后创建独立提交 `9101c4b`（`Refresh Roblox stats`），不与安全提交混合。

## 8. 未解决风险

当前 npm 完整依赖与生产依赖均为 0 个已知漏洞，无需接受 audit 风险。

非漏洞后续项：Next 15 已提示 `next lint` 将在 Next 16 移除，ESLint 8 也已停止上游支持；二者当前仍能严格通过，不应在本安全任务中扩大为 Next 16 / ESLint 迁移。建议另开维护任务处理 lint CLI 与 GitHub Actions v5 升级。
