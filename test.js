let foodNames = ["Salad", "Bread", "Fish", "Rice"];
foodNames.unshift("Pizza", "Cake"); 
console.log("Results of unshift(): ");
console.log(foodNames);

let add = function(x,y){
    let sum = x+y;
    console.log(sum);
    return sum;    
}
console.log(add(1));

let log = "1 20 50"
console.log(log.split(" "));

const returnArray = [];
returnArray.push(parseInt("120"));
returnArray.push(parseInt("121"));
returnArray.push(parseInt("12"));
returnArray.push(parseInt("119"));

console.log(returnArray.sort((a,b) => a-b));