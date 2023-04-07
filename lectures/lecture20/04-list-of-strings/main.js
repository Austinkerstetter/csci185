const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
let i = 0;
while ( i < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[i]}!</p>`);
    ++i;
}
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[0]}!</p>`);
// What do you want to repat??\
// insertAdjacentHTML statement
// How  long do you want to repeat it?
// 13
// names.legth
// What do you change each time?


// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);
