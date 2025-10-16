function isInteger(input){
    return Number.isInteger(input);
}

function isNumber(input){
    return typeof input === 'number' && !isNaN(input)
}

console.log("Validating 123- ", isInteger(123));
console.log("Validating 1.23- ", isInteger(1.23));
console.log("Validating string 123- ", isInteger("123"));
console.log("Validating NaN- ", isInteger(NaN));



console.log("Validating 123- ", isNumber(123));
console.log("Validating 1.23- ", isNumber(1.23));
console.log("Validating string 123- ", isNumber("123"));
console.log("Validating NaN- ", isNumber(NaN));