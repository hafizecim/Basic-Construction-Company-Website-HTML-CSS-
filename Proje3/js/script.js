function showSection(sectionId) {
  // Tüm bölümlerden 'active' sınıfını kaldır
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  // Seçilen bölüme 'active' sınıfını ekle
  document.getElementById(sectionId).classList.add('active');
}

// Sayfa açıldığında Ana Sayfa'yı göster
window.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});
