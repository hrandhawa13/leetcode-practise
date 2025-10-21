/*
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

function processLogs(logs, threshold) {
    const userTransactions = new Map();
    let sender_id, recipient_id;

    // TC: O(n)
    // SC: O(n)
    for(let log of logs){
        let logArray = log.split(" ");
        sender_id = logArray[0];
        recipient_id = logArray[1];
        userTransactions.set(sender_id, (userTransactions.get(sender_id) || 0) + 1);
        if(sender_id !== recipient_id){
            userTransactions.set(recipient_id, (userTransactions.get(recipient_id) || 0) + 1);
        }
    }    

    const returnArray = [];
    // TC : O(n)
    //SC: O(n)
    for (const [key, value] of userTransactions){
        if(value >= threshold){
            returnArray.push(parseInt(key));
        }
    }
    //TC: n logn 
    return returnArray.sort((a,b) => a-b);
    

}
