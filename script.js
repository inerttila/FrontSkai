const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator-index");

function update(entries) {
  entries.forEach((entry) => {
    const i = entry.target.dataset.index;
    indicators[i].classList.toggle("expand", entry.isIntersecting);
  });
}

function detect(slide) {
  const options = { threshold: 0.2 };
  const io = new IntersectionObserver(update, options);
  io.observe(slide);
}

const init = () => slides.forEach(detect);

window.addEventListener("load", init, false);