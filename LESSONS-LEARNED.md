# 项目经验总结（HydroBase / groutedmattress.com）

给后续新建的 Next.js + Hostinger 项目参考，避免重复踩坑。

---

## 1. Hostinger 部署：自定义 Node 服务器

**症状**：站点间歇性 503/504，Runtime Logs 面板"No logs found"，但应用状态显示 Running。

**根因（两个叠加问题）**：

1. **Hostinger 面板的 "Framework preset" 设错**。如果设成 `Next.js`，Hostinger 会直接跑 `next start`，**完全绕过自定义 `server.js`**。必须把 Framework preset 设成 `Other`，手动填：
   - Build command: `npm run build`
   - Output directory: `.next`
   - Entry file: `server.js`

2. **`server.js` 绑定地址错了**。不要猜测/硬编码任何 LiteSpeed unix socket 路径（如 `/usr/local/lsws/extapp-sock/xxx.sock`）——哪怕 `next start` 自己的启动横幅里显示了这个路径，那也是 Hostinger 内部代理的环境变量误导，不是真实绑定要求。正确做法（已和 Hostinger 官方客服确认）：

   ```js
   const { createServer } = require('http')
   const { parse } = require('url')
   const next = require('next')

   const dev = process.env.NODE_ENV !== 'production'
   const port = parseInt(process.env.PORT || '3000', 10)
   const app = next({ dev })
   const handle = app.getRequestHandler()

   app.prepare().then(() => {
     const server = createServer(async (req, res) => {
       try {
         await handle(req, res, parse(req.url, true))
       } catch (err) {
         console.error('Error handling', req.url, err)
         res.statusCode = 500
         res.end('internal server error')
       }
     })
     server.once('error', (err) => { console.error(err); process.exit(1) })
     server.listen(port, '0.0.0.0', () => console.log(`> Ready on http://0.0.0.0:${port}`))
   }).catch((err) => {
     console.error('Failed to start server', err)   // ← 关键：不写这行，启动失败时 Runtime Logs 是空的
     process.exit(1)
   })
   ```

**经验**：
- 一定要给 `app.prepare().then(...)` 加 `.catch()`。没有它，启动期任何错误都会变成未捕获的 Promise rejection，日志面板完全空白，调试无从下手。
- 新项目起步就按这个 `server.js` 模板写，Framework preset 直接选 `Other`，不要等出问题再排查。
- SSH 在 Hostinger 的托管 Node 应用层级上**不可用**（shell 是 `/sbin/nologin`），遇到问题不要浪费时间申请 SSH，直接看 Runtime Logs + 改代码本地复现。

---

## 2. 暗色模式（dark mode）配色：必须从第一个页面就统一规范

**症状**：切换到暗色模式后，部分页面标题/正文完全看不见（白字配白底）。

**根因**：`globals.css` 里 `.dark` class 把 `--foreground` 变量翻转成接近白色，但很多 section 写死了 `bg-white` / `text-gray-700` 等没有 `dark:` 配对类，背景没跟着变暗，文字却变白——变成白底白字。

**经验**：
- **新项目从第一个页面开始，就给每一个 `bg-white` / `bg-gray-50` / `text-gray-700/800/900` / `border-gray-100/200` 配上对应的 `dark:` 类**，不要等做完所有页面后再统一补。规范（本项目用的映射，可直接复用）：

  | 浅色类 | 深色配对 |
  |---|---|
  | `bg-white` | `dark:bg-gray-900` |
  | `bg-gray-50` / `bg-gray-100` | `dark:bg-gray-800` |
  | `bg-blue-50` / `bg-amber-50`（大块 section 背景） | `dark:bg-blue-950/30` / `dark:bg-amber-900/20` |
  | `text-gray-900` | `dark:text-white` |
  | `text-gray-800` | `dark:text-gray-200` |
  | `text-gray-700` | `dark:text-gray-300` |
  | `text-gray-600` | `dark:text-gray-400` |
  | `border-gray-100/200` | `dark:border-gray-700` |

- 小型"自带颜色"的徽章（如 `bg-amber-100 text-amber-700` 的 pill 标签）**可以不加** dark 变体——背景和文字是配套的，本身就有对比度，不受全局变量影响。只有**大面积的 section/卡片背景 + 不带颜色的标题/正文**才会出问题。
- 做完一批页面后，用 `grep` 全局扫一遍有没有漏网的 `bg-white`/`text-gray-XXX` 没配 `dark:`，比一个个页面肉眼检查快得多。
- 更省事的根治方案（建议新项目直接采用）：**多用语义化 token**（`bg-background`、`text-foreground`、`text-muted-foreground`、`bg-card`）代替写死的 `bg-white`/`text-gray-700`。这些 token 在 `globals.css` 里已经定义了亮/暗两套值，用了就自动适配，不需要每次手动加 `dark:`。本项目因为历史代码全是硬编码颜色，只能后补 `dark:`，新项目应该从一开始就用 token。

---

## 3. 容器宽度（max-width）一致性：分两类问题，不要混为一谈

**问题 A：Header 和正文容器宽度对不上**
`navbar.tsx` 曾经写死 `max-w-[1920px]`，而 Tailwind 全局 `container` 配置（`tailwind.config.ts`）封顶是 `1400px`（`screens: { "2xl": "1400px" }`）。导致大屏幕下 Header 比正文宽，右侧对不齐。
**经验**：Header 的容器宽度类应该直接复用全局 `container` 默认行为，不要单独覆写 `max-w-[...]`，除非是有意要让 Header 区别于正文宽度（这种情况要明确写文档说明为什么）。

**问题 B：同一个页面里，不同内容区块本身宽度就不统一**
这是正常的设计模式，不是 bug：居中文字用 `max-w-2xl`，统计数字网格用 `max-w-5xl`，双栏图文用 `max-w-6xl`，Hero 背景常常是满宽。新项目要做这件事时，提前想清楚：
- 哪个宽度是"全站基准线"（通常是 Header/Footer 的宽度）
- 各类内容区块允许在基准线内部自行收窄，但不需要互相对齐
- 不要每次有人反馈"宽度不一致"就去改，先确认是"该对齐却没对齐"（如 Header vs 正文边界）还是"设计上本来就不需要对齐"（如同页面不同区块）。

**经验补充**：Hero 区块如果用了"外层 div 包一层 `max-w-2xl`，标题/正文在里面"的写法，要确认这和站内其他 Hero（如 `max-w-5xl` 容器 + 标题单独 `max-w-2xl` + 正文 `max-w-xl` 作为同级元素）结构一致。结构不一致即使视觉效果暂时相似，以后维护/统一改动会很麻烦——建立一个 Hero 区块的标准模板，新页面直接复制结构，不要自由发挥。

---

## 3.5 全局 CSS 规则会静默覆盖 Tailwind 工具类——改了样式没生效先查这个

**症状**：给一张图片加了 `className="object-contain"`，本地构建、预览截图看起来改了，但实际页面（包括重新部署后的生产环境）完全没变化，图片还是被裁切。

**根因**：`globals.css` 里有一条历史遗留规则：

```css
.relative > img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

这条规则的目的是让"大多数"用 `next/image fill` 模式（套在 `relative` 容器里）的背景图自动铺满。但它是**复合选择器**（`.relative > img`，优先级 0-1-1），比 Tailwind 单类工具类 `.object-contain`（优先级 0-1-0）**优先级更高**，会无声地覆盖掉任何想要 `object-contain`/其他 `object-fit` 的个别图片，且浏览器不会报错或警告。

**经验**：
- 改了 Tailwind 工具类（尤其是 `object-fit`、`text-align`、`display` 这种容易被全局规则覆盖的属性）后，如果视觉没变化，**第一反应不是怀疑代码没保存/没部署，而是打开浏览器 DevTools 看该元素的 Computed 样式，确认最终生效的值和来源规则**。本项目里我一开始还以为是"没重新部署"，排查了一圈才发现是这条全局规则的锅。
- 新项目里**尽量不要写 `.relative > img` 这种宽泛的"标签+父类"全局选择器**去给 `next/image` 统一加默认样式。如果确实需要给"大多数" fill 模式图片一个默认行为，更安全的做法是：用一个具名的工具类（比如 `.fill-image-cover`）显式加在需要这个行为的容器上，而不是隐式匹配所有 `.relative > img`，这样"例外情况"不需要靠优先级战争去覆盖，直接不加那个类就行。
- 如果就是不想动全局规则（怕影响其他地方），个别例外可以用 React 的 `style={{ objectFit: "contain" }}` 内联样式覆盖——内联样式优先级永远高于任何 class 选择器，不用纠结谁的 CSS 特异性更高。

---

## 4. 图片格式迁移（WebP）要全文件类型扫描，不只 .tsx/.mdx

**症状**：批量把图片转成 WebP 并更新引用路径后，过了一个版本才发现博客页图片全部 404。

**根因**：批量替换脚本只扫了 `.tsx` / `.mdx` 文件，漏了 `lib/blog.ts` 这种纯 TypeScript 数据文件（博客内容里内联了 `<img src="...">` 字符串）。

**经验**：图片路径批量替换时，搜索范围要覆盖 **所有可能内嵌图片路径字符串的文件类型**：`.tsx` `.ts` `.mdx` `.json`（如果有 CMS/数据文件）。替换完用一个验证脚本（遍历所有 `/images/...` 引用，检查对应文件在 `public/` 下是否真实存在）做收尾检查，而不是凭感觉抽查几个页面。

---

## 5. z-index 层级：浮动按钮 vs 移动端菜单

**症状**：WhatsApp 悬浮按钮在移动端菜单展开时挡住了"Get a Quote"按钮的点击区域。

**根因**：WhatsApp 按钮 `z-50`，和移动端菜单面板同一层级，谁在 DOM 后面谁盖住前面的。

**经验**：新项目里所有"全局悬浮元素"（聊天按钮、返回顶部按钮、Cookie 提示条等）要在项目初期就定一个 z-index 分层表，例如：

```
z-10  装饰性背景遮罩
z-20  常规内容
z-30  全局悬浮按钮（WhatsApp / 返回顶部）
z-40  Header（非展开状态）
z-50  移动端菜单 / 弹窗 / Modal（展开时最高）
```

不要每加一个新浮动元素就随手写 `z-50`，必须按照这个分层表来，避免菜单/弹窗永远要跟所有浮动按钮逐一比较层级。

---

## 6. 本地开发流程：不要让 dev server 和 build 同时跑

**症状**：跑 `npm run build` 后报 `PageNotFoundError: Cannot find module for page: /_document`，但代码没问题。

**根因**：另一个终端/会话里还有一个 `next dev` 进程在跑，同一个项目目录、同一个 `.next` 输出目录被 build 进程重写，开发服务器读到一半被改的 `.next` 就会路由错乱、甚至所有页面 404。

**经验**：
- 跑 `npm run build` 之前，先检查端口（`netstat -ano | findstr ":3000"`），确认没有遗留的 dev server 进程在占用同一个项目目录。
- 每次用完 preview/dev server 一定要显式停止（不要假设会话结束就自动清理——本项目里多次出现遗留进程跨会话残留，导致下一次开发时莫名其妙 404 或 build 失败）。
- 如果遇到诡异的 404（页面文件明明存在）或 build 报 `_document` 模块找不到，第一反应是检查是否有进程冲突，而不是怀疑代码本身。

---

## 6.5 短时间内连续多次部署后页面崩溃 → 先查 CDN 缓存，不要怀疑代码

**症状**：连续推送几次改动、Hostinger 部署都显示 `Completed` 之后，打开页面**先正常闪现一下，然后整页变成** `Application error: a client-side exception has occurred`。浏览器 Console 报 `ChunkLoadError: Loading chunk XXX failed`，并伴随 `Refused to execute script ... because its MIME type ('text/html') is not executable`。无痕模式、清浏览器缓存都无法解决。

**根因**：Hostinger 面板 **Performance → CDN** 里的 CDN 是默认开启的（Active）。短时间内连续多次部署时，源站（Node App）已经生成了新的 JS chunk 文件（文件名带新的 hash），但 CDN 边缘节点还缓存着上一次部署的 HTML/资源映射。用户拿到的是"CDN 缓存的旧 HTML + 引用了一个 CDN 上已经不存在的 chunk 文件名"，请求这个 chunk 时 CDN 返回 404 兜底页（HTML），浏览器发现 MIME type 不对拒绝执行，React hydration 挂掉，抛出 `ChunkLoadError` → 触发全局错误边界，显示 `Application error`。

**排查路径（比查代码快得多）**：
1. 先确认 Hostinger **Deployments** 页面最新一次部署状态是 `Completed`（如果不是，先修部署本身）。
2. 部署没问题的话，直接去 **Performance → CDN → Flush cache**，点一下清空 CDN 缓存。
3. 刷新页面验证。这个操作几乎总能立刻解决"部署成功但页面仍报错"的情况。

**经验**：
- 只要项目开了 Hostinger 自带 CDN，**任何一次部署后如果页面报 `Application error` 或 `ChunkLoadError`，第一反应是 Flush CDN 缓存，而不是回去改代码或本地反复重新构建排查**——本项目里本地 `next build` + `NODE_ENV=production node server.js` 复现测试完全正常，说明代码没问题，纯粹是 CDN 没跟上部署节奏。
- 短时间内密集连续推送（比如一小时内 5-6 次）本身没问题，但每次都可能让 CDN 缓存和源站更进一步不同步，建议大批改动做完后**攒一次性推送**，减少 CDN 缓存错位的窗口。
- 浏览器无痕模式/强制刷新只能排除**浏览器本地缓存**，排除不了 **CDN 边缘缓存**——遇到诡异的、换设备/换网络也复现的报错，要往 CDN 这层想，别只测浏览器端。

---

## 7. 沟通流程上的经验（适用于跟我协作）

- 涉及"视觉对不对齐""宽度是否一致"这类问题，截图配合具体的标注（画线/箭头）比纯文字描述快得多、争议也少。
- 每次让我提出理解 → 用户确认 → 再动手，能避免改错方向。这个项目里多次因为先确认理解再改，省掉了返工。
- 大范围改动（比如这次 19 个文件的暗色模式修复）先问清楚"全量修还是先做样板"，避免一次性改太多又不符合预期。
- 明确说"先修改不推送"，可以让我放心做实验性改动（比如试不同的 `max-w` 数值）而不用担心污染生产环境，调好了再统一推送。

---

## 给新项目的建议清单（Checklist）

新建项目时按这个顺序处理，可以避免本项目走过的弯路：

- [ ] `server.js` 从第一天就用上面第 1 节的标准模板（绑定 `process.env.PORT` + `0.0.0.0` + `.catch()`）
- [ ] Hostinger 面板 Framework preset 直接设 `Other`，手动填 Build/Output/Entry
- [ ] 设计系统阶段就定义好 `bg-background`/`text-foreground`/`text-muted-foreground` 等语义化 token，组件统一用 token 不要写死颜色
- [ ] 写一个 Hero 区块标准模板（容器 max-width、标题 max-width、正文 max-width 的组合），所有页面复用同一结构
- [ ] 定好全局 z-index 分层表，写进项目说明文档
- [ ] 图片资源用 WebP 时，路径引用的搜索/替换范围覆盖所有文件类型（.ts/.tsx/.mdx/.json）
- [ ] 本地开发养成习惯：build 前检查端口占用，用完 dev server 显式关闭
