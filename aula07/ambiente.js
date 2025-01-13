/*
  ARRAY
"Um array é uma variável composta que tem vários elementos. Cada elemento é composto por seu valor e por uma chave (key) de identificação".  
- Guanabara, Gustavo.

*/

let num = [5,4,2,1]
num[4] = 6 // Para add mais elementos. "Colocar o número 6 na posição 3"
num.push(7) // Adiciona, mas não especifica a posição que o elemento irá ocupar (add no fim)
num.unshift(10) //Adiciona o elemento no início e tbm não especifica a posição
num.sort() // Todos elementos em ordem crescente

console.log(num)
console.log(`Existem ${num.length} elementos neste vetor`) // Quantidade total de elementos
console.log(`O primeiro valor do vetor é ${num[1]}`) // Mostra o valor do elemento que está na posição indicada dentro das []

