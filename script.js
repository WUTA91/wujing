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
   avatar  头像图片（选填，留空 "" 自动用姓名首字生成圆形占位；
           要放图片：把图片放进 assets/ 文件夹，填 "assets/xxx.jpg"） */
const MEMBERS = [
  { name: "无他", role: "创始人，产品总监，视觉设计", bio: "无他，無境团队创始人之一，坚持卓越的设计理念。", avatar: "assets/无他.jpg" },
  { name: "风起多意", role: "创始人，产品策划，应用总监", bio: "风起多意，無境团队创始人之一。", avatar: "assets/fengqiduoyi.jpg" },
  { name: "。", role: "合作伙伴", bio: "一个大量依赖Ai的啥b。", avatar: "assets/。.jpg" },
  { name: "啥也不想干", role: "合作伙伴", bio: "优秀的合作伙伴。", avatar: "assets/shayebuxianggan.jpg" }
];

/* ===== 项目作品：每条 {} 是一个项目卡片 =====
   新增项目：复制一条 {}，在末尾加上英文逗号后粘贴到数组里即可。
   title     项目名称（必填）
   category  项目类型标签（选填，如「视频宣发」「网页制作」）
   desc      一句话描述（必填）
   image     封面图地址（选填，留空 "" 则显示灰色占位；建议 16:9 或 3:2 的横图）
   link      点击卡片跳转的外部链接（必填，改成真实链接，如 https://www.xxx.com） */
const PROJECTS = [
  {
    title: "Airplane 专注",
    category: "我们的网页",
    desc: "由無境团队开发的飞行类专注网页，欢迎各位体验。",
    image: "assets/airplane.png",
    link: "https://wj-airplane.pages.dev"
  }
];

/* ===== 公告：每条 {} 是一条公告 =====
   新增：复制一条 {}，加逗号粘贴后修改内容；
   删除：直接删掉对应的一行（或{}块）。
   date  日期（显示在公告左侧）
   text  公告内容 */
const ANNOUNCEMENTS = [
  { date: "2026-09-17", text: "WUJING ·無境 团队官网正式上线，欢迎各界伙伴上线体验。" },
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

/* ---------- 渲染成员卡片 ---------- */
const membersGrid = document.getElementById("membersGrid");

membersGrid.innerHTML = MEMBERS.map(function (m) {
  const initial = escapeHTML((m.name || "無").trim().charAt(0));
  /* 有 avatar 图片就显示图片，没有就显示姓名首字圆形占位 */
  const avatar = m.avatar
    ? '<div class="member-avatar"><img src="' + escapeHTML(m.avatar) + '" alt="' + escapeHTML(m.name) + '"></div>'
    : '<div class="member-avatar">' + initial + "</div>";
  const bio = m.bio ? '<p class="member-bio">' + escapeHTML(m.bio) + "</p>" : "";
  return (
    '<article class="member-card">' +
    avatar +
    '<h3 class="member-name">' + escapeHTML(m.name) + "</h3>" +
    '<p class="member-role">' + escapeHTML(m.role) + "</p>" +
    bio +
    "</article>"
  );
}).join("");

/* ---------- 渲染项目卡片（横向滚动区） ---------- */
const track = document.getElementById("projectTrack");

track.innerHTML = PROJECTS.map(function (p) {
  const media = p.image
    ? '<img src="' + escapeHTML(p.image) + '" alt="' + escapeHTML(p.title) + '" loading="lazy">'
    : "<span>" + escapeHTML(p.category) + "</span>";
  return (
    '<article class="project-card">' +
    '<a class="project-card-link" href="' + escapeHTML(p.link) + '" target="_blank" rel="noopener">' +
    '<div class="card-media">' + media + "</div>" +
    '<div class="card-body">' +
    '<span class="card-tag">' + escapeHTML(p.category) + "</span>" +
    '<h3 class="card-title">' + escapeHTML(p.title) + "</h3>" +
    '<p class="card-desc">' + escapeHTML(p.desc) + "</p>" +
    '<span class="card-footer">查看项目 ' +
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

/* ---------- 滚动渐显动画（简约，不浮夸） ---------- */
const revealEls = document.querySelectorAll(".reveal");

const revealObs = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObs.unobserve(entry.target);
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
