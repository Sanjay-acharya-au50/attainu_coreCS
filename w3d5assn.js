
 n = Number(require("prompt-sync")()());
var fizzbuzz = [];
var i = 1;
function fizzbuz(){
while(i<=n){
    if(i%3==0 && i%5==0){
        fizzbuzz.push("fizzbuzz")
    }
    else if((i%3)==0){
        fizzbuzz.push("fizz");
    }else if((i%5)==0){
           fizzbuzz.push("buzz");
    }else if (i%3==0 && i%5==0){
       fizzbuzz.push("fizzbuzz")
    }
    else {
   fizzbuzz.push(i);
}
    i++;
    console.log(fizzbuzz);
}
} fizzbuz();
