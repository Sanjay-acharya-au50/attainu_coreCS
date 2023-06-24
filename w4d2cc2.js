n = Number(require("prompt-sync")()());
{
    if(n==0)
    console.log("nither prime nor composit number")
else if(n == 0 )
{
    console.log(n, "this is not a prime number")
}
else if(n==1)
{
        console.log("this is not a prime number")
}
    
else{
    for(i=2; i<n; i++){
    if(n%i==0){
        console.log("this is not a prime number")
      break;
}
}
    if(i==n)
        console.log("this is a prime number")
}
}

    

