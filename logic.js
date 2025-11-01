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
console.log("-----------------------------------------");


function halfOrTriple(num, half){ 
    if(half === true){ 
        return num / 2; 
    } 
    else { 
        return num * 3;
     } 
    } 
    
    console.log("By Doing Half:" + halfOrTriple(10,true)); 
    // 5 
    console.log("By Doing Tripple:" + halfOrTriple(10,false)); 
    // 30 
console.log("-----------------------------------------");


function halfOrTriple(num, half){ if(half === true){ 
    return num / 2; 
} 

else { 
    return num * 3; 
    } 
} 

console.log(halfOrTriple(10,true)); 
// 5 
console.log(halfOrTriple(10,false)); 
// 30 

function doOrDie(number, Good){
    if (number>40 === true ){
        return "Passed"
    }
    else  {
            return "Please die"
    }
}

console.log(doOrDie(30, true));

console.log("-----------------------------------------");

function checkDiscount(age, isStudent, hasCoupon) {
    if (age <= 35 && (isStudent === true && hasCoupon === true)) {
        return "Special Price"; 
    } else if (isStudent) {
        return "10% Off";      
    } else if (hasCoupon) {
        return "5% Off";        
    } 
    // 4. Upore kono discount na pele, ei block-ti cholbe
    else {                      
        return "Sorry";
    }
}

console.log("2. Discount:" + checkDiscount(25, true, false));

console.log("-----------------------------------------");

function isTripPossible ( budget, days , weather){
     if ((budget >=1000 && days>=7) || (weather === 'good')) {
       return "Let's Go for a trip"
}  
    else if (budget<=500){
        return "Day Trip Possible"
    }
    else {
        return "Need more money or savings for Trip"
    }
  }  

    console.log(isTripPossible(200, 2));