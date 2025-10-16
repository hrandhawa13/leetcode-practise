//Recently, I failed a technical interview. I was stuck trying to validate the input(awful I know)
// Here I am trying to sharpen up those skills

//Validate string and make sure its not empty
//validate integer

function validateString(str){
    console.log(str);
    if(!str)
        return false;
    return true;
}

console.log("checking undefined- ", validateString(undefined));
console.log("checking null- ", validateString(null));
console.log("checking empty- ", validateString(""));
console.log("checking 2123- ", validateString("2123"));

