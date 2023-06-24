// 1. "fuzz" if the num % 3 & num % 5
// 2. "fuzz" if the num % 5
// 3. "fizzfuzz" num % 3 & num % 5

((num)=>{
for(let i=1; i<=15; i++)
{
    //check for 15
    if(i%3===0 && i%5===0)
    {
        console.log("FizzFuzz");
        i++;
    }
    }
// check for 3
    if(i%3===0)
    {
    console.log("Fizz");
    i++;
    }
// check for 5
    if(i%5===0)
    {
    console.log("Fuzz");
    i++;
    }


    
