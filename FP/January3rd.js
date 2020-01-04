const data = [10,2,3,4,5,6,7,8,9];
let owen = 'owen';
// data = [1,2,3,4];
owen = 'thomas'; //?

let empty = [];
for(let i of data){
   empty.push(i + 10)
}

empty

empty = [];

let numbe = 8;

const shittyWayToChangeNumber = () => numbe + 10;

numbe = '10';

shittyWayToChangeNumber() //?

const doubleIt = x => x * 2;

const add = x => y => x + y;

const addU = (x, y) => x + y;

addU(10, 20) //?
add(10)(20) //?

const add100 = add(100);



const f = [10];
const g = [20];


[1,2,3,4].map(x => doubleIt(x)) //?


// data.map(x => [x]) //?