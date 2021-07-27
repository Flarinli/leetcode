let classNames = [
  'header',
  'menu',
  'menu-item',
  'menu-item',
  'menu-item',
  'footer',
  'menu',
  'link',
  'link',
  'link',
  'link',
]
// true result = ['link', 'menu-item', 'menu', 'header', 'footer']

let classNamesCount = {}

for (let i = 0; i < classNames.length; i++) {
  if (classNamesCount[classNames[i]]) {
    classNamesCount[classNames[i]]++
  } else {
    classNamesCount[classNames[i]] = 1
  }
}

result = Object.keys(classNamesCount).sort(
  (a, b) => classNamesCount[b] - classNamesCount[a]
)
console.log(result)
