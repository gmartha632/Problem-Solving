//Even numbers 
function sumNumbers(n){
    let result = 0 ;
for (let start=1;start <= n ; start++){
    
    //result = result + start 
    result += start;

}
return result;

}
console.log(sumNumbers(10));


for (let i = 1; i <= 10; i += 2) {
    // prints each value of I once
    console.log(i);
}

//decreasing 
let count = 5;

while (count >= 1) {

    console.log(`Count is: ${count}`);

    count--;

}

// odd num series

function oddnum(l){
    let i=1;
   let str ="" ;
    while(i <= l){
        let a = 2*i -1;
        str += a + " ," ;
        i++;
    }

    return str.slice(0,-2) ;
}
console.log(oddnum(6));
