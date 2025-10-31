function doMath(numb1, numb2, numb3){
    const sum = numb1 + numb2 + numb3 ;
    const diff = sum - numb3 ;
    const mul = diff * numb3 ;
    const divi = mul / 2 ;
    const result = divi ;
return result;
}

console.log(doMath(20,15,5));

console.log('--------------------------------------');

function isEven (number){
    if (number % 2 ===0 ){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(49));
console.log('--------------------------------------');

function mToK (number1){
    const kilo = number1 * 1.60934 ;
    return kilo;
}

console.log(mToK(5));
console.log('--------------------------------------');

function evenSizedString(str){
    const size = str.length;
    console.log( str , size);
    if (size % 2 ===0 ){
        console.log('even size');
        return true;
        
    }
    else {
        console.log('odd size');

        return false;
    }
}

evenSizedString('dhaka');
//evenSizedString('dhaka akhon faka');
console.log('--------------------------------------');
console.log('Milestone 3: CSS frame work');

function 