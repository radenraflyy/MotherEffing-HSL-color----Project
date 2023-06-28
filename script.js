const hsl = document.querySelector('.effing')
const outputHsl = document.querySelector('.output-hsl')
const changeBg = document.querySelector('#change-bg')

const hexToHsl = (hex) => {
  // Menghapus tanda '#' dari nilai hexadesimal
  hex = hex.replace('#', '');

  // Mengkonversi hexadesimal menjadi komponen RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Menghitung komponen HSL
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;

  if (max === min) {
    h = 0; // Akan menjadi NaN ketika diubah menjadi HSL(a)
  } else if (max === r) {
    h = 60 * ((g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = (max - min) / (max + min);
  } else {
    s = (max - min) / (2 - max - min);
  }

  // Mengonversi nilai HSL ke dalam format yang lebih umum
  h = Math.round(h);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

hsl.addEventListener('input', () => {
const selectedColor = hsl.value;
const hslColor = hexToHsl(selectedColor);
changeBg.style.backgroundColor = hslColor
outputHsl.textContent = hslColor
});
