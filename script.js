const muestra = document.querySelector('.muestra')
const options = document.querySelector('.colors')

muestra.addEventListener('click', () => {
  options.classList.toggle('show__options')
  muestra.classList.toggle('rotate')
})

let n = 7
let array = [2, 2]
for (let i = 2; i < n; i++) {
  array.push(array[i - 1] + array[i - 2])
}

console.log(array.join(' '))
