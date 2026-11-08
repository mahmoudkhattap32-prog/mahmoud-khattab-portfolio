/* Renders the sections from js/content.js. No build step. */
(function () {
  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var fmt = function (n) { return n.toLocaleString("en-US"); };

  /* ---------- helpers ---------- */
  function shot(i, cls) {
    return '<figure class="shot ' + (cls || "") + '"><button type="button" class="zoom" data-src="' + i.src + '" data-alt="' + esc(i.alt) + '" data-cap="' + esc(i.cap || "") + '">' +
      '<img src="' + i.src + '" width="' + i.w + '" height="' + i.h + '" alt="' + esc(i.alt) + '" loading="lazy" decoding="async"></button>' +
      (i.cap ? '<figcaption>' + esc(i.cap) + '</figcaption>' : '') + '</figure>';
  }
  function video(v, cls) {
    return '<figure class="vid ' + (cls || "") + '"><video controls preload="none" playsinline poster="' + v.poster + '" aria-label="' + esc(v.title || v.cap || "Video") + '"><source src="' + v.src + '" type="video/mp4"></video>' +
      '<figcaption>' + esc(v.title || v.cap) + (v.tag ? ' <span class="tag">' + esc(v.tag) + '</span>' : '') + '</figcaption></figure>';
  }
  function head(id, name, tag, note, intro, cls) {
    return '<div class="case-head"><div class="wrap"><div class="case-title"><h3>' + name + '</h3>' + (tag ? '<span class="pill">' + tag + '</span>' : '') + '</div>' +
      '<p class="case-intro">' + intro + '</p>' + (note ? '<p class="case-note">' + note + '</p>' : '') + '</div></div>';
  }
  function block(title, inner, extra) {
    return '<div class="block ' + (extra || "") + '"><h4>' + title + '</h4>' + inner + '</div>';
  }

  /* ---------- services ---------- */
  $("#services-list").innerHTML = S.services.map(function (s) {
    return '<article class="svc"><h3>' + s.title + '</h3><p>' + s.text + '</p><ul>' + s.points.map(function (p) { return '<li>' + p + '</li>'; }).join("") + '</ul></article>';
  }).join("");

  /* ---------- One Bond ---------- */
  var ob = S.oneBond;
  var tabs = {
    strategy:
      '<div class="kpis">' + ob.kpis.map(function (k) { return '<div class="kpi"><b>' + k.v + '</b><span>' + k.l + '</span></div>'; }).join("") + '</div>' +
      '<div class="one-col">' +
            block("Positioning", '<p class="msg">' + ob.positioning.message + '</p><p class="mini">Competitors</p><p>' + ob.positioning.competitors.join(", ") + '</p><p class="mini">Where One Bond wins</p><p>' + ob.positioning.advantage.join(", ") + '</p><p class="mini">Where they are weak</p><p>' + ob.positioning.weaknesses.join(", ") + '</p>') +
      '</div>' +
      block("Four weeks", '<ol class="weeks">' + ob.weeks.map(function (w) { return '<li><span>' + w.n + '</span><b>' + w.t + '</b><em>' + w.d + '</em></li>'; }).join("") + '</ol><p class="mini">Ad styles: ' + ob.adStyles.join(", ") + '</p>'),
    audience:
      '<div class="two">' + block("Who we are talking to", '<dl class="dl">' + ob.audience.lines.map(function (l) { return '<dt>' + l[0] + '</dt><dd>' + l[1] + '</dd>'; }).join("") + '</dl>') +
      block("Buyer persona: " + ob.audience.persona.name, '<p>' + ob.audience.persona.role + '</p><p class="mini">Goals</p><ul class="plain-list">' + ob.audience.persona.goals.map(function (g) { return '<li>' + g + '</li>'; }).join("") + '</ul><p class="mini">Frustrations</p><ul class="plain-list">' + ob.audience.persona.frustrations.map(function (g) { return '<li>' + g + '</li>'; }).join("") + '</ul><p class="mini">Motivation to buy</p><ul class="plain-list">' + ob.audience.persona.buys.map(function (g) { return '<li>' + g + '</li>'; }).join("") + '</ul>') + '</div>',
    content:
      '<p class="lead">The calendar covers each day with the format, the idea and the caption. These are the original sheets.</p>' +
      '<div class="gallery wide">' + ob.calendar.map(function (i) { return shot(i); }).join("") + '</div>' +
      '<div class="reel">' + video(ob.reel, "tall") + '<p class="lead">The reel above is the finished piece for the “Oily skin problem” row of the calendar.</p></div>',
    ads:
      '<p class="lead">Google Ads previews for the campaign, and the keyword themes behind them.</p>' +
      '<div class="gallery phones">' + ob.ads.map(function (i) { return shot(i); }).join("") + '</div>' +
      '<h5>Keyword themes</h5><div class="gallery wide">' + ob.keywords.map(function (i) { return shot(i); }).join("") + '</div>' +
      '<h5>Facebook ad creatives</h5><div class="gallery phones">' + ob.creatives.map(function (i) { return shot(i); }).join("") + '</div>',
    email:
      '<p class="lead">' + ob.emailNote + '</p><div class="gallery wide two-col">' + ob.emails.map(function (i) { return shot(i); }).join("") + '</div>',
    brand:
      '<p class="lead">Logo, mockups and the Wix store I built for the brand.</p><div class="gallery wide">' + ob.brand.map(function (i) { return shot(i); }).join("") + '</div>'
  };
  var tabNames = [["strategy", "Strategy"], ["audience", "Audience"], ["content", "Content"], ["ads", "Ads"], ["email", "Email"], ["brand", "Brand"]];

  $("#one-bond").innerHTML = '<article class="case onebond" aria-labelledby="ob-h">' +
    head("one-bond", '<span id="ob-h">One Bond</span>', "", ob.note, ob.intro) +
    '<div class="wrap"><div class="tabs" role="tablist" aria-label="One Bond sections">' + tabNames.map(function (t, i) {
      return '<button role="tab" id="tab-' + t[0] + '" aria-controls="panel-' + t[0] + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '">' + t[1] + '</button>';
    }).join("") + '</div>' + tabNames.map(function (t, i) {
      return '<div role="tabpanel" id="panel-' + t[0] + '" aria-labelledby="tab-' + t[0] + '"' + (i ? " hidden" : "") + ' class="panel">' + tabs[t[0]] + '</div>';
    }).join("") + '</div></article>';

  /* ---------- Caviaro ---------- */
  var cv = S.caviaro;
  $("#caviaro").innerHTML = '<article class="case caviaro" aria-labelledby="cv-h">' +
    head("caviaro", '<span id="cv-h">Caviaro Serum</span>', "", cv.note, cv.intro) +
    '<div class="wrap two-sides"><div class="side">' + shot(cv.ad, "tall") + '</div><div class="side">' +
    '<div class="caption-card"><p class="mini">Ad headline</p><p class="msg">' + cv.headline + '</p><p class="mini">Caption I wrote</p><p>' + cv.caption.slice(0, 2).join(" ") + '</p><ul class="plain-list tick">' + cv.caption.slice(2, 5).map(function (c) { return '<li>' + c + '</li>'; }).join("") + '</ul><p><b>' + cv.caption[5] + '</b></p><p class="hash">' + cv.hashtags + '</p></div>' +
    shot(cv.calendar) + '</div></div></article>';

  /* ---------- Valyrian ---------- */
  var v = S.valyrian, totalDays = v.phases.reduce(function (a, p) { return a + p.days; }, 0), start = 0;
  var maxB = Math.max.apply(null, v.phases.map(function (p) { return p.budget; }));
  var gantt = v.phases.map(function (p) {
    var l = start / totalDays * 100, w = p.days / totalDays * 100; start += p.days;
    return '<li><div class="g-name"><b>' + p.name + '</b><span>' + p.where + '</span></div>' +
      '<div class="g-track"><div class="g-bar" style="left:' + l + '%;width:' + w + '%"><span>' + p.days + ' days</span></div></div>' +
      '<div class="g-budget"><div class="b-bar" style="width:' + (p.budget / maxB * 100) + '%"></div><b>' + fmt(p.budget) + ' EGP</b></div>' +
      '<div class="g-kpi">' + p.kpi + '</div></li>';
  }).join("");
  $("#valyrian").innerHTML = '<article class="case valyrian" aria-labelledby="vl-h">' +
    head("valyrian", '<span id="vl-h">Valyrian</span>', "", v.note, v.intro) +
    '<div class="wrap"><div class="stats"><div><b>' + totalDays + '</b><span>days</span></div><div><b>' + fmt(v.total.spend) + '</b><span>EGP planned spend</span></div><div><b>' + fmt(v.total.budget) + '</b><span>EGP total budget</span></div><div><b>6</b><span>campaign phases</span></div></div>' +
    '<div class="block"><h4>Media plan</h4><div class="gantt-head"><span>Phase</span><span>Timeline (' + totalDays + ' days)</span><span>Budget</span><span>KPI target</span></div><ul class="gantt">' + gantt + '</ul></div>' +
    '<div class="block"><h4>Target segments</h4><p class="mini">' + v.where + '</p><div class="table-wrap"><table><thead><tr><th>Segment</th><th>Age</th><th>Income (EGP)</th><th>Key product</th><th>Motivation</th></tr></thead><tbody>' +
    v.segments.map(function (s) { return '<tr><th scope="row">' + s.name + '</th><td>' + s.age + '</td><td>' + s.income + '</td><td>' + s.product + '</td><td>' + s.motive + '</td></tr>'; }).join("") + '</tbody></table></div></div>' +
    '<div class="gallery wide two-col">' + v.images.map(function (i) { return shot(i); }).join("") + '</div></div></article>';

  /* ---------- Meta Ads / Reporting ---------- */
  function simple(id, title, intro, imgs, cls) {
    $("#" + id).innerHTML = '<article class="case plain ' + (cls || "") + '" aria-labelledby="' + id + '-h">' +
      '<div class="case-head"><div class="wrap"><div class="case-title"><h3 id="' + id + '-h">' + title + '</h3></div><p class="case-intro">' + intro + '</p></div></div>' +
      '<div class="wrap"><div class="gallery wide two-col">' + imgs.map(function (i) { return shot(i); }).join("") + '</div></div></article>';
  }
  simple("meta-ads", "Meta Ads Manager", S.metaAds.intro, S.metaAds.images);
  simple("reporting", "Excel reporting", S.reporting.intro, S.reporting.images);

  /* ---------- Design ---------- */
  $("#brand").innerHTML = '<article class="case plain" aria-labelledby="br-h"><div class="case-head"><div class="wrap"><div class="case-title"><h3 id="br-h">More design work</h3></div></div></div><div class="wrap"><div class="gallery phones">' +
    S.designs.map(function (i) { return shot({ src: i.src, w: i.w, h: i.h, alt: i.alt, cap: i.cap + ", " + i.tag.toLowerCase() }); }).join("") + '</div></div></article>';

  /* ---------- Videos ---------- */
  $("#videos").innerHTML = '<article class="case plain" aria-labelledby="vd-h"><div class="case-head"><div class="wrap"><div class="case-title"><h3 id="vd-h">Short-form videos</h3></div><p class="case-intro">Arabic explainer shorts made with AI tools, for TikTok and Reels.</p></div></div><div class="wrap"><div class="gallery vids">' +
    S.videos.map(function (x) { return video(x, "tall"); }).join("") + '</div></div></article>';

  /* ---------- Skills, tools ---------- */
  $("#skills-list").innerHTML = S.skills.map(function (s) { return '<li><a href="' + s.proof + '">' + s.name + '</a></li>'; }).join("");
  $("#tools-list").innerHTML = S.tools.map(function (t) { return '<li>' + t + '</li>'; }).join("");

  /* ---------- Certificates ---------- */
  $("#certs-list").innerHTML = S.certificates.map(function (c) {
    return '<figure class="cert"><button type="button" class="zoom" data-src="' + c.src + '" data-alt="Certificate: ' + esc(c.title) + '" data-cap="' + esc(c.title + ", " + c.by) + '"><img src="' + c.src + '" width="' + c.w + '" height="' + c.h + '" alt="Certificate: ' + esc(c.title) + '" loading="lazy" decoding="async"></button><figcaption><b>' + c.title + '</b><span>' + c.by + '</span></figcaption></figure>';
  }).join("");

  /* ---------- Contact ---------- */
  var C = S.contact;
  $("#contact-list").innerHTML =
    '<li><span>Email</span><a href="mailto:' + C.email + '">' + C.email + '</a></li>' +
    '<li><span>Phone</span><a href="tel:' + C.phoneLink + '">' + C.phone + '</a></li>' +
    '<li><span>LinkedIn</span><a href="' + C.linkedin + '" target="_blank" rel="noopener">Mahmoud Khattab</a></li>' +
    '<li><span>All links</span><a href="' + C.links + '" target="_blank" rel="noopener">linkatik.bio/mahmoud-khattb1</a></li>';

  /* ---------- Tabs ---------- */
  var tablist = $('[role="tablist"]');
  var tabBtns = [].slice.call(tablist.querySelectorAll('[role="tab"]'));
  function select(btn, focus) {
    tabBtns.forEach(function (b) {
      var on = b === btn;
      b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1;
      document.getElementById(b.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) btn.focus();
  }
  tabBtns.forEach(function (b, i) {
    b.addEventListener("click", function () { select(b); });
    b.addEventListener("keydown", function (e) {
      var k = e.key, n = null;
      if (k === "ArrowRight") n = tabBtns[(i + 1) % tabBtns.length];
      else if (k === "ArrowLeft") n = tabBtns[(i - 1 + tabBtns.length) % tabBtns.length];
      else if (k === "Home") n = tabBtns[0];
      else if (k === "End") n = tabBtns[tabBtns.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  /* ---------- Lightbox ---------- */
  var dlg = $("#lightbox"), lbImg = $("img", dlg), lbCap = $("figcaption", dlg);
  document.addEventListener("click", function (e) {
    var z = e.target.closest(".zoom");
    if (z) {
      lbImg.src = z.dataset.src; lbImg.alt = z.dataset.alt; lbCap.textContent = z.dataset.cap;
      if (dlg.showModal) dlg.showModal(); else window.open(z.dataset.src, "_blank");
    } else if (e.target === dlg || e.target.classList.contains("lb-close")) dlg.close();
  });

  /* ---------- Nav highlight ---------- */
  var links = [].slice.call(document.querySelectorAll(".nav nav a"));
  var map = {}; links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }
  var nav = $("#nav");
  window.addEventListener("scroll", function () { nav.classList.toggle("solid", window.scrollY > 40); }, { passive: true });
})();
