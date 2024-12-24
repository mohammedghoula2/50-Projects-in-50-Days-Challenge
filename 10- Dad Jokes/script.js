const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com/', config);
  const data = await res.json();
  jokeEl.textContent = data.joke;
}

jokeBtn.addEventListener('click', generateJoke);
