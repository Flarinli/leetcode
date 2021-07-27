// Нахождение гласных в строке

const findVowels = (str) => {
  const vowels = 'aeiouy'
  let counter = 0
  for (let char of str) if (vowels.includes(char)) counter++
  return counter
}

console.log(findVowels('hello'))
console.log(findVowels('why'))

const findVowels2 = (str) => {
  matched = str.match(/[aeiouy]/gi)
  return matched ? matched.length : 0
}
console.log(findVowels2('hello'))
console.log(findVowels2('why'))
