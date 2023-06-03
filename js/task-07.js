const fontSizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  text.style.fontSize = fontSize;
});