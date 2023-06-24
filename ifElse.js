// a = 10;
// b = 10

// if (a!=b) {
//     console.log("t")
// } else { a==b
//     console.log("f")
// }

// a = 1;
// b = 2;

// if(a>b){console.log(false)}
// else{console.log("t")}
    

// a = 10
// b = 20

// if(a>b){
//     console.log("corrct");
// }
// if(a==b){
//     console.log("still wrong");
// }


// else(a<b) 
//     console.log("corrc");

// a = 10
// b = 7
// if(a && b%2){
//     c = 8
//     console.log("c")
// }



// to print "for bar" num > 3 && num >=5
// num = 10;

// if(num>3 && num == 5);{
//     console.log("foo bar")
// }
// if(num>=3 && num<5);{
//     console.log("foo")
// }
// if(num<3){
//     console.log("bar")
// }    


// obj = {
//     a : ["san","man", "hhh"]
// }
// for(item in obj){
// console.log(obj[item])
// }

// console.log(typeof obj.a[0])
// b = {
//     a : 0,
//     b : 5,
//     l : 6
// }

// d = {
//     a : 5,
//     b : 10
// }
// // c = Object.values(d)
// // console.log(c)
// for(items in b){
//     for(stock in d){
//      if( Object.values(d) > Object.values(b)){
//         console.log("true")
//         break;
//      }
    
//     }
// }


// Q-1) Write a program to pass spread operator as argument and rest operator as parameter of a 
// function.

// function san (...a) // <--- rest operator parameter
// {
//     console.log(a);
// }
// b = [1,2,3];
// c = [1,8,9];
// san(...b,...c); // <--- spread operator



    // let s = "XIV"
    // let totNum = 0;
    // for(let i =0; i<s.length; i++){
     
    //         if(s[i] < s[i+1]){
    //         totNum -= s[i]
    // }
        
    //        else if(s[i+1] == "IX"){
    //         totNum += 9
    // }     
    //          else if(s[i+1] == "XL"){
    //         totNum += 40
    // }     
    //          else if(s[i+1] == "XC"){
    //         totNum += 90
    // }     
    //          else if(s[i+1] == "CD"){
    //         totNum += 400
    // }     
    //          else if(s[i+1] == "CM"){
    //         totNum += 900
    // // }     
    //         if(s[i] == "I"){
    //         totNum += 1
    // }
    //         else if(s[i] == "V"){
    //         totNum += 5
    // }
    //         else if(s[i] == "X"){
    //         totNum += 10            // "MCMXCIV" = 1000+100+1000+10+100+1+5 = 2216
    // }                               // "MCMXCIV" = 1000+100+1000+10+100+4     
    //        else if(s[i] == "L"){
    //         totNum += 50
    // }      
    //        else if(s[i] == "C"){
    //         totNum += 100
    // }      
    //        else if(s[i] == "D"){
    //         totNum += 500
    // }     
    //        else if(s[i] == "M"){
    //         totNum += 1000
    // }
    // }
    //     console.log(totNum)
/*

    What will be the Time Complexity of these code snippet?
    Q - 1 )Below are nested “K” for loops
*/

//     n= Number(prompt("Enter the limit")) 
//     for(let i=0;i<n;i++){

//      for(let j=0;j<n;i++) {

//     for(let m=0;m<n;i++) {

//     //… … … K loops in total … 

//     for(let z=0;z<n;i++) {

//     console.log("Hello World");
//     } 
// }
//      }
//      }
    //   time complexity for the question 1 is ---> O(n^3)

    // Q-2) 

    // N= Number(prompt("Enter the limit")) 
    // M= Number(prompt("Enter the limit")) 
    // a = b = 0 
    // for(let i=0;i<N;i++){ 
    // a = a + 1 
    // }
    // for(let j=0;j<M;j++){
    // b = b + 1
    // }
    // time complexity for the question 1 is ---> O(N+M)

    // What will be the Time Complexity of these code snippet?
    // Q - 1) 
    // n = Number(prompt("Enter the limit")) 
    // i = 1
    // while(i^2<=n) {         // --->    O(√n)
    // console.log("Time complexity")   //---> O(1)
    // i += 1
    // }
    // time complexitity --->  O(√n)



    // Q-2) 


    // n= Number(prompt("Enter the limit")) 
    // for(let i = 0;i<n;i++){   // --->  O(n)
    // for(let j = 0;j<i;j++){   // ---> O(n-1)
    // for(let k = 0;k<100;k++) {  // ---> O(1)
    // console.log("Time complexity") // ---> O(1)
    // } } }

    //  time complexity ---> O(n*n-1) = O(n^2)



    // Week 8 – Day 5: Coding Challenge
    // sanjay-acharya-au50

    // Q-1) 

// n= Number(prompt("Enter the limit")) 
// for(let i = 0;i<n;i++){  // ---> time complexity = O(n)
// j = 1 
// while(j<=i^2 ){          // ---> time complexity =  O(n*n-1) = O(n^2)
// for(k = 0;k<n/2;k++){    // ---> time complexity =  O(n) = O(n^3)
// console.log("Time complexity") 
// } 
// j+=1; 
// } 
// }
 
/*
time complexity :
O(n)
O(n*n-1) = O(n^2-n) = O(n^2) ---> polinomial time complexity
O(n^2) * O(n) = O(n^3)

ans: O(n^3)
*/

// Week 8 – Day 5: Assignment
// sanjay-acharya-au50



// Q - 1 Below are nested “K” for loops (3 marks)
// n= Number(prompt(“Enter the limit”))


// for(let i=0;i<n;i++){   // O(n)
// for(let j=0;j<n;i++){   // O(n)
// for(let m=0;m<n;i++){   // O(n)

// ………
// K loops in total
// …

// for(let z=0;z<n;i++){   // O(n)

// console.log("Hello World");

//       }
//     }
//   }
// }

// ans :
// infinite loops running because every time increamenting i
//  time complexity O(n^k)




// Q-2

// N= Number(prompt("Enter the limit"))
// M= Number(prompt("Enter the limit"))
// a = b = 0
// for(let i=0;i<N;i++){
// a = a + 1
// }
// for(let j=0;j<M;j++){
// b = b + 1
// }

// ans :
//  time complexity O(N+M)



// Q - 3 

// n= Number(prompt("Enter the limit"))
// i = 1
// while(i^2<=n)
// {console.log("Time complexity")
// i += 1}

// ans :
//  time complexity O(√n)


// let s = 1;
// let n = 10;
// let i = 0;

//     while (s < n) {
//         s = s + i;


//         i++;
//         console.log(i,s,n)
//     }


//  mars exploration
// let s = "SOSSOSOSO"
// let count = 0;
// for(let i = 0; i<s.length; i = i+3){
//   if(s[i] !== "S" ){
//     count++
//   }
//   else if(s[i+1] !== "O" ){
//     count++
//   }
//   else if(s[i+2] !== "S" ){
//     count++
//   }
// }
//   console.log(count)

// newa = []
// a = [1,2,3,4,5,6]
// b = Math.min(...a)
// d = Math.max(...a)
// newa.push(b)
// newa.push(d)
// console.log(newa)


// a = [1,2,3,4,5,6]
// // a.shift()
// // console.log(a)
// // c= []
// // for(i=0; i<a.length/2; i++){
// //     p = a.shift()
// //     c.push(p)
// //     a.push(p)

// // }
// a.rotate(1)
// console.log(a)

// console.log(c)

// arr = [1,2,3,4,5,6]

// let b = []
//     let c =[];
//     for(let i=0; i<arr.length; i++){
//         b = arr.shift();
//         c.push(b);
//         // a.length/2; i++){
//                 // p = arr.shift()
//                 // c.push(p)

//     }
//   console.log(c)




// function bin (a,target){
//     let l = 0;
// let r = a.length-1;
// let mid ;
//     // console.log(a,target)
// ;
// while(l<=r){
//     mid = Math.floor((l+r)/2)
//     if(target > a[mid]){
//         l = mid + 1
//     } 
//     else if(target < a[mid]){
//        r = mid-1
//     }
//      else {
//         return mid
//     }
// }
// return -1
// }
// a = [ 1,2,3,4,5,6];
// target = 5;



// function bin (a,target){

// let l = 0;
// let r = a.length-1;
// let mid;

// while(l<=r){
//     mid = Math.floor((l+r)/2);

// if(target > a[mid]){
//         l = mid+1
// }else if(target < a[mid]){
//     r = mid - 1
// }
// else {return mid}

// }
// return -1

// }



// console.log(bin(a,target))






// Q - 1) Write a program to print the sum of right diagonal of a matrix

// a = [ 
//     [1,2,3,],
//     [4,5,6],
//     [7,8,9]
// ]

// // n = row
// // m = collumn
// let n = a.length;
// let m = a[0].length

// let sum = 0;

// for (let i = 0; i<n; i++){

//         sum = sum+ (a[i][n-1-i])
        
//     }
//     console.log("sum of right diagonal of a matrix ; " , sum)



// Q - 2) Write a program to print sum of border elements of a square Matrix

// a = [ 
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let n = a.length;
// let m = a[0].length;
// let sum = 0;
// for(j = 0; j<m; j++){
//     sum += (a[0][j])

//     }
//     // console.log(sum)

// for(let i = 0; i<n; i++){
//     sum+=(a[i][2])

//     }
//     sum -= (a[0][2])
//     // console.log(sum)

// for(j = 0; j<m; j++){
//     sum += (a[2][j])

//     }
//     sum -= (a[2][2])
//     // console.log(sum)

// for(i = 0; i<m; i++){
//         sum += (a[i][0])

//     }
//     sum-= a[0][0]
//     sum-= a[2][0]
//     console.log("sum of border elements of a square Matrix : ", sum)


// Q - 3) Write a function to return sum of rows of a matrix as an array

// a = [

//     [1,2,3],
//     [4,5,6],
//     [7,8,9],

// ]

// let row = a.length;
// let column = a[0].length;

// for(let i = 0; i<row; i++){

// let sum = 0;

// let output = []
//     for(let j = 0; j<column; j++){
//      sum = sum + (a[i][j])
    
//     }
//     output.push(sum)
//   console.log(output)
 
// }



// a = [1,2,3,8,4,5,2]


// for(let i = 1; i<a.length; i++){
//     if(a[i] > a[i-1] && a[i] > a[i+1] ){
//         console.log(a[i])
//     }
// }


// nums = [2,14,18,22,22] // true
// //  nums = [1,2,3,4] false

// for(let i=0; i<nums.length; i++){
//     a = nums.indexOf(nums[i])
//     b = nums.lastIndexOf(nums[i])
//     if(a == b ){
//     console.log("false")
// }
// else console.log("true")
// }

// console.log(nums.indexOf(1))
// console.log(nums.lastIndexOf(1))

// a = ["san", "man", "san"]

// b = {}

// for(i =0; i<a.length; i++){
//     if(b[a[i]]){
//         b[a[i]]+=1
//     }
//     else {b[a[i]] = 1}
// }

// console.log(b)


// a = "aaaa"
// for(i=0; i<a.length; i++){
//     console.log(a[i])
// }

// "fihjjjjei"
// "hjibagacbhadfaefdjaeaebgi"
// let ransomNote = "fihjjjjei"
//  let magazine =  "hjibagacbhadfaefdjaeaebgi"

//  let obj1 = {}
//  let obj2 = {}


//  for(let i =0; i<ransomNote.length; i++){
//     if(obj1[ransomNote[i]]){
//         obj1[ransomNote[i]] +=1
//     }
//     else {obj1[ransomNote[i]] = 1
//  }
// }
// console.log(obj1)

// for(let i =0; i<magazine.length; i++){
//     if(obj2[magazine[i]]){
//         obj2[magazine[i]] +=1
//     }
//     else {obj2[magazine[i]] = 1
//  }
// }
// console.log(obj2)

// for(items in obj2){
//     for(items in obj1){
//     if(Object.keys(obj2) && Object.keys(obj1)){
//         if(Object.values(obj2) >=  Object.values(obj1)){
//         console.log("true")
//         }
//         console.log("true")
//     }
// }
// }

// a = [1,2,3,5,2]

// for(let i=1; i<a.length; i++){
//     if(a[i+1] < a[i] && a[i-1] < a[i]){
//         console.log(a[i])
//     }
// }
// -----------------------------------------------------
// var canConstruct = function(ransomNote, magazine) {
    //     ransomNote = "aa",
    //     magazine = "ab"
    //     Output: false
        
     // let ransomNote = "a"
     // let magazine = "aab"
    //  let obj1 = {}
    //  let obj2 = {}
    
    
    //  for(let i =0; i<ransomNote.length; i++){
    //     if(obj1[ransomNote[i]]){
    //         obj1[ransomNote[i]] +=1
    //     }
    //     else {obj1[ransomNote[i]] = 1
    //  }
    // }
    // // console.log(obj1)
    
    // for(let i =0; i<magazine.length; i++){
    //     if(obj2[magazine[i]]){
    //         obj2[magazine[i]] +=1
    //     }
    //     else {obj2[magazine[i]] = 1
    //  }
    // }
    // console.log(obj1)
    // console.log(obj2)
    
    // for(items in obj2){
    //        if(obj2[items] && obj1[items] == undefined){
    //         return console.log("false")
    //        }
    //   else if(obj2[items] < obj1[items]){
    //             return console.log("false")
    //     }
    
    //     else console.log("true")
    // }

    // };


    //  ransomNote = "fihjjjjei"
    // //  "hjibagacbhadfaefdjaeaebgi"
    //  magazine = "hjibagacbhadfaefdjaeaebgi"
    // canConstruct(ransomNote, magazine)

// -----------------------------------------------------

// var findPeakElement = function(nums) {
// if(nums.length == 1 ){
//     console.log("0")
// }
//     for(i=1; i<nums.length; i++){
      
//         }
//         if(nums[i] > nums[i+1] && nums[i] > nums[i-1])
//                console.log(i)
//            }


// nums = [1]

// console.log(findPeakElement(nums))


// a = [ 1,2,4,1]
// b = []
// // console.log(a.indexOf(1))
// for(let i = 0; i<a.length; i++){
//     // for(j = 0; j<a.length; j++){
//         if(b.indexOf(a[i]) == -1 ){
//             b.push(a[i])
//         }
    
//     // else b[a[i]]=1
// }

// console.log(b)



// nums = [1,2,3]
// n = [];
// for(let i=0; i<nums.length; i++){
//     // for(j = i+1; j<nums.length; j++)
//   if(n.indexOf(nums[i]) == -1 ){
//     n.push(nums[i])
//   }
    
   
// }
// console.log(nums)
// console.log(n)

// if(nums.length > n.length){
//     console.log("true")
// }
// else console.log("false")


// nums = [1,2,3]
// n = []
// for(let i=0; i<nums.length; i++){
    
//     // if(nums.indexOf(nums[i]) == -1){
//     //     demo.push(nums[i])
//         if(n.indexOf(nums[i]) == -1 ){
//                 n.push(nums[i])
//               }
//     }
// // }
//     console.log(n)


// leetcode 344
// s = ["h","e","l","l","o"]

// // b = s.toString()
// let str = []
// // console.log(b)
    
// for(let i = s.length-1; i >= 0; i--){
//     d = s[i]
//     str.push(d)
// }
// g = str.toString()
// console.log(g)

// function fu (r,m){
//    const obj = {};
//     for(let items of m){
//         // if(obj[items]){
//         //     obj[items]++
//         obj[items] = ++obj[items] || 1;

//         }
//         // else obj[items] = 1
    

// for(let items of r){
//     if(obj[items] === 0 || !obj[items]){
//         return false;
//     }
//    obj[items]--;
// } 
// return true;

// }
// r = "a"
// m = "aab"


// console.log(fu(m,r))
// console.log(obj)



// function fu (m,r){
// const canConstruct = (ransomNote, magazine) => {

//     const obj = {};
//      for(let items of m){
//     // for (let letter of magazine) {

//          obj[items] = ++obj[items] || 1;
 
//          }
//          // else obj[items] = 1
     
 
//  for(let items of r){
//      if(obj[items] === 0 || !obj[items]){
//          return false;
//      }
//     obj[items]--;
//  } 
//  return true;
 
//  }
//  r = "a"
//  m = "aab"
 
 
//  console.log(fu(m,r))


// n = 123
// num = 0
// while(n != 0){

// r = n % 10
// // console.log(r)
//  n = Math.floor(n/10)
// num = num * 10 + r


// }

// console.log(num)
// b = a%10
// console.log(a.length)



/*


Week 10 – Day 3: Coding Challenge
(Maximum marks - 15)
AttainU Id: #72
Q-1 ) Program for Sum of the digits of a given number:(5 marks)
Sample Input:
1234567
Sample output:
28

*/

// a = 12
// b = []
// b.push(a)
// console.log(b)
// // console.log(b)
// console.log(a.length)


// for( let i = 0; i<a; i++){

//     console.log(i)


// }

// b = a.toString()
//     console.log(b)
// a = 1234567
// b = 0


// while(a != 0){

// r = a % 10
// a = Math.floor(a / 10)
// console.log(r,b)
// b = b + r
// }

// console.log(b)

// s = "javascriptloops"




// for(let i =0; i<s.length; i++){
        
//     if(s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u"){
//         console.log(s[i])
//     }

// }


// function sum ( n ){
//     if(n == 0 ) return 0;

//     return n%10 + sum(Math.floor(n/10))
// }

// console.log(sum(515))

// Q-1 ) Check if a number is Palindrome: (15 marks)
// Given an integer, write a function that returns true if the given 
// number is
// palindrome, else false.
// For example,
// Sample input:
// 12321
// Sample output:
// palindrome
// Solve this using Recursion


// let a = 12321;
// let b = a;
// let c = b
// function trueFal ( a ){
// revNum = 0

// while( c != 0){

// rem = c % 10
// c = Math.floor(c/10)
// revNum = revNum * 10 + rem
// }
// console.log(a)
// console.log(revNum)
// console.log(a == revNum)
// }

// trueFal(a)


// let a = 121;
// let b = a
// let c = b
// function  isPalindrome(a) {
   

    
//     let revNum = 0;
    
//     while( c != 0){
        

//         rem = c % 10
//         c = Math.floor(c/10)
//         revNum = revNum * 10 + rem
//         }
//         console.log(a == revNum)
// }



// isPalindrome(a)


// var isPalindrome = function(x) {
//     let a = x;
//     let b = a
//     let c = b
    
//     let rev = 0;
    
//     while( c != 0){
        
//         rem = c % 10;
//         c = Math.floor(c/10)
//         rev = rev * 10 + rem
        
//     }
//     console.log(x == rev)
// };
// x = 121;
// isPalindrome(x)

// palindrom number using recursion



// n = 12321

// let newRev = 0


// function rev (n){
//     if(n == 0) return 0
//     reminder = n % 10
//     newRev = newRev * 10 + reminder
//     return rev(Math.floor(n/10))
// }
// rev(n)

// console.log(" ---> " , n)

// console.log(" ---> " , newRev)

// if(newRev == n){
//     console.log("output : palindrome")
// }
//     else console.log("output : " , false)

// dont drink water imidietely after eating fish
// 
//  drinking water make cause fish to start swimiing



// input = 5
// function sum ( input ) {
// if(input == 0) return input;
// return input + sum(input-1);
// }
// console.log(sum(input))

// a = [1,2,3]

// function add(val,id,a){
//     return val + 5
// }
// newa = a.map(add)
// console.log(newa)

// a = [ 1,2,3,4,5,6]

// function fil(val,id,a){
//    return val % 2 == 0;
//     }
//     b = a.filter(fil)
//     console.log(b)


// a = [1,2,3]
// function r (acc,val,id,a){
//     return acc + val
// }
// b = a.reduce(r)
// console.log(b)


// class Stack {
//     constructor(){
//         this.arr = [];
//     }
//     push(element){
//         this.arr.push(element);
//     }
//     pop(){
//         if(this.arr.length==0) return "Stack is empty already";
//         return this.arr.pop();
//     }
//     peek(){
//         if(this.arr.length==0) return "Stack is empty";
//         return this.arr[this.arr.length-1];
//     }
//     isEmpty(){
//         return this.arr.length==0;
//     }
// }

// let s = "()";

// function validParenthesis(s){
//     // if(s.length%2!=0) return false;
//     let st = new Stack();
//     let st2 = new Stack();
//     let st3 = new Stack();
//     for(let i=0; i< s.length; i++){
//         if(s[i]=='('){
//             st.push('(');
//         }
//         if(s[i] == "["){
//             st2.push("[")
        
//         }
//        if (s[i] == "{"){
//             st3.push("{")
//         }
//         else{
//             if(st.isEmpty()){
//                 return false;
//                 st.pop();
            
//             }
//            if(st2.isEmpty()){
//                 return false;
//                 st2.pop();
//             }
//         if(st3.isEmpty()){
//                 return false;
//                 st3.pop();
//             }
//         }
//     }
//     return st.isEmpty();

// }

// console.log(validParenthesis(s))


// // s = "()"
// // function validParenthesis(s){
// //     countSmall = 0;
// //     countMiddle = 0;
// //     countSquare = 0;
// //     for(let i=0; i<s.length; i++){
// //         if(s[i]=='('){
// //             countSmall++;
// //         }
// //             else if(s[i]=='['){
// //                 countMiddle++
// //             }
// //                 else if(s[i]=='{'){
// //                     countSquare++
// //         }
// //         else{
            
// //             if(countSmall==0) return false;
// //             countSmall--;
       
// //         if(countMiddle==0) return false;
// //         countMiddle--

// //     if(countSquare==0) return false;
// //     countSquare--
// //         }
// //     if(countSmall && countMiddle && countSquare == 0) return true;
// //     else return false;
// // }
// // }



// // console.log(validParenthesis(s));
// nums = [2,2,1,1,1,2,2]
// let map = {};
    
// for(let i = 0; i<nums.length; i++){
//     if(map[nums[i]]){
//         map[nums[i]]++
//     }
//     else {
//         map[nums[i]] = 1;
//     }
// }
// for(items in map){
//   if(map[items] > nums.length/2){
//     return console.log(map[items])
//   }
//     }
// }
// console.log(map)


// palindrom number;

// x = 121;
// var isPalindrome = function(x) {
    
//     a = x.toString().split('').reverse().join('');
//     console.log(x.toString() == a);
    
    
// }
// isPalindrome(x);

// a = ['a', 'b','c'];
// b = [];
// for(let i = a.length-1; i >= 0; i--){
//     b.push(a[i])
// }
// console.log(b);


// reverse in place

// s = ['s','a','n','j','a','y']
// console.log(s.reverse())

//  reverse the string;
//  two pointer;
// let l = 0;
// let r = s.length-1;

// while(l < r){
//    let hold = s[l];
//     s[l] = s[r];
//     s[r] = hold;
//     l++;
//     r--;
// }
// console.log(s);



        //Enter your code here
        // 3
        // 1 2 3
        // 2 4 6
    
    //     let input = "3 \n 1 2 3 \n 2 4 6"
    
    //     let n = input[0];
    //     let str = input.slice(2, input.length)
        
    //     let arr1 = [];
    //     let i = 0
    //     while(i<str.length){
    //          arr1.push(str[i] * 1)
    //         if(str[i] == "\n" ){
    //            break;
    //            }
    //         i++;
    //     }
    
    //     // let rest = arr1.split("")
    //         // console.log(arr1)
    //    let arr2 = []
    //     while( i < str.length){
    //         arr2.push(str[i] * 1)
    //         i++
    //     }
    
    //     // console.log(arr2)
    //     arr3 = arr1.filter((data) => !arr2.includes(data))
    //     // console.log(arr3);
    //     a1 = arr3.join(" ")
    //     console.log(a1)
    //     arr4 = arr2.filter((data) => !arr1.includes(data))
    //     // console.log(arr4);
    //      a2 = arr4.join(" ")
    //     console.log(a2)
    
    
//     a=  [ 1, 0, 2, 0, 3, 0 ]
//   b= [ 0, 2, 0, 4, 0, 6 ]

//   f = {}
// for(let i = 0; i<a.length; i=i+2){
//     for(let j = 0; j<b.length; j=j+2){
//         // if(a[i] || b[j] == 0) continue;
//         if(!b.includes(a[i])){

//             if(f[a[i]]){
//                 f[a[i]]++
//             }
//             else {
//                 f[a[i]]=1
//             }
            
//         }
//     }
// }
// console.log(f)
// console.log(Object.keys(f))


// var a = 1;
// function b(){
//     console.log(a)
//     a = 10;
//     return
//     function b(){
//         console.log("san")
//     }
// }
// b()
// console.log(a);


//  reverse string

// a = ["s","a","n","t"];

// let p = 0;
// let q = a.length-1;

// while(p < q){
//     [a[p],a[q]] = [a[q],a[p]];


//     p++;
//     q--;


// }
// console.log(a)

// vowels
// a = "javascript"

// for(let i = 0; i<a.length; i++){
//     if(a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u"){
//         console.log(a[i]);
//     }
// }



//  reverse string

// arr = ["a","b","c","d"];
// let p = 0;
// let q = arr.length-1;

// while(p<q){
//     [arr[p],arr[q]] = [arr[q],arr[p]];
//     p++;
//     q--;
// }
// console.log(arr);

//  palindrome or not

// reverse num
// let num = 123;

// let revNum = 0;
// while(num != 0){
//     rem = num % 10; //3
//     revNum = Math.floor(num/10);

//     revNum = rem * 10 + rem;
// }
// console.log(revNum);



// console.log(join( "ss" * "ee"));







// Function to consolidate best practices for social media marketing
function consolidateBestPractices(articles) {
  // Initialize an empty object to store the consolidated best practices
  const consolidatedPractices = {};

  // Iterate over each article in the input array
  for (let article of articles) {
    // Extract the title and content from the article object
    const { title, content } = article;

    // Check if the title already exists in the consolidatedPractices object
    if (consolidatedPractices.hasOwnProperty(title)) {
      // If the title exists, append the content of the current article to the existing content
      consolidatedPractices[title] += "\n" + content;
    } else {
      // If the title doesn't exist, create a new entry with the title and content
      consolidatedPractices[title] = content;
    }
  }

  // Return the consolidated best practices object
  return consolidatedPractices;
}

// Array of articles (manually collected top 15 Google search results)
const articles = [
  { title: "Article 1", content: "Content of article 1..." },
  { title: "Article 2", content: "Content of article 2..." },
  { title: "Article 3", content: "Content of article 3..." },
  { title: "Article 4", content: "Content of article 4..." },
  { title: "Article 5", content: "Content of article 5..." },
  { title: "Article 6", content: "Content of article 6..." },
  // Add the remaining articles...
];

// Call the consolidateBestPractices function with the array of articles
const consolidatedBestPractices = consolidateBestPractices(articles);

// Print the consolidated best practices
console.log(consolidatedBestPractices);
// console.log(articles[0]);

// for(let i=0; i<articles.length; i++){
//   console.log();
// }

for (const item of articles) {
  console.log(Object.values(item));
    // console.log(articles[item]);
}

