// CHALLENGE 1

// scripts.js

import {company} from './configuration.js';
import {year} from './configuration.js';

console.log(company);
console.log(year);

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message