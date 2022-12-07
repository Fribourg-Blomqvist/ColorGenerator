function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const colorString = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = colorString;
  document.body.innerHTML = "<h1>" + colorString + "</h1>";
}

setInterval(generateColor, 2000);
