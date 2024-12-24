const smallCups = document.querySelectorAll('.cup-small');
const totalCups = smallCups.length;
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const liters = document.getElementById('liters');
const volume = 2;

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    toggleCups(idx);
  });
});

const toggleCups = function (idx) {
  smallCups.forEach((cup, i) => {
    cup.classList.toggle('full', i <= idx);
  });
  updateStatus();
};

const updateStatus = function () {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const fillPercentage = (fullCups / totalCups) * 100;
  const remaining = volume - (fillPercentage / 100) * volume;

  liters.textContent = `${remaining.toFixed(2)} L`;
  percentage.textContent = `${Math.floor(fillPercentage)}%`;
  percentage.style.height = `${fillPercentage}%`;
  remained.style.display = fullCups === totalCups ? 'none' : 'flex';
};
