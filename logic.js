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
console.log('---------------------------------');

function ticketPrice(gender){
    if (gender === 'male'){
        return 100;
    }
    else if (gender === 'female'){
        return 300;
    }
    else if ( gender === 'other') {
        return 500;
    }
        else {
            return 1000;
        }
}

console.log(("for male:" + ticketPrice('male') + "TK"));
console.log(("for female:" + ticketPrice('female') + "TK"));
console.log(("for others:" + ticketPrice('other') + "TK"));
console.log(("for unknown:" + ticketPrice('X') + "TK"));

