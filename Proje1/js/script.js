document.addEventListener('DOMContentLoaded', function() {
  // Başlangıçta home aktif
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.querySelector('#home').style.display = 'flex';
  document.querySelector('nav ul li a[data-section="home"]').classList.add('active');

  // Menü tıklama olayları
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Linkin default davranışını engelle

      const sectionId = link.getAttribute('data-section');

      // Bölümleri göster/gizle
      document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
      document.getElementById(sectionId).style.display = 'flex';

      // Menüde aktif durumu
      document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
