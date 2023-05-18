const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

let primaryValid = typeof (primaryPhone)  === 'number'
let secondaryValid = typeof parseInt(secondaryPhone) === 'number'

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )