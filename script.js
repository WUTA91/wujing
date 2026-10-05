/* ============================================================
   WUJING ·無境 团队官网脚本 script.js
   ------------------------------------------------------------
   ★ 数据配置区（日常维护只需要改这一块）★
     1. MEMBERS        成员列表：新增 / 修改成员
     2. PROJECTS       项目作品：新增 / 修改项目与外部链接
     3. ANNOUNCEMENTS  公告：修改初始公告
   下方为页面逻辑代码，一般无需改动。
   ============================================================ */

/* ===== 成员列表：每条花括号 {} 是一位成员 =====
   新增成员：复制一条 {}，在末尾加上英文逗号后粘贴到数组里即可。
   name    姓名（必填）
   role    职务 / 负责方向（必填）
   bio     一句话介绍（选填，留空 "" 则不显示）
   detail  详细简介（选填，弹窗里展示；留空 "" 显示"整理中"占位，可后补）
   bg      弹窗背景图（选填，仿 Hero 壁纸铺在弹窗上半部分+上下渐隐；
           把图放进 assets/ 文件夹，填 "assets/xxx.jpg"；留空 "" 则纯色弹窗）
   avatar  头像图片（选填，留空 "" 自动用姓名首字生成圆形占位；
           要放图片：把图片放进 assets/ 文件夹，填 "assets/xxx.jpg"） */
const MEMBERS = [
  { name: "无他", role: "创始人，产品总监，视觉设计", bio: "高中生一名，国家级帆船运动员，無境团队创始人之一，坚持卓越的设计理念", avatar: "assets/无他.jpg",bg:"assets/wutawall.jpg" },
  { name: "风起多意", role: "创始人，产品策划，应用总监", bio: "臭指挥AI的中学生，对数码、网络有兴趣和较浅的研究，“無境”命名创意灵感提供者", avatar: "assets/fengqiduoyi.jpg" },
  { name: "。", role: "合作伙伴", bio: "一个大量依赖Ai的啥b。以下由管理添加：项目页中的工具箱开发者，邮箱kskbl114514@hotmail.com", avatar: "assets/。.jpg" ,bg:"assets/liuwall.png"},
  { name: "啥也不想干", role: "合作伙伴", bio: "一个酷爱研究交通、地图的高中生，擅长QGIS地图制作，精通Adobe Ai、Ps及WPS软件", avatar: "assets/shayebuxianggan.jpg",bg:"assets/shayebuxiangganwall.jpg" },
  { name: "Yarent80", role: "视频宣发", bio: "负责在bilibili发布视频", avatar: "assets/80.jpg" },
  { name: "青山依旧", role: "合作伙伴，视频宣发", bio: "一个初中生，负责在抖音上发视频", avatar: "assets/青山依旧.jpg", bg:"assets/qingshanwall.jpg"},
  { name: "Damon", role: "合作伙伴", bio: "优秀的合作伙伴",avatar: "assets/damon.jpg" }
];

/* ===== 项目作品：每条 {} 是一个项目卡片 =====
   新增项目：复制一条 {}，在末尾加上英文逗号后粘贴到数组里即可。
   title     项目名称（必填）
   category  项目类型标签（选填，如「视频宣发」「网页制作」）
   desc      一句话描述（必填）
   image     封面图地址（选填，单图；留空 "" 则显示灰色占位；建议 16:9 或 3:2 的横图）
   images    弹窗多图（选填，图片数组，弹窗里左右滑动浏览；如 ["assets/a.jpg","assets/b.jpg"]。
             不填则用上面的 image 单图；两个都不填显示占位）
   detail    项目详细介绍（选填，弹窗里展示；留空 "" 显示"整理中"占位，可后补）
   link      项目链接（必填，弹窗内「立即体验」按钮跳转此链接） */
const PROJECTS = [
  {
    title: "Airplane 专注",
    category: "我们的网页",
    desc: "由無境团队开发的飞行类专注网页，欢迎各位体验",
    image: "assets/airplan.jpg",
    link: "https://wj-airplane.pages.dev"
  },
  {
    title: "L- Mini Tools工具箱",
    category: "我们的网页",
    desc: "由团队成员“。”开发的全场景工具箱",
    image: "assets/dsfgjx.png",
    detail:"L-Mini Tools 导航页，集合工具与成员展示，支持深色模式、移动端、一键复制，纯静态开箱即用。该工具箱不完全受我团队控制，我团队将持续监测页面内容，以保证您的合法权益",
    link: "https://ltool.pages.dev/"
  }
];

/* ===== 公告：每条 {} 是一条公告 =====
   新增：复制一条 {}，加逗号粘贴后修改内容；
   删除：直接删掉对应的一行（或{}块）。
   date  日期（显示在公告左侧）
   text  公告内容 */
const ANNOUNCEMENTS = [
  { date: "2026-09-17", text: "WUJING ·無境 团队官网正式上线，欢迎各界伙伴上线体验" },
  {date:"2026-09-25",text:"万家灯火，九州同庆！WUJING無境 祝各位中秋、国庆佳节快乐！"},
];

/* ===== 成长历程：每条 {} 是一个时间线节点 =====
   新增：复制一条 {}，加逗号粘贴后修改内容；
   时间从早到晚排列（页面会自动从上到下展示）。
   date   日期（小字灰色，必填，如 "2025.12" 或 "2026.09.17"）
   title  节点标题（必填，如「团队成立」）
   text   这段历程的描述（选填，留空 "" 则不显示描述） */
const TIMELINE = [
  { date: "2025.12", title: "星光出现", text: "無境团队创始人之一-无他开发了他的首款网页《时钟》，但现已停止支持。" },
  { date: "2026.07", title: "流星划过", text: "无他，创建了团队的雏形-飞行计划社团。" },
  { date: "2026.07", title: "首个作品", text: "Airplan 专注网页上线，团队第一次把想法做成了可以被别人使用的东西。" },
  { date: "2026.08", title: "团队创立", text: "无他与风起多意萌生了做一支全维度创作团队的念头，「無境」这个名字也在这时由风起多意提了出来。"},
  { date: "2026.09", title: "官网上线", text: "WUJING ·無境 团队官网正式发布，第一次有了属于我们自己的门面。"},
  { date: "未来", title: "下一站", text: "更多项目正在路上。" }
];

/* ============================================================
   以下为页面逻辑代码（一般无需修改）
   ============================================================ */

/* 转义 HTML 特殊字符，防止输入内容破坏页面结构 */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

/* ---------- 深色 / 浅色模式一键切换 ---------- */
const rootEl = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  const isDark = rootEl.getAttribute("data-theme") === "dark";
  rootEl.setAttribute("data-theme", isDark ? "light" : "dark");
  localStorage.setItem("wujing-theme", isDark ? "light" : "dark");
});

/* ---------- 移动端汉堡菜单折叠 ---------- */
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

/* ---------- 顶部导航液态玻璃：滚动后收成半透明胶囊 ----------
   页面在最顶部（scrollY < 10）时 header 完全透明、直接浮在 Hero 壁纸上；
   向下滚动后加 .scrolled，由 CSS 过渡成圆角胶囊（见 style.css 04 节）。
   只切一个 class、不写内联样式，配合 CSS 的 transition: all 0.3s ease 平滑无闪。 */
const siteHeader = document.querySelector(".site-header");

let headerScrolled = false;
function updateHeaderState() {
  if (!siteHeader) return;
  const y = window.scrollY;
  /* 迟滞区间：>30 才进胶囊态，<5 才退出，避免边界来回抖 */
  if (!headerScrolled && y > 30) {
    headerScrolled = true;
    siteHeader.classList.add("scrolled");
  } else if (headerScrolled && y < 5) {
    headerScrolled = false;
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", updateHeaderState);
updateHeaderState(); /* 刷新时可能停在页面中间，先同步一次状态 */

hamburger.addEventListener("click", function () {
  const open = mainNav.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open ? "true" : "false");
});

/* 点击导航链接后自动收起菜单 */
mainNav.querySelectorAll(".nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 渲染成长历程时间线 ---------- */
const timelineList = document.getElementById("timelineList");

timelineList.innerHTML = TIMELINE.slice().reverse().map(function (t) {
  const text = t.text ? '<p class="timeline-text">' + escapeHTML(t.text) + "</p>" : "";
  return (
    '<div class="timeline-item">' +
    '<span class="timeline-dot" aria-hidden="true"></span>' +
    '<div class="timeline-body">' +
    '<span class="timeline-date">' + escapeHTML(t.date) + "</span>" +
    '<h3 class="timeline-title">' + escapeHTML(t.title) + "</h3>" +
    text +
    "</div>" +
    "</div>"
  );
}).join("");

/* ---------- 时间线横向滚动：左右按钮 ---------- */
const tlPrev = document.getElementById("timelinePrev");
const tlNext = document.getElementById("timelineNext");

function updateTimelineState() {
  const max = timelineList.scrollWidth - timelineList.clientWidth;
  tlPrev.disabled = timelineList.scrollLeft <= 4;
  tlNext.disabled = timelineList.scrollLeft >= max - 4;
}

tlPrev.addEventListener("click", function () {
  timelineList.scrollBy({ left: -timelineList.clientWidth * 0.7, behavior: "smooth" });
});

tlNext.addEventListener("click", function () {
  timelineList.scrollBy({ left: timelineList.clientWidth * 0.7, behavior: "smooth" });
});

timelineList.addEventListener("scroll", updateTimelineState, { passive: true });
window.addEventListener("resize", updateTimelineState);
updateTimelineState();

/* ---------- 时间线鼠标拖拽滑动（和项目区一致，带惯性） ---------- */
let tlDown = false;
let tlStartX = 0;
let tlStartLeft = 0;
let tlLastX = 0;
let tlLastTime = 0;
let tlVelocity = 0;
let tlDragged = false;
let tlRaf = null;

timelineList.addEventListener("pointerdown", function (e) {
  if (e.pointerType !== "mouse") return;
  tlDown = true;
  tlDragged = false;
  tlStartX = e.clientX;
  tlLastX = e.clientX;
  tlLastTime = performance.now();
  tlStartLeft = timelineList.scrollLeft;
  tlVelocity = 0;
  timelineList.classList.add("dragging");
  if (tlRaf) { cancelAnimationFrame(tlRaf); tlRaf = null; }
  timelineList.setPointerCapture(e.pointerId);
});

timelineList.addEventListener("pointermove", function (e) {
  if (!tlDown) return;
  const dx = e.clientX - tlStartX;
  if (Math.abs(dx) > 5) tlDragged = true;
  timelineList.scrollLeft = tlStartLeft - dx;
  /* 记录速度用于松手惯性 */
  const now = performance.now();
  const dt = now - tlLastTime;
  if (dt > 0) {
    tlVelocity = (e.clientX - tlLastX) / dt;
  }
  tlLastX = e.clientX;
  tlLastTime = now;
});

timelineList.addEventListener("pointerup", function (e) {
  if (!tlDown) return;
  tlDown = false;
  timelineList.classList.remove("dragging");
  timelineList.releasePointerCapture(e.pointerId);
  /* 松手惯性：根据最后速度继续滑一点，再自然减速 */
  let momentum = tlVelocity * 15;
  if (Math.abs(momentum) > 1) {
    function step() {
      momentum *= 0.94;
      timelineList.scrollLeft -= momentum;
      if (Math.abs(momentum) > 0.3) tlRaf = requestAnimationFrame(step);
    }
    tlRaf = requestAnimationFrame(step);
  }
});

/* ---------- 渲染成员卡片 ---------- */
const membersGrid = document.getElementById("membersGrid");

membersGrid.innerHTML = MEMBERS.map(function (m, i) {
  const initial = escapeHTML((m.name || "無").trim().charAt(0));
  /* 有 avatar 图片就显示图片，没有就显示姓名首字圆形占位 */
  const avatar = m.avatar
    ? '<div class="member-avatar"><img src="' + escapeHTML(m.avatar) + '" alt="' + escapeHTML(m.name) + '"></div>'
    : '<div class="member-avatar">' + initial + "</div>";
  const bio = m.bio ? '<p class="member-bio">' + escapeHTML(m.bio) + "</p>" : "";
  return (
    '<article class="member-card" data-index="' + i + '">' +
    avatar +
    '<h3 class="member-name">' + escapeHTML(m.name) + "</h3>" +
    '<p class="member-role">' + escapeHTML(m.role) + "</p>" +
    bio +
    '<span class="member-more">查看简介' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"></path></svg>' +
    "</span>" +
    "</article>"
  );
}).join("");

/* ---------- 渲染项目卡片（横向滚动区） ---------- */
const track = document.getElementById("projectTrack");

track.innerHTML = PROJECTS.map(function (p, i) {
  const media = p.image
    ? '<img src="' + escapeHTML(p.image) + '" alt="' + escapeHTML(p.title) + '" loading="lazy">'
    : "<span>" + escapeHTML(p.category) + "</span>";
  return (
    '<article class="project-card">' +
    '<a class="project-card-link" href="' + escapeHTML(p.link) + '" target="_blank" rel="noopener" data-index="' + i + '">' +
    '<div class="card-media">' + media + "</div>" +
    '<div class="card-body">' +
    '<span class="card-tag">' + escapeHTML(p.category) + "</span>" +
    '<h3 class="card-title">' + escapeHTML(p.title) + "</h3>" +
    '<p class="card-desc">' + escapeHTML(p.desc) + "</p>" +
    '<span class="card-footer">查看详情 ' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"></path></svg>' +
    "</span>" +
    "</div>" +
    "</a>" +
    "</article>"
  );
}).join("");

/* ---------- 横向滚动：按钮 + 渐隐遮罩 ---------- */
const prevBtn = document.getElementById("trackPrev");
const nextBtn = document.getElementById("trackNext");
const maskLeft = document.querySelector(".track-mask.left");
const maskRight = document.querySelector(".track-mask.right");

/* 根据滚动位置，更新按钮可用状态与遮罩显隐 */
function updateTrackState() {
  const max = track.scrollWidth - track.clientWidth;
  prevBtn.disabled = track.scrollLeft <= 4;
  nextBtn.disabled = track.scrollLeft >= max - 4;
  maskLeft.classList.toggle("show", track.scrollLeft > 4);
  maskRight.classList.toggle("show", track.scrollLeft < max - 4);
}

prevBtn.addEventListener("click", function () {
  track.scrollBy({ left: -track.clientWidth * 0.7, behavior: "smooth" });
});

nextBtn.addEventListener("click", function () {
  track.scrollBy({ left: track.clientWidth * 0.7, behavior: "smooth" });
});

track.addEventListener("scroll", updateTrackState, { passive: true });
window.addEventListener("resize", updateTrackState);
updateTrackState();

/* ---------- 横向滚动：鼠标拖拽滑动 ---------- */
let isDown = false;
let startX = 0;
let startLeft = 0;
let dragged = false;

track.addEventListener("pointerdown", function (e) {
  if (e.pointerType !== "mouse") return; /* 触屏走原生滑动 */
  isDown = true;
  dragged = false;
  startX = e.clientX;
  startLeft = track.scrollLeft;
  track.classList.add("dragging");
});

window.addEventListener("pointermove", function (e) {
  if (!isDown) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 5) dragged = true;
  track.scrollLeft = startLeft - dx;
});

window.addEventListener("pointerup", function () {
  if (!isDown) return;
  isDown = false;
  track.classList.remove("dragging");
  /* 拖拽过就不触发卡片点击跳转，避免误点 */
  if (dragged) {
    track.addEventListener("click", blockClickOnce, true);
    dragged = false;
  }
});

function blockClickOnce(e) {
  e.preventDefault();
  e.stopPropagation();
  track.removeEventListener("click", blockClickOnce, true);
}

/* ---------- 渲染公告（内容由顶部 ANNOUNCEMENTS 数组管理） ---------- */
const announceList = document.getElementById("announceList");

function renderAnnouncements() {
  announceList.innerHTML = ANNOUNCEMENTS.map(function (a) {
    return (
      '<li class="announce-item">' +
      '<span class="announce-date">' + escapeHTML(a.date) + "</span>" +
      '<p class="announce-text">' + escapeHTML(a.text) + "</p>" +
      "</li>"
    );
  }).join("");
}

renderAnnouncements();

/* ---------- 通用弹窗：成员详情 / 项目详情（共用 index.html 里的遮罩与面板） ---------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(html) {
  modalBody.innerHTML = html;
  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden"; /* 弹窗时锁定背景滚动 */
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) closeModal(); /* 点遮罩空白处关闭 */
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal(); /* ESC 关闭 */
});

/* 成员卡点击 → 成员详情弹窗 */
function openMemberModal(i) {
  const m = MEMBERS[i];
  if (!m) return;
  const initial = escapeHTML((m.name || "無").trim().charAt(0));
  const avatar = m.avatar
    ? '<div class="modal-avatar"><img src="' + escapeHTML(m.avatar) + '" alt="' + escapeHTML(m.name) + '"></div>'
    : '<div class="modal-avatar">' + initial + "</div>";
  const bio = m.bio ? '<p class="modal-bio">' + escapeHTML(m.bio) + "</p>" : "";
  const detail = m.detail
    ? '<div class="modal-detail">' + escapeHTML(m.detail) + "</div>"
    : '<div class="modal-detail"><span class="modal-detail-placeholder">详细简介整理中，敬请期待…</span></div>';
  /* 有 bg 字段：弹窗顶部铺背景图（压暗 + 渐隐，头像/姓名/职务压在图上用亮色），
     简介区（bio/detail）移到下方纯色区，保证文字永远清晰；
     没有 bg：纯色弹窗，头像/姓名/职务 + 简介整体居中排列（原视觉不变） */
  const bgStyle = m.bg ? ' style="background-image:url(\'' + escapeHTML(m.bg) + '\')"' : "";
  const head = m.bg
    ? '<div class="modal-member-bg"' + bgStyle + ">" + avatar +
      '<h3 class="modal-name">' + escapeHTML(m.name) + "</h3>" +
      '<p class="modal-role">' + escapeHTML(m.role) + "</p>" + "</div>"
    : avatar +
      '<h3 class="modal-name">' + escapeHTML(m.name) + "</h3>" +
      '<p class="modal-role">' + escapeHTML(m.role) + "</p>";
  openModal(
    '<div class="modal-member">' +
    head +
    '<div class="modal-member-content">' +
    bio +
    detail +
    "</div>" +
    "</div>"
  );
}

membersGrid.addEventListener("click", function (e) {
  const card = e.target.closest(".member-card");
  if (!card) return;
  openMemberModal(Number(card.getAttribute("data-index")));
});

/* 项目卡点击 → 项目详情弹窗，弹窗内「立即体验」按钮再跳外部链接。
   中键 / Ctrl 点击仍直接开新标签（浏览器默认行为，不拦截）。 */
function openProjectModal(i) {
  const p = PROJECTS[i];
  if (!p) return;
  /* 弹窗图片：优先 images 多图（滑动浏览），其次 image 单图，都没有则占位 */
  const shots = (p.images && p.images.length) ? p.images : (p.image ? [p.image] : []);
  let mediaHtml = "";
  if (shots.length) {
    const slides = shots.map(function (src) {
      return '<div class="modal-gallery-slide"><img src="' + escapeHTML(src) + '" alt="' + escapeHTML(p.title) + '"></div>';
    }).join("");
    const dots = shots.length > 1
      ? '<div class="modal-gallery-dots">' + shots.map(function (_, di) {
          return '<button class="modal-gallery-dot' + (di === 0 ? " active" : "") + '" aria-label="第 ' + (di + 1) + ' 张图"></button>';
        }).join("") + "</div>"
      : "";
    const arrows = shots.length > 1
      ? '<button class="modal-gallery-btn gallery-prev" aria-label="上一张"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 6-6 6 6 6"></path></svg></button>' +
        '<button class="modal-gallery-btn gallery-next" aria-label="下一张"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m10 6 6 6-6 6"></path></svg></button>'
      : "";
    mediaHtml = '<div class="modal-gallery">' +
      '<div class="modal-gallery-track">' + slides + "</div>" +
      dots + arrows +
      "</div>";
  } else {
    mediaHtml = '<div class="modal-media">' + escapeHTML(p.category) + "</div>";
  }
  const detail = p.detail
    ? '<div class="modal-detail">' + escapeHTML(p.detail) + "</div>"
    : '<div class="modal-detail"><span class="modal-detail-placeholder">项目介绍整理中，敬请期待…</span></div>';
  openModal(
    '<div class="modal-project">' +
    mediaHtml +
    '<span class="card-tag">' + escapeHTML(p.category) + "</span>" +
    '<h3 class="modal-name">' + escapeHTML(p.title) + "</h3>" +
    '<p class="modal-bio">' + escapeHTML(p.desc) + "</p>" +
    detail +
    '<a class="btn modal-enter" href="' + escapeHTML(p.link) + '" target="_blank" rel="noopener">立即体验' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"></path></svg>' +
    "</a>" +
    "</div>"
  );
  /* 弹窗注入后初始化图片轮播（圆点指示 + 左右箭头 + 拖拽滑动） */
  const gallery = modalBody.querySelector(".modal-gallery");
  if (gallery) initGallery(gallery);
}

/* 弹窗内图片轮播：横向滑动 / 左右箭头 / 圆点指示联动 */
function initGallery(galleryEl) {
  const track = galleryEl.querySelector(".modal-gallery-track");
  const dots = galleryEl.querySelectorAll(".modal-gallery-dot");
  const prev = galleryEl.querySelector(".gallery-prev");
  const next = galleryEl.querySelector(".gallery-next");
  if (!track) return;

  function update() {
    const idx = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach(function (d, di) {
      d.classList.toggle("active", di === idx);
    });
    if (prev) prev.disabled = idx <= 0;
    if (next) next.disabled = idx >= dots.length - 1;
  }

  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  dots.forEach(function (d, di) {
    d.addEventListener("click", function () {
      track.scrollTo({ left: di * track.clientWidth, behavior: "smooth" });
    });
  });
  if (prev) prev.addEventListener("click", function () {
    track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
  });
  if (next) next.addEventListener("click", function () {
    track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
  });
  update();
}

track.addEventListener("click", function (e) {
  const link = e.target.closest(".project-card-link");
  if (!link) return;
  e.preventDefault();
  openProjectModal(Number(link.getAttribute("data-index")));
});

/* ---------- 导航高亮：滚动到哪个板块，就点亮对应链接 ---------- */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const spy = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach(function (s) {
  spy.observe(s);
});

/* ---------- 滚动渐显动画（简约，不浮夸） ----------
   双向触发：元素进入视口 → 播放入场动画；
   完全滚出视口 → 收起（移除 visible），下次滚回来重新播放。 */
const revealEls = document.querySelectorAll(".reveal");

const revealObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(function (el) {
  revealObs.observe(el);
});

/* ---------- 页脚年份自动更新 ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- 背景音乐 ----------
   策略：浏览器禁止无手势自动出声，所以进页面先不响；
   访客第一次点击 / 滚动 / 按键后自动开始播放；
   右下角按钮随时暂停 / 继续；上次的开关状态记在 localStorage。 */
const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");

function kickoffBgm() {
  if (!bgm) return;
  if (!bgm.paused) return;
  /* 用户上次明确关过，就不自动播 */
  if (localStorage.getItem("wujing-bgm") === "off") return;
  bgm.play().catch(function () {});
}

/* 首次用户交互即尝试自动播放 */
["pointerdown", "touchstart", "scroll", "keydown"].forEach(function (evt) {
  window.addEventListener(evt, kickoffBgm, { once: true, passive: true });
});

/* 按钮手动切换 */
musicToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  if (bgm.paused) {
    bgm.play().catch(function () {});
  } else {
    bgm.pause();
  }
});

/* 播放 / 暂停同步按钮图标与记忆 */
bgm.addEventListener("play", function () {
  musicToggle.classList.add("playing");
  localStorage.setItem("wujing-bgm", "on");
});
bgm.addEventListener("pause", function () {
  musicToggle.classList.remove("playing");
  localStorage.setItem("wujing-bgm", "off");
});

/* ---------- 右侧悬浮工具栏：分享网站（复制链接 + toast） ----------
   优先用 navigator.clipboard（https / localhost 可用）；
   本地 file:// 或 http 环境没有该 API 时，自动退回 textarea + execCommand，
   保证任何情况下都不报错、都能复制。 */
var SHARE_URL = "https://www.wujingcn.top";

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  return new Promise(function (resolve, reject) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (err) {
      ok = false;
    }
    document.body.removeChild(ta);
    ok ? resolve() : reject(new Error("copy failed"));
  });
}

var copyToast = document.getElementById("copyToast");
var toastTimer = null;

/* 页面正中弹出提示，2 秒后自动消失（连续点击会重新计时） */
function showToast(message) {
  if (!copyToast) return;
  copyToast.textContent = message;
  copyToast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    copyToast.classList.remove("show");
    toastTimer = null;
  }, 2000);
}

var shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
  shareBtn.addEventListener("click", function () {
    copyText(SHARE_URL).then(function () {
      showToast("链接已复制：" + SHARE_URL);
    }).catch(function () {
      showToast("复制失败，请手动复制：" + SHARE_URL);
    });
  });
}

/* ---------- 右侧悬浮工具栏：回到顶部（仅在向下滚动 400px 后出现） ---------- */
var toolTop = document.getElementById("toolTop");

function updateToolTop() {
  if (!toolTop) return;
  toolTop.classList.toggle("show", window.scrollY > 400);
}

/* passive 监听 + 只读 scrollY 切 class，开销可忽略，故不做节流 */
window.addEventListener("scroll", updateToolTop, { passive: true });

window.addEventListener("resize", updateToolTop);
updateToolTop();

if (toolTop) {
  toolTop.addEventListener("click", function () {
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
}
