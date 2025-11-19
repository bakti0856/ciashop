function showAlert(msg) {
  const box = document.getElementById('customAlert');
  const text = document.getElementById('alertMessage');
  if (!box || !text) return;
  text.textContent = msg;
  box.classList.remove('hidden');
  // auto hide after 3s
  setTimeout(() => {
    box.classList.add('hidden');
  }, 3000);
}

function closeAlert() {
  const box = document.getElementById('customAlert');
  if (box) box.classList.add('hidden');
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openWA(message) {
  const url = "https://wa.me/6285669813732?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
