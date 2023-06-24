// // for loop
//     console.log(" enter num")
//     n = Number(require("prompt-sync")()());
//     let n = i
    // sum = 0
    // for(let i = 1; i <= 20; i+1){
    //     if(sum + i);
    //     console.log(sum);
    // }

//    let i = 2;

//    while(i <=20){
//     console.log("num" ,i)
//    i =  i*2
//    }
  

//   a = 2
//   b = 3
//    sumOfC = (a+b)

//     if(sumOfC===4)
//   console.log("yes");
//   if (sumOfC===7)
//   console.log("ok")

//   else(sumOfC===5)
//   console.log("wrong")

// let i = 10
//     while(i <= 12){
//     console.log("san",i)
//     i++
//     }


    // let i = 10
    // while(i<=20){
    // console.log("san",i)
    //     i++
    // }


    // i = 0
    // while(i >= -10){
    //     console.log("f",i)
    //     i--
    // }

    // i = 10
    // do{
    //     console.log("san",i)
    //     i--
    // }
    // while(i > 0)

    // functions & diclaration

    //  function sumOfNum(a,b){
    //       c = a+b;
    //       console.log(c)
    //  }
    //  sumOfNum(1,2);


    // WAP cm to mtr 

    // function cmToMt(a){
    // c = a*100;
    // console.log(c);
    // }
    // cmToMt(2);

//  break or stop the print

//     for(i=0; i<10; i++){
//         if(i == 5)
//         break;
//         console.log('sam',i)
// }

//  continue the print, skip the entered value

// for(i=0; i<=6; i++){
//     if(i == 4)
//     continue;

// to print vertically

// n = require("prompt-sync")()();
//          for(i=0; i <n.length; i++){
//             console.log(n[i]);
//          }

// let san = function (){
//     a = 2;
//     b = 3;
//         return(a+b)
// }
// console.log(san());


//  Q1. 
/*   Function diclaration
Function diclaration is just a regular function
(No matter where you call top of the function or bottom of the function function call works)
*/

// function example1 (){
//     console.log(" hello ");
// }
// example1();


// /*   function expression
//      It is a anonymous function inside of a variable
//      This variable does not get hoisted up to the top
//      We cam convert the function expression into ES6 arrow function 
//  */


// let example2 = function (){
//     console.log(" world ")
// }
// example2();

// //  Q2. 
// // example function expression 
//     let convertArrayFun = function (){
//         console.log("hello world");
//     }
//     convertArrayFun();

// // example above written patterned function converting to arrow function

// let convertArrayFun1 = () => console.log("hello world");
// convertArrayFun1();

// week 4 day 5 assignment
// Q1. program for printing the largest number index

// let arr = [7,5,3,9,1,6,4,8,2]

// let maxId = 0;

//     for(i=0; i < arr.length; i++){
//         if(arr[i] > arr[maxId])
//         maxId = i
//     }

// console.log(maxId);



// function arr () {
  
// n = Number(require("prompt-sync")()());
// n = [];
//     for(i = 0; i < n.length; i++);
//         n += n[i];
// }

// console.log(arr());

// const prompt = require("prompt-sync")();
// n = prompt("enter no of element in array");
// inArray = [];

// for (i = 0; i <= n; i++){
//     inArray[i] = prompt("Enter Array Element " + (i + 1) + " : ");

// }
// console.log("your input array is " + inArray);

// function maxNum (arr){
//     max = arr[0];
//     for (let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//         return [max];
    
// }

//     let arr = [1,3,4,5,6];
//     let maxValue = maxNum(arr);

// console.log(maxValue);


// vowels practice

// let s = "attainu"
// let c,i
// for(i=0; i<s.length; i++){
//     c =s[i]
//     if(c == "a" || c == "e" || c == "i" || c == "o" || c == "u"){

// console.log(c);
//     }
// }

// let s = "Attainu"
// // let c,i
// for(i=0;i<s.length;i++){
//     c = s[i]

//     if(c=="a"||c=="A"||c=="e"||c=="i"||c=="o"||c=="u")
//     console.log(c)
// }

// let sum = 0;

// for( let i =0; i<=5; i++){
//    sum = sum + i
// }
// console.log(sum)

// sumof n natural num
// console.log("enter")
// n = Number(require("prompt-sync")()());
// sum = 0
// for( let i = 1; i <= n; i++ ){
//     sum = sum + i
// }
// console.log(sum)

//  print hello worlds using arrow function
   
// function dem () {
//     for (i =0; i <=5; i++)
//     console.log("hello world")
//     }
//     dem()

// console.log("enter")
// n = Number(require("prompt-sync")()())
// {
// if(n==0){
//     console.log("niether prime nor compo num")
// }

// else if(n == 1 ){
//     console.log("niether prime nor compo num")
// }
// else {
//     for (i = 2; i<n; i++){
//         if(n%i == 0){
//             console.log("not prime")
        
//         break;
//         }
//     }

// if(i == n)
//     console.log("this is prime num")
// }
// }

// console.log("enter number")

// n = Number(require("prompt-sync")()());
// {
//     if(n==0)
//     console.log("nither prime nor composit number")
// else if(n == 0 )
// {
//     console.log(n, "this is not a prime number")
// }
// else if(n==1)
// {
//         console.log("this is not a prime number")
// }
    
// else{
//     for(i=2; i<n; i++){
//     if(n%i==0){
//         console.log("this is not a prime number")
//       break;
// }
// }
//     if(i==n)
//         console.log("this is a prime number")
// }
// }

    // to print all array vertically

//     ar =  [1,2,3,4,5]
//     console.log(ar)

//     //  to print vertically
//     a = [1,2,3,4,5]

//     for( item of a){
//     console.log(item)
// }

// //  to print array with function
// ar =  [1,2,3,4,5]
// function myf (item,index,ar){
//         console.log(ar)
// }
// ar.forEach(myf)

   
//  leetcode problem
// nums = [1,1,3,2]
// nums = [1,1,2]

// var removeDuplicates = function(nums) {
//     let k =0;
//      for(i=0; i<nums.length; i++){
//          if(nums[k] === nums[i]){
//             continue;
//      }
//          k= k+1
//          nums[k] = nums[i];
//      }
//      return [k+1]
//     }
// nums = [1,1,2,3,4]

 
//     var removeDuplicates = function(nums) {
//         const set = new Set(nums);
//         const newArr = Array.from(set);
        
//         for (let i = 0; i < newArr.length; i++) {
//             nums[i] = newArr[i];
//         }
//         return newArr.length;
//     };

//     console.log(removeDuplicates(nums))

// arr = [1,2,3,4]
// for(i =0; i<arr.length; i++){
// if(arr.indexOf(2) === arr.indexOf(4))
//         console.log(true)
//         else 
//         console.log(false)

// }
// console.log(arr);
// console.log(arr)

// arr.push(4)
// console.log(arr)
// nums =[ 0,0,1,2]

// var moveZeroes = function(nums) {
//         moveZero = 0;
//        for(i = 0; i < nums.length; i++){
//            if(nums[i] != 0){
//                nums[moveZero] = nums[i]
//                moveZero++
//            }
//        }
//         for(let i = moveZero; i < nums.length; i++){
//             (nums[i])=0
//         }
//     }l
//     nums =[ 0,0,1,2]
//     console.log(moveZeroes)

// Q1. week 5 day 4 cc 4
// sanjay-acharya-au50
// objects

// var student = { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12,
//     }
// console.log(student["name"] , student["rollno"] , student["sclass"])
 

//  week5 day 5 assignment
//  Q1. write a function to sort given array
// sanjay-acharya-au50

// arr =  [8,5,6,3];     // <--- given input array

// function sortArray() {
//     arr.sort();
// }

// c = arr.sort();
// console.log(c);

// arr =  [8,5,6,3];     // <--- given input array

// function aa (bb) {
//    return bb.sort()
// }
// c = aa([3,2,1])
// console.log(c);


// function aa (bb) {
//     return bb.sort()
//  }
//  d = [8,5,6,3]
//  c = aa(d)
//  console.log(c);

/* 
    week5 day 5 assignment
    sanjay-acharya-au50
    Q1. write a function to sort given array

*/


// function sortArray ( arr ) {
//     return arr.sort();
// }
// input = [8,5,6,3]     // <------ given input
// let printOutput = sortArray(input)
// console.log(sortArray(printOutput))


// arr = [1,2,3,4,5,6]

// console.log(" given input -> " , arr)

// function multiplyArr (){

// let newArr = arr.join("") 

// return newArr * 10
// }
// output = multiplyArr(arr)
//  console.log(" output -> " , output)


// console.log(str)

// console.log(typeof arr)
// console.log(typeof str)

// input = [1,1,2,3,4,5,2,6]

// console.log(arr.indexOf(2))
// console.log(arr.lastIndexOf(2))
// for(i = 0; i < input.length; i++ ){
//     a = input.indexOf(i)
//     b = input.lastIndexOf(i)
//     if(a==b){
//        console.log(input.indexOf(i))
//     }

// Q-1) Write a function to create an object, that calculates the number of times each element occurs in 
// the following array. 
// Input: [“Orange”,“Orange”,”banana”,”apple”,”apple”,”banana”,”apple”,”apple”,
// ”apple”,”apple”,“Orange”,“Orange”,“Orange”,“Orange”,”banana”] 
// Output: { Orange:6 apple:5 banana:3 }
// Marks distribution:


// function cal (input) {
 

//     for(i = 0; i < input.length; i++){
//         let orange = 0;
//         if(input[i] == "orange"){
//             orange++
//             // console.log(orange)
//         }if(input[i] == "apple"){
//             let apple = 0;
//             apple++
//             // console.log(apple)
//         }
//     }
// }
// input = ["orange","apple","orange"]

// console.log(cal(["orange","apple","orange"]))

// arr = ["hello","hello","hello","jjjj"]
//     var c = 0;
//     for(i = 0; i < arr.length; i++){
//         if(arr[i] == "hello"){
//             c++
//         }
//     }
//     console.log(c)




// let obj = {} 
// let orange = 1;
// let banana = 1;
// let apple = 1;

// function cal (a){
   
    
//     for( i = 0; i<=input.length; i++ ){
//         if(input[i] == "Orange"){
//             obj.orange = orange++
//         }
//         if(input[i] == "banana"){
//             obj.banana = banana++
//         }
//         if(input[i] == "apple"){
//             obj.apple = apple++
//         }
//     }
// }
// a = input = ["Orange","Orange","banana","apple","apple","banana","apple","apple","apple","apple","Orange","Orange","Orange","Orange","banana"] 

// cal(a);
// console.log(obj);


// Q1.  write a function to sort an array of numbers


// function sortArr (arr) {
//     return arr.sort();
// }
// arr = [8,5,6,3];
// a = sortArr(arr);
// console.log(a)



// function san() {
//     console.log(a)
// var a = 6
// }
// var a = 5
// san(a);


// let  arr = [4,8,1,4,2,9,10,7,3,6,5]

// let newArr = arr.slice(2,9)
// console.log(newArr)
// console.log(arr)

// a = 5
// stars = ""
// for(let i = 0; i < a; i++){
//   stars += "*"
// console.log(stars)
// }


// obj = {
//     a : "san"
// }
// d = obj.a

// console.log(d)

// arr =  [4,8,1,4,2,9,10,7,3,6,5]
// function crop () {
//     newArr = arr.splice(2,7)
//     console.log(newArr)
// }
// crop()
// console.log(arr)



// const prompt = require("prompt-sync")();
// const arrLength = 11
// const arr = [];
// for (var i = 0; i < arrLength; i++) {
//     const arrElement = parseInt(prompt("Enter element of the array : "));
//     arr.push(arrElement)
// }
// console.log(arr)
// const newArr = arr.splice(2, 7)

// console.log(newArr)
// console.log(arr)

// for each loop

// a = [1,2,3,4,5]
// function myf(item,id,a){
//     console.log(item)
// }

// a.forEach(myf)

// for of loop

// a = [1,2,3,4]
// let sum = 0
// for (let item of a){
//     sum = sum+=item
// }
// console.log(sum)


// b = [1,2,3,4]
// for (let item of b){
//     console.log(item)
// }

//  for in loop

// let obj = {
//     san : 92,
//     sa : 80
// }
// for(let item in obj){
//     console.log(" item of " +  item  + " are " +  obj[item])
// }

// let n = 5
// let i = 2;
// while(i<n){
//     console.log(i)
//     i++
// }

// while loops
// let n = 5;
// let i = 0;
//  do {
//     console.log("hello")
//     i++
//  }
// while(i<n)

// for (let item of "san"){
//     console.log(item)
// }

// for in loops (object)
// obj = { 
//     san : "man",
//     achar : "psy"
// }

// for ( let item in obj){
//     console.log(item + " of " + obj[item])
// }

// a= [1,2,3,1,4,5]
// c = a.lastIndexOf(1)
// console.log(c)

// nums = [2,7,11,15]
// target = 9

// for(let i = 0; i<nums.length; i++){
//     for(let j=i+1; i<nums.length; j++){
//         if(nums[i] + nums[j] == target){
//            console.log([i,j])
//         }
//     }
// }
// a = [2,2,1]
// for(i =0; i<a.length; i++){
//     id1 = a.indexOf(a[i])
//     id2 = a.lastIndexOf(a[i])
//     if(id1 === id2){
//     console.log(id1)
//     }
    
// }



/*

WEEK 6 DAY 5 CC 5
sanjay-acharya-au50

Q-1) Write a function to convert an array of string of numbers into a number and multiply it by 10. 
Input: [ "1", "2" , "3" , "4" , "5" , "6"]
*/

// function myfun (input) {
// input = input.join("");
// input = Number(input);
// input = input * 10
// console.log(input)
// }
// input = ['1','2','3','4','5','6']
// myfun(input);



// reverse num approach 1
// let n = 432
// console.log(n)

// n = n.toString()
// console.log(n)
// n = n.split("")
// console.log(n)
// n = n.reverse()
// console.log(n)
// n = n.join("")
// console.log(n)
// n = Number(n)
// console.log(n)


// reverse num approach 2

// function myfun (n) {
//     count = 0
//     while(n!=0){
//         rem = n % 10;
//         n = Math.floor(n / 10)
//         count = count * 10 + rem
//     }
//     console.log(count)
// }
// myfun(432)

// arr = ["san" , "san" , "man"]

// function create (arr) {
//         let obj = {}
        
//         for(let i = 0; i<arr.length; i++){
//             if(obj[arr[i]]){
//                 obj[arr[i]] += 1
//             }
//          else {(obj[arr[i]]) = 1
//          }
//         }
//         return obj
        
// }
// console.log(create(arr))


// arr = [1,2,[2,3,6],4]
// b = arr.flat()
// console.log(b)

//  craete array from user

// let len = Number(require("prompt-sync")()());
// let arr = []
// for(let i = 0; i < len; i++){
//     b = Number(require("prompt-sync")()())
//      arr.push(b)
// }
// console.log(arr)


// let student = {
//     name : "sanjay",
//     age : 25,
//     caste : "acharya",
//     mstatus : function (age) {
//         if(age > 30){
//             console.log("married")
//         }
//        else if(age < 20){
//             console.log("single")
//         }
//     }

// }
// student.mstatus(19)

//  assignment 
//  let arr = []
// let n = [1,2,3]
// console.log(n)

// n = n.join('')
// console.log(n)

// n = Number(n)
// console.log(n)

// n = n+1
// console.log(n)

// n = n.toString()
// console.log(n)

// n= n.split('');
// console.log(n)



// a = [0,1,2,3]

// // console.log(a.length)
// function plusO (a) {
//     c = a.length + 1
//     // console.log(c)
//     return a.push(c)
// }
// plusO(a)

// function inner (x){
//     if(temp > 0){
//         return temp = 50
//         console.log(temp)
//     }
// }
// const temp = 1
// inner(40)

// n = [1,2,3]
// n = n.join("")
// console.log(n)
// arr = []
// n = n % 10
// console.log(n)

// n = n+1
// // console.log(n)
// arr = arr.push(n)
// console.log(arr)

// n = [1,2,9]
// e = n.length-1[i] + 1
// console.log(e)
// console.log(e)
// if( n.pop() === 9){
//   d = n.length-1[i] +1
//     n.push(0)
// }

// a = [1,2,3]
// b = a.shift()
// console.log(b)


// var plusOne = function(digits) {

   
    
//     for(let i = digits.length-1; i>= 0; i-- ){
//         if(digits[i] < 9){
//            digits[i] = digits[i]+1
//             return digits
//         }
//         else {
//             digits[i] = 0
//         }
//     }  
//     digits.unshift(1)
    
//     return digits;
    
// };



// leetcode 66 qstion

// function digits(a) {
    
//     let n = a.length-1

//     for(let i = n; i >= 0; i--){
//     if(a[i] < 9){ 
//         a[i] += 1
//        console.log( a )
//        break
//     } else {
//         a[i] = 0;
//     }
 

//     //  [9]

//     a.unshift(1)
//     console.log(a)

// }
// }



// a = [9]
// digits(a)


// p = [1,2,3,4]
// // console.log(p.length)
//     let k = p.length
// for(let i = 0; i<=k; i++){
//     console.log(i)
// }


// y = [1,2,3,4]
//     let z = y.length-1
//     // console.log(y.length-1)
// for(let i = 1; i<=z; i++){
//     console.log(i)
// }





// a = [1,2,3,4]
//     let c = a.length-1
// for(let i = c; i>=0; i--){
//     console.log(i)
// }

// p = [1,2,3,4]
//     let d = p.length
// for(let i = d; i>=0; i--){
//     console.log(i)
// }

//  return the max sum of the array
// a = [[1,2,3],[3,6,4]]
// let maxSum = 0



// for(let i =0; i<a.length; i++){

//     let currSum = 0
//     let t = a[i]
//     for(j = 0; j < t.length; j++){
//         currSum = currSum+t[j]
//     }
//     if(currSum > maxSum){
//         maxSum = currSum
// }
// }
//     console.log(maxSum)


// Q-1) Write a function that would allow you to do this. 
// var addSix = createBase(6); 
// addSix(10); // returns 16 
// addSix(21); // returns 27 
// You can create a closure to keep the value passed to the function createBase even after the inner 
// function is returned. The inner function that is being returned is created within an outer function, 
// making it a closure, and it has access to the variables within the outer function



// function outer(){
//     val = 6
//     function inner(x){
//         console.log( x + val) 
//     }

//     return inner
// }

// input = outer()
// input(10)


//  two multiple array pushing as a one array
// a = [1,2,3]
// b = [4,5,6]

// let c = []
// for(let i =0; i<a.length; i++){
//         c.push(a[i])
// }
//     for(let j=0; j<b.length; j++){
//         c.push(b[j])

// }
// console.log(c)


// function san () {
//     function inner () {
//         console.log("hi")
//     }
//     return inner;
// }   
//  var rs = san()
// rs()

// function fun1(a){
//     function fun2(b){
//         function fun3(c){
//             return a+b+c;
//         }
//         return fun3;
//     }
//     return fun2;
// }
// var result = fun1(1)(2)(3)
// console.log(result)


// function fun1(a){
//     function fun2(b){
//         function fun3(c){
//             return (a+b)/c;
//         }
//         return fun3;
//     }
//     return fun2;
// }
// var result = fun1(10)(2)(2)
// console.log(result)


// w7 d5 Q1 cc

// var a = 1;
// function san (a){
//     return a
// }
// c = san(a)

// console.log(`variable a value is: ${a}`)


// Q2 cc
// Q-2) Write a tagged function to print the following sentence: Homework must be at least 80% to 
// ensure my future. Attendance must be at least 80% to ensure my success. 1 variable for 
// Homework/Attendance. 1 variable for 80 (percentage). 1 variable for future/success.

// let d = `Homework must be at least 80% to ensure my future.`
// let e = `Attendance must be at least 80% to ensure my success.`
// let f = `future/success near to u`

// function eligible (a ,b ){
//     if(a > 101){
//         console.log(`entered marks: ${a} is not valid`)
//     }
//     else if( b > 101){
//         console.log(`entered attendence: ${b}`)
//     }
//     else if(a < 80){
//         console.log(d)
//     }
//     else if(b < 80){
//         console.log(e)
//     }
//     else if (a > 80 && b > 80){
//         console.log(f)
//     }

// }
// a = homework marks
// b = attendence percentage

// eligible(90,90);       // <----- enter input 



// var a = 2;
// var b = 3;

// c = a;
// a = b;
// b = c;
// console.log(a,b)

// obj1 = {
//     a : 1,
//     b : 2
// }

// obj2 = {
//     a : 10,
//     b : 20
// }

// obj3 = obj1
// obj1 = obj2
// obj2 = obj1

// console.log(obj1.b)

// let obj1 = {
//     a : 1,
//     b : 2
// }
// let obj2 = obj1;

// function editObj1(a){
//     obj2 = obj1
//     obj2.c = a
//     console.log(obj2)
//     console.log(obj1)

// }
// editObj1(3)
// console.log(obj1)


// let a = {
//     nm : "san"
// }

// let b = {...a}
// b.c = 4
// console.log(a)  
// console.log(b)



// ransomNote = "aa"
// magazine = "bbbb"
// let countRansom = 0;
// for(let i =0; i<ransomNote.length; i++){
//     if(ransomNote.charAt(i) == ransomNote.charAt(i)){
//     countRansom++
//     }
// }
//     let countMagazine = 0;
// for(let i = 0; i<magazine.length; i++){
//     if(magazine.charAt(i) == magazine.charAt(i)){
//         magazine++
//     }
// }
//     if(countRansom > countMagazine){
//         console.log("TRUE")
//     }else console.log("FALSE")


// let a = ["san", "san", "man"]
// let b = {};
// for(let i = 0; i < a.length; i++){
//     if(b[a[i]]){
//     b[a[i]]+= 1;
//     }

//     else
//         (b[a[i]])= 1
        
// }
// console.log(b)
// function san () {

// let a = "aann"

// let b = {}
// for(i= 0; i<a.length; i++){
//   if(b[a[i]]){
//    b[a[i]] += 1
//   }else b[a[i]] = 1

// }
// // console.log(b)
// c = "aab"
// let d = {}
// for(i= 0; i<c.length; i++){
//   if(d[c[i]]){
//    d[c[i]] += 1
//   }else d[c[i]] = 1
 
// }
// for(items in b){
//     for(stock in d){
//         if( Object.values(d) >= Object.values(b)){
//             console.log("true")
// } 
//     else console.log("false")
// }
// }
// }
// san()


// let a = {
//     a : 5,
//     b : 6
// }
// let b = "b"
// console.log(a["b"])
// console.log(a.b)


// c = {...a}
// c.b = 5
// console.log(c)




// function cp (a){
//     b = [...a]
//     b.c = 1
// console.log(b)
// console.log(a)
// }
// cp(a)


// missing the index num


// c = a[1]
// console.log(c)

// var missingNumber = function(nums) {
//     nums = nums.sort()
//    for(let i=0; i<nums.length; i++){
//     if(nums.indexOf(i) !== nums[i]){
// console.log((i))
//     }
//    }
    
// //     if array = [0,1,2] output --> 3
// console.log( nums.length)
// }
// nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]

// missingNumber(nums);

// a = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]
// //  a = nums.sort()
// //  console.log(a)

 
// // function san (a,b) {
// //     console.log((a-b))
// // }
// // a.sort(san)
// a.sort(function (a,b) {
//     return(a-b)
// })

// console.log(a)

// template string

// console.log(" sanjay \n acharya")
// a = 5
// b = 6
// console.log(`sanjay
// acharay ${a+b}
// san`)

// onj = {
//     a:45,
//     n:4
// }

// function san () {
//     return onj.a + onj.n
// }
// console.log(`${san()}`)

//  destructuring

//  rest operator 

// f = (1,2,3,6,6,6,6,9)

// function san (a,...b){
//     console.log(a,b)
// }



// san(1,2,3,6,6,6,6,9)

//  spread opearator

// a = [1,2,3]
// b = [6,5,4]
// r = [...a,...b]
// console.log(r)


//  spread opeartor
// function san (a,b,c){

//     console.log(a)
//     console.log(b)
//     console.log(c)

// }
// c = [1,2,3]
// san(...c)


// swap two values in variable

// a = 1;
// b = 6;

// c = a;
// a = b;
// b = c;

// console.log(a)
// console.log(b)

// destructing

// var arr = [1,2,3];

// // b = a[0]
// // c = a[1]
// [c,d,e] = arr;

// console.log(c,d,e);


// obj = {
//         a:1,
//         b:2
// }
// function san (a) {
//     // var q = obj.a
//     //     r = obj.b

//     var {a,b} = obj
//         console.log(a)
//         console.log(b)

// }
// san(obj)

//  rest destruction


// obj = {
//     a:1,
//     b:5,
//     c:6
// }
// function san (){
//     var {a, ...d} = obj
//     console.log(a,d)
// }
// san(obj)

// console.log(obj)



//  spread destruction

// obj = {
//     a:1,
//     b:5,
//     c:6
// }
// var {...d} = obj
// console.log(d)

//  set timeout

// function san (a){
//     console.log(a, "hello")
// }
// function man (){
//     a = "hi"
//     return san(a)
// }


// setTimeout(function (){
//     san("hi")
// }, 2000)

//  set interval

// function san () {
//     console.log("hi")
// }
// setInterval(san,1000)



//  map method 
// function san (value,index,arr){
//    return value+5;
// }
// a = [1,2,3]
// c = a.map(san)
//     console.log(a)
//     console.log(c)


//  map antother approach

// a = [ 1,2,3,4]

// c = a.map(value => value+5)

// console.log(c)



//  filter

// function san (val,id,arr){
//     return val % 2 == 0
// }
// a = [1,2,3,4,5,6]
// c = a.filter(san)
// console.log(c)

// a = [1,2,3,4,5,6]
// c = a.filter(val => val % 2 == 0)
// console.log(c)


//  reduce method

// function san (accc,valu,id,arr){
//     return accc + id
// }
// m = [1,2,3,4]
// f = m.reduce(san)
// console.log(f)

// a = [1,2,3,4]

// c = a.reduce((acc,val,ind) => acc+val)
// console.log(c)


// Q-1) Take an integer array(length >10) as input from the user, and use reduce function to find the 
// average of the whole array

// console.log("enter numbers to create a array")
//     let arr = []
// for( let i = 0; i<15; i++){
 
//     d = Number(require("prompt-sync")()())
//    arr.push(d)
// }
// console.log("created array = ",arr) 

// c = arr.reduce((acc,val,id,arr) => acc+val ) / arr.length
// console.log("average of the whole array is :",c)

// a = [10,10,10]
// console.log(a.length)
// u = a.reduce((acc,val) =>  acc+val ) / a.length
// console.log(u)


// const arr = [1, 2];
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;

// console.log(average);


//  n = 5
// for(let i=0;i < n;i++){    // O(n)
// for(let j=0;j < n;i++){  // O(n)
// // for(let m=0;m<n;i++)    // O(n)


// console.log("Hello World")
// }
// }

// a = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let n = a.length;
// let m = a[0].length;



// sum = 0;
// for(j = 0; j<m; j++){
// sum += (a[0][j])
// }
// console.log(sum)

// for(let i = 0; i<n; i++){
//     sum+=(a[i][2])


// }
// console.log(sum)


// let obj1 = {
//     a: 1,
//     b : 8,
//     r : 5
// }
// // z = Object.keys(obj1)
// // console.log(z)
// let obj2 = {
//     a: 5,
//     b : 6,
//     o:0
// }
// if(Object.keys(obj1) && Object.keys(obj2)){
//     console.log(Object.keys(obj1))
// }

// for(items in obj2){
//    if(obj2[items] >= obj1[items]){
//     console.log("t")
//    }
// }
// console.log(obj1["a"])

// a = [1]
// console.log(a[1] == undefined)
// if(a[i+1] == undefined){
// console.log("v")
// }
// a = []

// for(i=0; i<a.length; i++){
// if(a[i] == undefined){
//     console.log("v")
// }
// }
// max num
// let a = [1,1,-2,2,3];

// let max = 0;
// let curretM = 0
// for(i=0; i<a.length; i++){
// if(a[i] < curretM){
//     curretM = a[i]
//     curretM<max
//     max = curretM
//     console.log(max)
// }
// }


// duplicate num
// a = [1,2,2,3,1]
// b = []
// for(i=0; i<a.length; i++){
   
// for(j=i+1; j<a.length; j++){

//     if(a[i] == a[j]){
//        b.push(a[i])
//     }
// }

// }
// console.log(b)


// var deleteDuplicates = function(head) {
//     b = []
//     for(let i =0; i<head.length; i++){
     
//         for(let j =i+1; j<head.length; j++){
//             if(head[i] == head[j]){
//                 b.push(head[i])
    
//             }
//         }
       

//     }
//     return b
 
   
// };

// head = [1,1,3,3]
// // Output: [1,2]

// console.log(deleteDuplicates(head))

// a = [1,2,3,4,5]
// b = a.splice(0,2)
// console.log(a)

// console.log(b)



// a = [
//     [4,3,2,-1],
//     [3,2,1,-1],
//     [1,1,-1,-2],
//     [-1,-1,-2,-3]
// ]
// a = [[1,2,6],
//     [-3,-4,-9]]
// let count = 0;
// n = a.length;
// m = a[0].length
// for(let i =0; i<n; i++){
// for(let j =0; j<m; j++){
// if(a[i][j] < 0){
//     count+=1
// }
// }
// console.log(count)
// }
// s = ["h","e","l","l","o"]
// let str = []
    
// for(let i = s.length-1; i >= 0; i--){
//     d = s[i];
//     str.push(d)
// }
// // z = str.toString()
// // return z

// console.log(str)

// a = 123;
// rev = 0;
// while(a != 0){
//     rem = a % 10;
//     console.log(rem)
//     a = Math.floor(a / 10)
//     console.log(a)
//     rev = rev * 10 + rem
//     console.log(rev)
// }

// console.log(rev)

// a = [1,2,3,4,5]

// b = Math.max(...a)
// console.log(b)

// console.log(Math.max(1, 3, 2))

// var findPeakElement = function(nums) {
  
//     l=0;
//     r=nums.length-1
//     while(l<=r){
//         mid=Math.floor((l+r)/2)
        
//         if((mid-1<0||nums[mid]>nums[mid-1])&&(mid+1==nums.length||nums[mid]>nums[mid+1])){
//         // [5,2] <-- if((mid-1<0||nums[mid]>nums[mid-1]
//         /* [2,5] <--  as per our code 2 is a 1st mid after (mid + 1) mid will update.
//                       so our mid become 5 but right side no more numbers
//                       if(mid+1)==nums.length <-- return mid
//             [1,5,2] <--  || nums[mid]>nums[mid+1]) <-- as usual

//             return mid 
//         */
//             return mid
//         }
//         if(nums[mid]<nums[mid-1]){
//             /*
//             [2,8,3,5,1] <-- mid - 1 is greater than mid so 
//             return ---> mid - 1

//             */

//             r=mid-1
//         }
//         else if(nums[mid]<nums[mid+1]){
//             // [2,3,4,9,5,1] <-- mid + 1 is greater than mid so 
//             // return ---> mid + 1
//             l=mid+1
//         }
//     }
 
// };
// let nums = [8];                 // to run in leetcode remove this
// console.log(findPeakElement(nums))   // to run in leetcode remove this call back


// const canConstruct = (ransomNote, magazine) => {
//     const vocab = {};
    
//     for (let letter of magazine) {
//         vocab[letter] = ++vocab[letter] || 1;
//     }
    
//     for (let letter of ransomNote) {
//         if (vocab[letter] === 0 || !vocab[letter]) {
//             return false;
//         }
//         vocab[letter]--;
//     }
    
//     return true;
// };


// ransomNote = "aa"
//  magazine = "ab"

//  console.log(canConstruct(ransomNote,magazine))




// right diagonam
// a = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// row = a.length;
// column = a[0].length;

// for(let i = 0; i<row; i++){
//     console.log(a[i][column-i-1])
// }

// // left diagonal

// for(i = 0; i<row; i++){
// console.log(a[i][i])
// }


/*
Week 10 – Day 1: Coding Challenge
(Maximum marks - 15)
AttainU Id: #68 Q-1 ) Recursive implementation of atoi() function:(15 marks)
Atoi() function converts a string into an integer.
eg:
st = “1234” is a string.
if we perform,
st + 1
this results in error since “st” is a string and 1 is an integer, and,
st + “1”
this will append 1 into 1234. Giving us 12341.

*/
// str = "1234"
// function atoi (str){
//     if(str.length == 0 ) return 0;
//     let firstChar = str.substr(0,1);
//     let remainingStr = str.substr(1,str.length);
//     return Number(firstChar)* Math.pow(10, remainingStr.length)+atoi(remainingStr)
// }


// console.log(atoi(str))

/*


Week 10 – Day 3: Coding Challenge

sanjay-acharya-au50

AttainU Id: #72
Q-1 ) Program for Sum of the digits of a given number:(5 marks)
Sample Input:
1234567
Sample output:
28

*/

// n = 1234567

// function sumOfDigit (n){
// let sum = 0;

// while( n != 0){
//     rem = n % 10;
//     n = Math.floor( n / 10)
//     sum = sum + rem 
// }
//     return console.log("sum1 of digits :" , sum )
// }
// sumOfDigit(n)


// /*
// Q-2 ) Given a number n, find sum of first n natural numbers:(5 marks)

// Input : 5
// Output : 15

// Explanation : 1 + 2 + 3 + 4 + 5 = 15


// */

// function sum2 (n){
//     if( n == 1 ) return 1;

//     return n + sum2(n-1)

// }

// console.log("sum2 of n : " , sum2(5))

// function sum (n){
//     if(n == 0) return n;
//     return n + sum(n-1)
// }

// n= 5
// console.log(sum(n))


// input = 5
// let sum = 0
// for(let i = 0; i<=input; i++){
//     sum = sum + i
// }
// console.log(sum)


// input = 3
// count = 0
// while(input != 1){
    
//     if(input % 2 === 0){
//         input = input / 2
//         count++
//     }
//     else {input = (3 * input) + 1
//     count++
//     console.log(count)
//     }
// }
// console.log(count)


// function test_prime(...n)





// n = [1,5,2,6,7]
//     for( i = 0; i < n.length; i++){
//         console.log(n[i])
//         if(n[i] == 1 || n[i] == 2){
//            console.log("NO")
//         }
//     else if(n[i] % 2 == 0){
//        console.log("NO")
//     }
//     else {
//   } if(n[i] % 2 == 1){
//     console.log("YES")
//   }
// }


// Week 10 – Day 5: Coding Challenge

// Q-1 ) Given two number x and y, find product using recursion.


// Input : x = 5, y = 2
// Output : 10




// recursive function to calculate
// multiplication of two numbers
// function product(x, y)
// {
//     // if x is less than
//     // y swap the numbers
//     // if (x < y)
//     //     return product(y, x);
 
//     // iteratively calculate
//     // y times sum of x
//     // if (y != 0)
//     if( y == 0) return y;

//     return (x + product(x, y - 1));
 
//     // if any of the two numbers is
//     // zero return zero

// }

// console.log(product(5, 2))

// Q1.

// function fib(n) {
   
    
//     if(n == 0 || n == 1) return n;
    
//     return fib(n - 2) + fib(n - 1 )
    
    
// };
// console.log(fib(5));

// // Q2.

// var reverseString = function(s) {
//     return s.reverse()
//  };

// a = [3,1,2,4];
// function so(a){



// var i = 0;
// while(i<a.length){
//      min_id = i;


//         var j = i+1;
//         while(j<a.length){

//         if(a[j] < a[min_id] ){
//             min_id = j;
            
//         }
//         j++
//      }
//      [a[i] , a[min_id]] = [a[min_id] , a[i]]
//      i++
// }
// return a;
// }

// console.log(so(a))


// a = [-4,-1,0,3,10]

// b = a.map( val => val*val )
// console.log(b)
// s = function (a,b){
//     return a-b
// }
// b.sort(s)
// console.log(b)


// nums = [0,1,2,0,5]
// console.log(nums)

// let arr = [];
// for(let i = 0; i<nums.length; i++){
//     if(nums[i] != 0){
//         arr.push(nums[i])
//     }
// }

//     for(let j = 0; j<nums.length; j++){
//         if(nums[j] == 0){
//             arr.push(nums[j])
//         }
//     }
// console.log(arr)


// a = [ 3,6,5,8,2,1]
// function so(a){
// var i = 0;
// while(i<a.length){
//      min_id = i;


//         var j = i+1;
//         while(j<a.length){

//         if(a[j] < a[min_id] ){
//             min_id = j;
            
//         }
//         j++
//      }
//      [a[i] , a[min_id]] = [a[min_id] , a[i]]
//      i++
// }
// return a;
// }
// console.log(so(a))




//  fib


// function fib ( n ) {
//     if(n == 1 || n == 0) return n;
//     return fib(n-1)+ fib(n-2)
// }

// console.log(fib(10))



// let a = [
//     [0,0,1,1],
//     [1,0,0,1],
//     [1,0,0,0],
// ];

// function rec (x,y,a){

//     if(x == a.length-1 && y == a[0].length-1) return 1;
//     if(x == a.length || y == a[0].length ) return 0;
//     if(a[x][y] == 1) return 0;
//     return rec(x+1,y,a) + rec (x,y+1, a)

// }
// console.log(rec(0,0,a)) 



// a = "hi wo"
// // m = 3
// // for(let i = 0; i<a.length; i++){
//    b = a.split(" ")
// // }
// console.log(b)
// let text = "How are you doing today?";
// const myArray = text.split(" ");
// console.log(myArray)


// a = [3,1,3,3,4,4,3,2];

// let obj = {};

// for(let i = 0; i<a.length; i++){
//     if(obj[a[i]]){
//         obj[a[i]]++
//     }
//     else { 
//         obj[a[i]] = 1
//     }
// }
// console.log(obj)

// for(items in obj){

//     if(obj[items] >= 2){
//         console.log(items)
//     }

// }
// console.log(items)


// a = {
//     x : 1,
//     y : 1,
//     z : 1
// }

// for(items in a){
//     console.log(a[items])
// }

// b = {
//     x : 1,
//     p : 1,
//     z : 1
// }

// for(items in b){
//     console.log(a[items])
// }
// for(items in a){
//     if(a[items] == b[items]){
//         console.log("hello")
//     }
// }

// let ransomNote = "bg"
// let magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
// // Output: false

// let ransom = {}

// for(let i = 0; i<ransomNote.length; i++){
//     if(ransom[ransomNote[i]]){
//         ransom[ransomNote[i]]++
//     }
//     else {
//         ransom[ransomNote[i]]= 1
//     }
// }
// console.log("ransom -->",ransom)

// let mag = {}
// for(let i = 0; i<magazine.length; i++){
//     if(mag[magazine[i]]){
//         mag[magazine[i]]++
//     }
//     else {
//         mag[magazine[i]] = 1
//     }
// }
// console.log("mag --> ",mag)

// for(items in mag){
//     if(mag[items] >= ransom[mag[items]] ){
//         console.log("hlw")
//     }
//     else {console.log("fal")}
// }

// a = [-1,-100,3,3]
// k = 2;


// for(let i = 0; i<k; i++){


//     a.unshift(a.pop())

// }
// console.log(a)

// s = "([()"
// function dem (s){

// // Output: true
// a = [];

// a2 = [];

// a3 = [];

// for(let i = 0; i<s.length; i++){
    
//     if(s[0] == ")") return false
//     if(s.length == "(") return false
//     if(s[i] == "("){
//         a.push(s[i])
//     }
//     else {
//         // if(a.pop() == undefined) return false;
//         a.pop()
//     }
// }console.log(a)




// for(let i = 0; i<s.length; i++){

//     if(s[0] == "]") return false
//     if(s.length == "[") return false
//     if(s[i] == "["){
//         a2.push(s[i])
//     }
//     else {
//         // if(a2.pop() == undefined) return false;
//         a2.pop()
//     }
// }
// console.log(a2)


// for(let i = 0; i<s.length; i++){

//     if(s[0] == "}") return false
//     if(s.length == "{") return false
//     if(s[i] == "{"){
//         a3.push(s[i])
//     }
//     else {
//         // if(a3.pop() == undefined) return false;
//         a3.pop()
//     }
// }



// if(a.length == 0 && a2.length == 0 && a3.length == 0){
//     return true;
// }else {
//     return false
// }



// console.log(a3)

// }


// console.log(dem(s))




// a = "123"

// console.log(a[0] * 1 ) 

// function mergeSort(Arr, l, r){
//     if(l>=r) return;
//     let m = Math.floor((l+r)/2);
//     mergeSort(Arr, l, m);
//     mergeSort(Arr, m+1, r);
//     merge(Arr, l, m, r);
// }

// function merge(Arr, l, m, r){
//     let A = [];
//     let B = [];
//     for(let i=l; i<=m; i++){
//         A.push(Arr[i]);
//     }
//     for(let j=m+1; j<=r; j++){
//         B.push(Arr[j]);
//     }
//     // console.log("A is: ", A);
//     // console.log("B is: ", B)
//     // A & B

//     let p = 0;     
//     let q = 0;
//     let y = l;
//     while(p<A.length && q<B.length){
//         if(A[p]<B[q]){
//             Arr[y] = A[p];
//             p++;
//         }
//         else{
//             Arr[y] = B[q];
//             q++;
//         }
//         y++;
//     }
//     // C = [1,2,3,4,6,7]
//     while(p<A.length){
//         Arr[y] = A[p];
//         p++;
//         y++;
//     }
//     while(q<B.length){
//         Arr[y] = B[q];
//         q++;
//         y++;
//     }
//     // Arr = [...C];
//     // console.log("C is: ", Arr);

// }

// let Arr = [1,5,2,7,3,4,12,15];
// mergeSort(Arr, 0, Arr.length-1);
// console.log(Arr);
// // console.log( A )
// // console.log( B )

// strs = ["san,hdtt"];
// var longestCommonPrefix = function(strs) {
//     let count = strs[0]
//     let op = ""
//     for(let i = 0; i<strs.length; i++){
//         for(let j=0; j<count.length; j++){
//             if(count[j] == strs[i][j]){
//                 op += count[j]
//             }
//             else {
//                 break
//             }
//         }
    
//     count = op;
//     op = ""
//     }
// return count
// }


// a = longestCommonPrefix(strs)
// console.log(a)
          

// p = "aajnsy"
// a = "sanjay"
// console.log(a)
// b = a.split("")
// console.log(b.sort())
// z = b.join('')
// console.log(a)
// console.log(z)

// console.log(z == p)

// let ransomNote = "abcd"
// let magazine = "acd"

// function dev (ransomNote,magazine){



// let count = {};

// for(letter in ransomNote){
//     if(count[ransomNote[letter]]){
//         count[ransomNote[letter]] += 1;
//     }
//     else {
//         count[ransomNote[letter]] = 1;
//     }
// }
// // console.log(count)

// for( items in magazine){
// if(!count[magazine[items]]){
//  return false;
// }
// else if(count[magazine[items]] < 0){
//      return false;
// }
// else {
//     count[magazine[items]] -= 1
// } 

// // return true;
// }
// }
// console.log(dev(ransomNote,magazine))


// Create a Temperature class. 
// Make two methods : 
// 1. convertFahrenheit - It will take celsius and will print it into Fahrenheit. 
// 2. convertCelsius - It will take Fahrenheit and will convert it into Celsius.

// class tempConvert {
//     constructor(celsius,Fahrenheit){
//         this.celsius = celsius * 9 / 5 + 32;
//         this.Fahrenheit = (Fahrenheit - 32) * 5 / 9;
//     }


// printCelsiusToFahrenheit(){
//     return this.celsius;
// }
// printFahrenheitToCelsius(){
//     return this.Fahrenheit;
// }
// }
// let demo = new tempConvert(5,5)

// console.log("celsius to Fahrenheit : " , demo.printCelsiusToFahrenheit() ,"Fahrenheit")
// console.log("Fahrenheit to celsius : " , demo.printFahrenheitToCelsius(), "celsius")



// let a = -121;

// function rev (a){

//     let b = Math.abs(a);
//     let c = b;
//     let reverse = 0;
//     // console.log(a)
//     // console.log(c + 1)
//     while(c != 0){
//         rem = c % 10;
//         c = Math.floor(c/10);
//         reverse = reverse * 10 + rem;
       
//     }
    
//     console.log(reverse)
// }
// rev(a)

// Q2. Write a program to show data type of each element of the array .
// Input: [8,5,5,6,”7”,8]
// Output:
// 8 Number
// 5 Number
// 5 Number
// 6 Number
// 7 String
// 8 Number

// input = [8,5,5,6,"7",8]

// for(let i = 0; i<input.length; i++){
//     console.log(input[i], typeof input[i])
    
// }



// arr1 = [1,0,2,0,3,0]

// arr2 = [ 0,2,0,4,0,4]
// let ransomNote = {}
// for(let i = 0; i<arr1.length; i++){
//     if(ransomNote[arr1[i]]){
//         ransomNote[arr1[i]]++;
//     }
//     else {
//         ransomNote[arr1[i]] = 1;
//     }
// }
// console.log(ransomNote)

// let magazine = {}
// for(let i = 0; i<arr2.length; i++){
//     if(magazine[arr2[i]]){
//         magazine[arr2[i]]++;
//     }
//     else {
//         magazine[arr2[i]] = 1;
//     }
// }
// console.log(magazine)


// function canConstruct (ransomNote, magazine){
//     const vocab = {};
    
//     for (let letter of magazine) {
//         vocab[letter] = ++vocab[letter] || 1;
//     }
    
//     for (let letter of ransomNote) {
//         if (vocab[letter] === 0 || !vocab[letter]) {
//             console.log(letter)
//         }
//         vocab[letter]--;
//     }
    
//     console.log(letter)
// };
// canConstruct(ransomNote, magazine)

// let s = "00110"
// // Output: 1
// // Explanation: We flip the last digit to get 00111.



// let input = "010101001"
// var zero = 0 // 1
// var one = 0 //  2
// for(let i=0; i<input.length; i++){
// if(input[i] === "0"){
//     // if(one == 0) continue;
//     zero++
    
// } else {
//     one++
// }
// console.log("zero is" , zero);
// console.log("one is" , one);
// if(zero>=one){
//     zero=one;
// }
// console.log("zero >= one : zero = one" , zero);
// }
// console.log("output" , zero);



// a = [[1,2,3],
//     [1,2,3],
//     [1,2,3]
//     ]

//     for(let i = a.length; i>=0; i--){
//         console.log(a[i-1])
//     }

//     fahrenheit = Number(require("prompt-sync")()());
// function fahrenheitToCelsius(fahrenheit){
//     return [(fahrenheit-32)*5]/9;
// }
// console.log(fahrenheitToCelsius(fahrenheit));

// let name = Number(require("promot-sync")()());
// console.log(name);


