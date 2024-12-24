const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = Array.from(document.querySelectorAll(".circle"));

let currentActive = 1;

const update = () => {
  // Update active states
  circles.forEach((circle, idx) => {
    circle.classList.toggle("active", idx < currentActive);
  });

  // Update progress bar
  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

  // Update button states
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
};

next.addEventListener("click", () => {
  if (currentActive < circles.length) currentActive++;
  update();
});

prev.addEventListener("click", () => {
  if (currentActive > 1) currentActive--;
  update();
});

update(); // Initialize states
