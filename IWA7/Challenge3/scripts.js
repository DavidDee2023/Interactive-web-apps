const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(leoBalance )+ parseInt(sarahBalance)
const leo = `${leoName} ${leoSurname} (owed: R ${leoBalance} )\n`
const sarah = `${sarahName} ${sarahSurname} (owed: R ${sarahBalance}) \n`
"\n"
const total = "\n\Total amount owed: 'R'"
"\n"
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)