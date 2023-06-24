// loops practice
// for loops

// for(i=1; i<10; i++)
//     console.log("hlo")

    // while lpp

    // a = 0
    // while(a < 10)
    // {
    //     console.log(a,"san")
    //     a++
    // }

    // do while loop

//     i = 10
//     do{console.log(i,"sanj")
//     i++
// }
// while(i<20)

//  break;

// for(i=0; i<5; i++){
//     if(i==3)
//     break;
//     console.log(i,"s")
// }



// continue

// for(i=20; i > 10; i--){
//     if(i == 15)
//         continue;
//         console.log(i,"c")
// }

// function & diclaration

// function sumOfTwo(a, b){
//     c = a + b
//     console.log(c);


// }

// sumOfTwo(1,2);

// function san(a,c){
//     b = a + c
//     console.log(b)
// }
// san(3,5);


// return

// function sj(c,d){
// return c + d
// }
// z = sj(3,5)
// console.log(z);

//  function expressn

// let san76 = function(){
//         a = 10;
//         b = a - 9;
//         return b;
// }
// san76()
// console.log(san76());



// let anv = function(){
//     a = 40;
//     b = a / 10;
//     return a;
// }

// console.log(anv());

// let san = function (){
//         a = 5
//         b = 10
//         return (a + b)
// }
// console.log(san());



//  array

// let arr = [1,2,4,5]
//     arr.push(666)
// console.log(arr)
// arr[1] = 6
// console.log(arr)

// wap to orint poped num
// arr = [1,2,3,6,5,4,]

// z = arr.pop();
// console.log(z)

//  length odf the array

// arr = [1,2,23,4,5,6]

// console.log(arr.length)


//  wap to find the index of given array

// arr = [1,4,7,8,5,2,3]

// ind = 0

// for(i = 0; i<=arr.length-1; i++){
//     if(arr[i]===4){
//     ind = i;

// break;
// }
// }
// console.log(ind)


// to sort out array
// arr = [1,4,7,8,5,2,3]
// arr.sort()
// console.log(arr)

//  to sort out properly

// let fun = (a,b) =>{
//     return a - b;
// }
// a = [1,4,7,8,5,2,3]
// a.sort(fun)
// console.log(a)

// array indexof

// agug= [1,4,7,8,5,2,3]
// console.log(agug.indexOf(5))


// to remove the middle of array number

// a = [1,4,7,8,5,2,3]
// a.splice(1,1)
// console.log(a)

// wap sum of the array numb

// let a= [1,4,7,8,5,2,3]

// sum = 0

// for(i=0; i<a.length; i++)

// sum = sum+a[i]

// console.log(sum);
//  for of loop array

// arr = [1,4,7,8,5,2,3]

// let sum = 0
// for(item of arr){
//     sum += item
// }
// console.log(sum)



//  for each loop in array
// arr = [1,4,7,8,5,2,3]
// let sum = 0

// function fun (item){
//     sum+= item
// }

// arr.forEach(fun);
// console.log(sum)

// forEach of loop printing array

// arr = [1,2,3,4,5,6]

// function myfun(item,index,arr){
// console.log(item)
// }
// arr.forEach(myfun);


//for to print array items

// arr = [1,2,3,4,5,6]

// for( item of arr){
//   console.log(item)
// }
//  Q1. function to print all elements of array

// arr = [1,2,3,4,5,6]

// function myfun(item,index,arr){
//     console.log(item)
//     }
//     arr.forEach(myfun);
    

//  Q2. function to print all element of array using forof loop

// arr = [1,2,3,4,5,6]

// for( item of arr){
//     console.log(item);
// }




//  working

// const numRotation = 4;
// const sampleArray = [1,2,3,4,5]

// console.log(numRotation);
// console.log(sampleArray);



// for(let i = 0; i<numRotation; i++){
//     // console.log(sampleArray[i]);
//     let splicedItem = sampleArray.shift(0,1);
//      sampleArray.push(splicedItem)
// }
// console.log(sampleArray);


// let input = "abcab"

// let count = 0;
// for(let i =0; i<input.length; i++){
//     let newStr = '';


//     for(let j = i; j<input.length; j++){
//         newStr = newStr + input[j];


//        let x = newStr[0]
//        let y = newStr[newStr.length-1] 
//                 if( x == y ){
//                 console.log(newStr);

//                 count++;
//             }


//         }
//     }


// console.log(count);

// let a = 5;


// let myFun  = (a) => {
//     if(a == 0) return a;
//     return a + myFun(a-1)
// }
// console.log(myFun(5));

function myFun (a){
    if(a == 0) return a;
    return a + myFun(a-1);
}
console.log(myFun(10));


class Student {
    constructor (name,no){
        this.name = name;
        this.no = no;
    }
    getName(){
        return this.name;
    }
}

class myClass extends Student{
    constructor(x,y){
        super('lol', 0)
        this.x = x;
        this.y=y;
    }
}

let m = new myClass(9,8)
console.log(m);

let st = new Student ('san',1);
console.log(st);
console.log(st.getName());