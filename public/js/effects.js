function typewriterEffect(elementId, speed = 25) {
    const el = document.getElementById(elementId);
    if (!el) return;

    const originalHTML = el.innerHTML.trim();

    const temp = document.createElement("div");
    temp.innerHTML = originalHTML;
    const fullText = temp.textContent;

    el.innerHTML = "";

    let i = 0;
    const interval = setInterval(() => {
        el.textContent = fullText.slice(0, i);
        i++;

        if (i > fullText.length) {
            clearInterval(interval);
            el.innerHTML = originalHTML;
        }
    }, speed);
}


function initScrollIndicator() {
  const hero = document.querySelector(".hero");
  const indicator = document.querySelector(".scroll-indicator");

  if (!hero || !indicator) return;

  document.addEventListener("scroll", () => {
    const heroHeight = hero.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY > heroHeight * 0.4) {
      indicator.style.opacity = "0";
      indicator.style.pointerEvents = "none";
    } else {
      indicator.style.opacity = "1";
      indicator.style.pointerEvents = "auto";
    }
  });
}



// Run it on page load
window.addEventListener("DOMContentLoaded", () => {
    typewriterEffect("quoteText");
    if (!el) {
        console.warn("quoteText not found");
        return;
    }
});

window.addEventListener("DOMContentLoaded", initScrollIndicator);
