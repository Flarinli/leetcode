const iWantToGet = (amountRequired, limits) => {
  const collect = (amount, nominals) => {
    if (amount === 0) return {}
    if (!nominals.length) return

    let curNominal = nominals[0]
    let availableNotes = limits[curNominal]
    let notesNeeded = Math.floor(amount / curNominal)
    let numberOfNotes = Math.min(availableNotes, notesNeeded)

    for (let i = numberOfNotes; i >= 0; i--) {
      let result = collect(amount - i * curNominal, nominals.slice(1))
      if (result) {
        return i ? { [curNominal]: i, ...result } : result
      }
    }
  }
  let nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a)

  return collect(amountRequired, nominals)
}
const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 }
console.log(iWantToGet(1000, limits)) // { '1000': 1 }
console.log(iWantToGet(500, limits)) // { '500': 1 }
console.log(iWantToGet(120, limits)) // { '30': 4 }
console.log(iWantToGet(275, limits)) // undefined
console.log(iWantToGet(50000, limits)) // undefined
