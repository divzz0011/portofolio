const toggle = document.getElementById('toggleMode');

if (localStorage.getItem('mode') === 'light') {
  document.body.classList.add('light');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const mode = document.body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('mode', mode);
});
