document.addEventListener('DOMContentLoaded', function() {
  // Başlangıçta home aktif
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.querySelector('#home').style.display = 'flex';

  // Menü tıklama olayları
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      const sectionId = e.target.getAttribute('data-section');
      document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
      document.getElementById(sectionId).style.display = 'flex';
    });
  });
});
