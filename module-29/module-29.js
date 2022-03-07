
// class-1 
var firstName = 'HAMED';
var lastName = 'HASAN';

if (firstName.toUpperCase() == lastName.toUpperCase()) {
    // console.log('okk')
}

// class-2
// 29-2 Apply Search includes, indexOf, startswith, endswith

let products = [
    'dell high quality laptop',
    '1dell high quality laptop',
    'high quality pc',
    'dell high laptop quality',
    'dell high power quality'
]

const search = 'laptop';
const output = [];
// indexOf 
for(const product of products){
    if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        output.push(product)
    }
}
// console.log(output)
// includes 
for(const product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        output.push(product)
    }
}
// console.log(output)
// start with 
for(const product of products){
    if(product.toLowerCase().startsWith(search.toLowerCase())){
        output.push(product)
    }
}
// console.log(output)
// ends with 
for(const product of products){
    if(product.toLowerCase().endsWith(search.toLowerCase())){
        output.push(product)
    }
}
// console.log(output)

// class-3
// 29-3 How to split, slice, substr, substring, concat, join

// split 4 ways
const split = 'bismillah he allah hu akbar';
// const result = split.split('');
// const result = split.split(' ');
// const result = split.split(' ');
// const word = result[2]
// const word = split.split('', 9)
// console.log(word)

// slice 2 ways
const slice = 'bismillah he allah hu akbar';
// const result = slice.slice(0,22);
const result = slice.slice(-9,-5);
// console.log(result)

// substr 
const aString = 'bismillah he allah hu akbar';
console.log(aString.substr(0, 1));  
console.log(aString.substr(1, 0));   
console.log(aString.substr(-1, 1));  
console.log(aString.substr(-3));    
console.log(aString.substr(1));    
console.log(aString.substr(20, 2)); 

// substring 
const substring = 'bismillah he allah hu akbar';
console.log(substring.substring(0,9))

// concat 
const concat = 'bismillah he allah hu akbar';
const concat1 = 'la ilaha';
const results = concat.concat(concat1);
// console.log(results)

// join 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(",");
// console.log(text)

// class-4
// 29-4 Check an Array using isArray, indexOf, includes, concat

function megaFriend(friends){
    if(Array.isArray(friends)){
        console.log('yesssss')
    }
    let big = friends[0];
   for(const friend of friends){
    if(friend.length > big.length){
        big = friend;
    }
   }
   return big;
}
let myFriend = ['ri','sayed','rifa','borhanuddin','alifa']
let outputs = megaFriend(myFriend);
console.log(outputs)

// indexOf 
if(myFriend.indexOf('baby') != -1){
    console.log('here')
}else{
    console.log('nothing')
}
// includes
if(myFriend.includes('baby')){
    console.log('here')
}else{
    console.log('nothing')
}

// class-5 
// 29-5 Get part of an array and insert elements using slice, splice
// slice 
const sliced = [10,29,22,293,94,20];
const res = sliced.slice(2,5);
console.log(res)

// splice 
const spliced = [39,28,30,53,66,42,4332,23,34];
const sResult = spliced.splice(1,4,43,34,323,323);
console.log(sResult);
console.log(spliced)

// class-6
// sort 
const sorted = [23,2,43,9,38,273,23,1,5];
const sortResult = sorted.sort(function(a,b){
    // return b-a
    return a-b;
});
console.log(sortResult)

const sortName = ['jamen','amena','shgg,','cameroon'];
const nameResult = sortName.sort().reverse();
console.log(nameResult)

// class-7 
// 29-7 Unlimited parameters to a function using arguments
function multipleNumber(num1,num2){
    let sum = 0;
    for(const param of arguments){
        sum = sum + param
    }
    return sum
}
console.log(multipleNumber(10,20,30,32,43,32))
function multipleNumber(firstName,lastName){
    let name = '';
    for(const param of arguments){
        name = name + param + ' '
    }
    return name
}
console.log(multipleNumber('hamed','hasan','sweet apo rifa'))

// class-8 
// 29-8 Different types of Error object and explore Try-catch

// class-9
// 29-9 A simple introduction to Date object in JavaScript
// Js date time handle > web: moment.js
// Learn date object
// Learn utc & gmt what is it
const array = ["121", "12", "1", "112", "111"];

// console.log(array.sort());