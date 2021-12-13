//kode til burger menu mobil version

const btn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

function toggleMenu() {
  nav.classList.toggle('shown');
  const menuShown = nav.classList.contains('shown');
  if (menuShown) {
    btn.textContent = 'Luk';
  } else {
    btn.textContent = 'Menu';
  }
}
btn.addEventListener('click', toggleMenu);
// slut
