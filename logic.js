function doubleOrSquare(num, doDouble){ 
    if(doDouble === true){ 
        return num * 2; 
    } 
    else { 
        return num * num; 
    } 
} 

console.log(doubleOrSquare(4, true)); 
// 8 
console.log(doubleOrSquare(4, false));
// 16 