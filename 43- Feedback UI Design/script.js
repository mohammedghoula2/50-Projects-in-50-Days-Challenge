const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const ratingsContainer = document.querySelector('.ratings-container');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  const rating = e.target.closest('.rating');
  if (rating) {
    removeActive();
    rating.classList.add('active');
    selectedRating = rating.querySelector('small').innerHTML;
    console.log(selectedRating);
  }
});

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
  <i class='fas fa-heart'></i>
  <strong>Thank You!</strong>
  <br>
  <strong>Feedback: ${selectedRating}</strong>
  <p>We'll use your feedback to improve our customer support</p>`;
});

const removeActive = function () {
  ratings.forEach((rating) => rating.classList.remove('active'));
};
