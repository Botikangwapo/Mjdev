const toggle = document.getElementById('toggle');
const toggleBtn = document.getElementById('toggle-dark');
const prefersDark = localStorage.getItem('dark-mode') === 'enabled';

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
});



  AOS.init({
         duration: 1000,
      });


if (prefersDark) {
  document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

