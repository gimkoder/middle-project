(() => {
  const items = [...document.querySelectorAll(".rv")];

  if (window.parent === window) document.body.classList.add("standalone");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el, i) => {
    el.style.setProperty("--d", (i % 4) * 0.08 + "s");
    io.observe(el);
  });

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", e.clientX - r.left + "px");
      card.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
})();
