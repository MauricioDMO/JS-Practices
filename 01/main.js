"use strict";

const res = document.getElementById('res')
const button = document.getElementById('ev-button')
const [input1, input2] = document.querySelectorAll("input")

const isAnagram = (input1, input2) => {
  let [str1, str2] = [input1.value, input2.value]

  if (!(str1.length === str2.length)) {
    res.innerHTML = "No es anagrama"
    return
  }

  str1 =  str1.toLowerCase().split('').sort()
  str2 =  str2.toLowerCase().split('').sort()

  for (let i = 0; i < str1.length; i++) {
    if (!(str1[i] === str2[i])) {
      res.innerHTML = "No es anagrama"
      return
    }
  }
  res.innerHTML = "Es anagrama"
}

input1.addEventListener('keydown', (e)=>{
  if (e.key === "Enter") e.preventDefault()
})
input2.addEventListener('keydown', (e)=>{
  if (e.key === "Enter") e.preventDefault()
})

button.addEventListener('click', (e)=>{
  e.preventDefault()
  isAnagram(input1, input2)
})