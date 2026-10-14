// admilara.github.io – small, dependency-free behaviour. The page works without it
// (everything is visible, nothing loads from third parties).

(function () {
  "use strict";

  /* ---- Filters: chips with data-filter="<key>" data-value="<value>" inside a [data-filter-group].
          Rows carry data-<key> attributes. Without JavaScript every row stays visible. ---- */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var state = {};
    var rows = group.querySelectorAll(".row");
    var empty = group.querySelector(".empty");
    group.querySelectorAll(".chip.on[data-filter]").forEach(function (c) { state[c.dataset.filter] = c.dataset.value; });

    function apply() {
      var shown = 0;
      rows.forEach(function (row) {
        var ok = Object.keys(state).every(function (k) { return state[k] === "all" || row.dataset[k] === state[k]; });
        row.hidden = !ok;
        if (ok) shown++;
      });
      if (empty) empty.hidden = shown > 0;
    }

    group.querySelectorAll(".chip[data-filter]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state[chip.dataset.filter] = chip.dataset.value;
        chip.parentElement.querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("on", c === chip); });
        apply();
      });
    });
    apply();
  });

  /* ---- On repeat: Spotify player loads only after a click (no cookies before) ---- */
  var repeat = document.querySelector(".repeat");
  if (repeat) {
    var card = repeat.querySelector(".play-card");
    var m = (repeat.dataset.spotify || "").match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist|episode)\/([A-Za-z0-9]+)/);
    if (!m) { card.disabled = true; }
    else card.addEventListener("click", function () {
      var f = document.createElement("iframe");
      f.src = "https://open.spotify.com/embed/" + m[1] + "/" + m[2] + "?utm_source=generator&theme=0";
      f.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      f.loading = "lazy";
      f.title = "Spotify player";
      card.replaceWith(f);
      var fine = repeat.querySelector(".fine");
      if (fine) fine.textContent = "Player provided by Spotify.";
    });
  }

  /* ---- Gallery viewer ---- */
  var viewer = document.querySelector(".viewer");
  var shots = Array.prototype.slice.call(document.querySelectorAll(".shot"));
  if (viewer && shots.length && typeof viewer.showModal === "function") {
    var img = viewer.querySelector("img"), cap = viewer.querySelector("figcaption"), idx = 0;
    function show(i) {
      idx = (i + shots.length) % shots.length;
      img.src = shots[idx].dataset.full;
      img.alt = shots[idx].dataset.caption;
      cap.textContent = shots[idx].dataset.caption;
    }
    shots.forEach(function (s, i) { s.addEventListener("click", function () { show(i); viewer.showModal(); }); });
    viewer.querySelector(".v-prev").addEventListener("click", function () { show(idx - 1); });
    viewer.querySelector(".v-next").addEventListener("click", function () { show(idx + 1); });
    viewer.querySelector(".v-close").addEventListener("click", function () { viewer.close(); });
    viewer.addEventListener("click", function (e) { if (e.target === viewer) viewer.close(); });
    viewer.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ---- Highlight the current section in the profile column ---- */
  var links = document.querySelectorAll(".toc a");
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && byId[e.target.id]) {
          links.forEach(function (a) { a.classList.remove("on"); });
          byId[e.target.id].classList.add("on");
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(byId).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }
})();
