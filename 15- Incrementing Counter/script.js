const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0 ';
  const target = parseInt(counter.dataset.target, 10);
  let current = 0;
  const updateCounter = () => {
    const increment = Math.ceil(target / 200);
    current += increment;

    if (current >= target) {
      counter.textContent = target;
    } else {
      counter.textContent = current;
      setTimeout(updateCounter, 10);
    }
  };
  updateCounter();
});
