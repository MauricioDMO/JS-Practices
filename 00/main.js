"use strict";

const res = document.getElementById('res')
const ul = document.createElement('ol')

for (let i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)) ul.innerHTML += `<li>fizzbuzz</li>`
  else if (i % 3 == 0) ul.innerHTML += `<li>fizz</li>`
  else if (i % 5 == 0) ul.innerHTML += `<li>buzz</li>`
  else ul.innerHTML += `<li>${i}</li>`
}

res.appendChild(ul)