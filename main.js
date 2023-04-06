
//Arrays

const firstArray = [];  //creates an empty array just like java
let secondArray = new Array();    //another way of doing the same thing

firstArray[0]; //access value at first index- undefined as it is an empty array
firstArray[0] = "Superman"; //assigns value to array index

firstArray[12] = "superman12";  //can assign at any value

firstArray; //displays entire array as output

secondArray = ["1","2","3","4"];    //another way to add data to an array

const [x,y] = [1,2];    //assings multiple values at the same time
x;  //1
y;  //2

firstArray.length;  //returns length (use dot trick)

firstArray.pop();   //returns last value of array and removes it from array (same as stack)

secondArray.concat(firstArray); //adds firstArray onto secondArray

secondArray.join(); //turns second array into a string
secondArray.reverse();  //returns reverse of original array
//use dot trick to find additional methods that array can perform

secondArray.indexOf("Superman12");  //can find items index


//Sets


let set1 = new Set();   //creates empty set
const set2 = new Set([1,1,1,1,1,1,1]);  //assigns values upon initialization

set1.add([1]).add([1]); //treats objects as individual, added twice on one line

const Array1 = [set1];  //converts set to Array
Array1; //outputs array

let array = [1,2,3];
const strong = new Set().add(array);

array = null;   //remove reference to original
array = [strong][0];
//array still exists within set so it is not garbage collected

const weak = new WeakSet().add(array);
//can only add non-primitive data types

weak.delete(array); //can delete array within set


//Maps


const map1 = new Map(); //created same as other objects above
map1.set(1,'1').set(2,'2');
map1.get(2);    //returns '2'

map1.delete(2);

Array.from(map1);    //Arrays.from method to convert to array
//weak maps exist just like weak 

//logic

let condition = true;
if(condition){
    //run code
}

else{
    //run else code
}
//if/else works just like java

//condition ? (//code if true) : (//code if false);

//switch operator

let number = 1;

switch(number){
    case 1:
        //run case 1 code
    break;
    case 2:
        //case 2 code
        break;
    case 3:
        //case 3 code
        break;
}

while(condition){
    //code here
}
//while loops just like java

do{
    //run code here
}while(condition);
//do...while loop example

for(let i = 0; i < 10; i++){
    //run loop code here
}

//loop through set/maps
for(const value of set1){
    //do something with each value of set here
}


//callbacks

function sing(song){
    console.log("Song")
}

function sing2(son, callback){
    console.log("song");
    callback(); //exsts as a function that is called within another function
}

//forEach()

const colors = ['red','blue','green'];
colors.forEach((color,index) => {   //allows tracking of both an array value and index
    console.log(`color at ${index} is ${color}`);
});

//getting elements

const type = 1;
typeof type;    //returns type of given veriable/const

//can use document.body/images/links/anchors/forms to get various things

const h1 = document.getElementById('title');    //retrieves elements with pre-set ids
h1.length;  //gives title length

document.querySelector('#bats');    //gets first element with that id
document.querySelectorAll('#bats'); //gets all elements with that id

//jQuery uses queryselector and queryselectorall

//setting attributes

Element.setAttribute('id','attribute'); //example formatting
Element.id; //returns id

//to create element
const element = document.createElement('la');

//to create node of text
const textNode = document.createTextNode('flash');

//can make a function to do this for you

//updating css
//makes use of camel case properties

element.style.display = 'none'; //removes element from display

element.style //use dot trick to find changes that can be made

//change styles on the fly with caution so as to not change too many elements unintentionally


function selfDestruct(){
    console.log("boom");
}
//above is the required design for callback functions

//use caution with callbacks

const clark = { name: 'Clark' };
const bruce = { name: 'Bruce' };

sayHello.call(clark);
<< 'Hello, my name is Clarke'

sayHello.call(bruce);
<< 'Hello, my name is Bruce'
//creating call methods

//can cache memory to save time
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x*x;
    }
    return square.cache[x]
    }

//temp values will be cleaned up when function in which they are used is over
//can use strict mode to ensure better manaement but with caution of other code

//a promise is the future result of an asynchronous operation


//promise creation example
const promise = new Promise( (resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});

//can also chain promises
login(userName)
.then(user => getPlayerInfo(user.id))
.then(info => loadGame(info))
.catch( throw error)

//Async functions need prefix
async function loadGame(userName) {

    try {
    const user = await login(userName);
    const info = await getPlayerInfo (user.id);
    // load the game using the returned info
    }

    catch (error){
    throw error;
    }
}

//closure example
function outer() {
    const outside = 'Outside!';
    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
    }

const closure = outer();

//AJAX- asynchronous java and xml
//basic usage example:
fetch('https://example.com/data')
            .then( // code that handles the response ) 
            .catch( // code that runs if the server returns an error )

//more complex example
const url = 'https:example.com/data';

fetch(url)
.then((response) => {
if(response.ok) {
return response;
}
throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )
            
//can also redirect responses based on received input
//simply uses multiple .thens in series

//can make use of HTTP methods:
const request = new Request('https://example.com/data', {
method: 'GET',
mode: 'cors',
redirect: 'follow',
cache: 'no-cache'
});
       
//more complete example
const url = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset' : 'utf-8', 'Accept-Encoding':'gzip,deflate' })

const request = (url,{
headers: headers
})

fetch(request)
.then( function(response) {
if(response.ok) {
return response;
}
throw Error(response.statusText);
})
.then( response => // do something with response )
.catch( error => console.log('There was an error!') )

//have to ensure data WILL be collected for .thens to take effect
//can use same tactic to send info

//standard is constantly being upgraded, expect maintenance