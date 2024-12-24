const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (e) => {
    if (/^[0-9]$/.test(e.key)) {
      codes[idx].value = '';
      if (idx < codes.length - 1) {
        setTimeout(() => codes[idx + 1].focus(), 10);
      }
    } else if (e.key === 'Backspace') {
      codes[idx].value = '';
      if (idx > 0) {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    }
  });

  code.addEventListener('paste', (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    paste.split('').forEach((char, i) => {
      if (/^[0-9]$/.test(char) && codes[idx + i]) {
        codes[idx + i].value = char;
        if (idx + i < codes.length - 1) {
          codes[idx + i + 1].focus();
        }
      }
    });
  });
});
