const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

function loadContent() {
  header.innerHTML = `
    <img
      src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="laptop"
    />
  `;
  title.innerText = 'Exploring the World of Tech';
  excerpt.innerText = 'Discover the latest trends and insights in technology.';
  profileImg.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="John Doe" />
  `;
  name.innerText = 'John Doe';
  date.innerText = 'Oct 08, 2020';

  // Remove the animated placeholders
  removeLoadingPlaceholders();
}

// Function to remove the loading placeholders
function removeLoadingPlaceholders() {
  const animatedBgs = document.querySelectorAll('.animated-bg');
  const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

setTimeout(loadContent, 2000);
