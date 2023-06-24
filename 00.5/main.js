"use strict";

const res = document.getElementById('res')
const ol = document.createElement('ol')

const nToReplace = {
  3: 'fizz',
  5: 'buzz',
  7: 'woof',
  15: 'fizzbuzz', // Mcm de 3 y 5
} 

let numbers = Object.keys(nToReplace)
numbers = numbers.map((n) => parseInt(n))
numbers.sort((a,b) => b-a);

let found

for (let i = 1; i <= 100; i++) {
  found = false
  for (const n of numbers) {
    if (i % n == 0) {
      ol.innerHTML += `<li>${nToReplace[n]}</li>`
      found = true
      break
    }
  }
  if (!found) ol.innerHTML += `<li>${i}</li>`
}

res.appendChild(ol)