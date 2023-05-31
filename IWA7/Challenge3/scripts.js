const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(leoBalance)+ parseInt(sarahBalance)
const leo = `${leoName} ${leoSurname}(owed: R ${leoBalance * -1})\n`
const sarah = `${sarahName} ${sarahSurname}(owed: R ${Math.round(sarahBalance) * -1})\n` + '\n'

const total = ["\n Total amount owed: R"]
const result = leo + sarah + divider + total + owed  + '\n' + divider


    console.log(result);