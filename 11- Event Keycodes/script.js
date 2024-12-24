const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  const key = e.key === ' ' ? 'Space' : e.key;
  insert.innerHTML = ` <div class="key">
${key}
<small>event.key</small>
</div>
<div class="key">
${e.keyCode}
<small>event.keyCode</small>
</div>
<div class="key">
${e.code}
<small>event.code</small>
</div>
`;
});
