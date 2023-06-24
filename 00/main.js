"use strict";

const res = document.getElementById('res')
const ol = document.createElement('ol')

for (let i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) ol.innerHTML += `<li>fizzbuzz</li>`
  else if (i % 3 == 0) ol.innerHTML += `<li>fizz</li>`
  else if (i % 5 == 0) ol.innerHTML += `<li>buzz</li>`
  else ol.innerHTML += `<li>${i}</li>`
}

res.appendChild(ol)