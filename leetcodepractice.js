//  sum of the array element

// let arr = [1,2,3]
// let sum = 0
// for(i=0; i<arr.length; i++){
//    sum= sum + arr[i]
// }
// console.log(sum)

//  push the array element

// let arr = [1,2,3,4]
// function san (a){
//     return arr.push(a)
// }
// san(5)
// console.log(arr)
// ans = even(1,2,3,4)
// function even (a) {

//     for(i =0; i < a.length; i++)
//         b = (a & 2 == 0)
//         return b
// }
// for(items of b)
// console.log(b)


// a = [1,2,3,4,5,6,7,8,9]

//     for(i =0; i<a.length; i++){
//     return [a % 2 == 0]
//     console.log(a)
//     }

let a = [1,2,1,3]
sum = 0;
for(let i = 0; i < a.length; i++){
    if(a.indexOf(a[i])== a.lastIndexOf(a[i])){
        sum = sum+a[i]
    }
}
console.log(sum)

