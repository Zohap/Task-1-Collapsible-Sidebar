const toggleBtn = document.getElementById('toggle-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  toggleBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  closeBtn.style.display = 'none';
  toggleBtn.style.display = 'block';
});
