// JavaScript Document
const images = document.querySelectorAll('.image');

images.forEach(image => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const overlayText = document.createElement('div');
  overlayText.classList.add('overlay-text');
  overlayText.innerText = image.querySelector('img').alt;
  
  overlay.appendChild(overlayText);
  image.appendChild(overlay);
  
  /*image.addEventListener('click', () => {
    overlay.style.opacity = 1;
  });*/
  image.addEventListener('click', () => {
    overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
   });
});