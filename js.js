// JavaScript

console.log("print");

const x = 10

function sqr (x) {
    return x * x
}
console.log(sqr(2))

function anArgument () {
    return Math.random()
}

const sqr1 = x => x * x

// n = n * (n-1) * (n-2) * ... 1
// 1! = 1
// 2! = 2 * 1!
// 3! = 3 * 2!
// 4! = 4 * 3!
// ...
// n! = n * (n - 1)!

const fact = n => {
    if (n === 1) {
        return 1
    }
    return n * fact(n - 1)
}

const factIter = n => {
    let res = 1
    for (let i = 2; i <= n; i++) {
        res *= i
    }
    return res
}

// console.log( fact(2), fact(3), fact(4), fact(5)  )
// console.log( factIter(2), factIter(3), factIter(4), factIter(5)  )

// [a, b]  Գումար [a,b] միջակայքի թվերի գումարը

const intervalsumIter = (a, b) => {
    let result = 0
    for (let i = a; i <= b; i++) {
        result += i
    }
    return result
}

const intervalsumRec = (a, b) => {
    if (a > b) {
        return 0
    }
    return a + intervalsumRec(a + 1, b)
}

const intervalsumRec1 = (a, b) => {
    if (a > b) {
        return 0
    }
    return b + intervalsumRec1(a, b - 1)
}

// console.log(
//     intervalsumIter(1, 36),
//     intervalsumRec(1, 36),
//     intervalsumRec1(1, 36) )

//////////////////
// const sum = (a, b) => {
//     let result = 0
//     for (let i = a; i <= b; i++) {
//         result = result + i
//     }
//     return result
// }

// const prod = (a, b) => {
//     let result = 1
//     for (let i = a; i <= b; i++) {
//         result = result * i
//     }
//     return result
// }

const _sum = (x, y) => x + y
const _prod = (x, y) => x * y
const _sqrPair = (x, y) => x + y * y

const gorc = (a, b, action, initialValue) => {
    let result = initialValue
    for (let i = a; i <= b; i++) {
        result = action(result, i)
    }
    return result
}

const sum = (a, b) => gorc(a, b, _sum, 0)
const prod = (a, b) => gorc(a, b, _prod, 1)
const sqrPair = (a, b) => gorc(a, b, _sqrPair, 0)

//console.log( sum(3, 5), prod(3, 5), sqrPair(3, 5) )


const ajax = (url, callback) => {
    const response = {
        status: "ok",
        data: 10
    }

    const afterTimout = () => {
        callback(response)
    }

    setTimeout(afterTimout, 2000)
}

const cb = (result) => console.log(result)

console.log('start')

ajax('https://mydomain.com/asdasd.php', cb)

console.log('end')*/

/*const f = () =>{
    let innerValue = 0
    return (tiv) =>{
        if(typeof tiv !== 'undefined'){
            innerValue += tiv
            return null 
        }
        
        return innerValue
    }
}
const pat = f() 

// console.log(pat.toString())

 
console.log(pat(4))
console.log(pat(5))
console.log(pat(10))
console.log(pat())*/



function IWantToWork(){
    this.count = 0;
    setInterval(function increase(){
        alert(this.count++);
    }, 1000);
}
var iWillWork = new iWillWork*/

//const A=[7,8,9,10]
//console.log(A)
const sumArray = (massiv) => {
    let result=0
    for(let i=0; i<massiv.length; i++){
        result += massiv[i]
    }
        
    return result

}
const sumArray = (massiv) =>{
    if(massiv.length === 0){
        return 0
    }
    return massiv[0] + sumArray(massiv.slice(1,))
}
//console.log(sumArray(A))

console.log(A.unshift(5))
A.push(11)
console.log(A)

const f = () => {
    return () => {
        console.log('inch vor ban')
    }
}

const pat = f()
//console.log(pat.toString())
pat()
function parz(n){
    boolean b=true;
    if(n==1){
        console.log("parz che");
    }
    for(var i=2; i<n; i++){
        if(n%i==0){
            b=false;
        }
    }
}

var x=[5,45,5,3,26,8,90,75,34];
var y=x.every(function(a){
    return a%2==0;
});
console.log(y);

let btn=document.querySelector("#btn");
btn.addEventListener("click", function(){
    let elm=document.createElement("h1");
    elm.innerHTML="dinamic element";
    document.body.appendChild(elm);
})
///////STACK
const stackCreator = () => {
    const storage = []
    return (item) => {
        if (typeof item !== 'undefined') {
            return storage.push(item)
        } else {
            if (storage.length === 0) {
                return undefined
            }
            return storage.pop()
        }
    }
}
 const f = () => {
     let innerValue = 0
     return (tiv) => {
         if(typeof tiv !== 'undefined'){
             innerValue += tiv
             return null
         }
        
         return innerValue
     }
 }

 const pat = f();
const value = pat();
console.log( pat(4) );
console.log( pat(5) );
console.log( pat(1) );
console.log( pat(10) );
console.log( pat(30) );
console.log( pat() );*/
//console.log(pat);
  pat();

const stackCreator = () =>{
    const storage = []
    return(item) => {
        if(typeof item !== 'undefined'){
            return storage.push(item)
        }
        else {
            if(storage.length  == 0){
                return undefined
            }
            return storage.pop()
        }
    }
}

const myStack = stackCreator()
myStack(3)
myStack(1)
myStack(4)
myStack(1000)
console.log(myStack(5))

const booleanToggler = () => {
    let innerValue = false
    return () =>{
        innerValue = !innerValue
        return bool 
    }
}
// function MyClass(){
//     var item = 5;
//     this.getItem = function(){
//         return item;
//     }
// }

// var p = new MyClass();
// console.log(p.item);
// console.log(p.getItem());
const max = (x, y) => {
    if(x > y) {
        return x
    }
    else {
        return y
    }
} 

console.log(max(max(max(max(88,9),14),142), 501))
