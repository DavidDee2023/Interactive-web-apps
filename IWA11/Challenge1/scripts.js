// script.js

const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits .count');
const donuts1= order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = document.querySelector('.status dd');

const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = document.querySelector('[data-key="biscuits2"]');
const donuts2 = document.querySelector('[data-key="donuts2"]');
const pancakes2 = document.querySelector('[data-key="pancakes2"]');
const status2 = document.querySelector('[data-key="status2"]');

const order3 = document.querySelector('[data-key= "order3"]');
const biscuits3 = document.querySelector('[data-key="biscuits3"]');
const donuts3 = document.querySelector('[data-key="donuts3"]');
const pancakes3 = document.querySelector('[data-key="pancakes3"]');
const status3 = document.querySelector('[data-key="status3"]');

biscuits1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1 = order1.status == 'true' ? 'Delivered' : 'Pending';

biscuits2= order2.biscuits,
donuts2 = order2.donuts,
pancakes2 = order2.pancakes,
status2 = order2.status ? Delivered : Pending

biscuits3 = order3.biscuits,
donuts3 = order3.donuts,
pancakes3 = order3.pancakes,
status3 = order3.status ? Delivered : Pending