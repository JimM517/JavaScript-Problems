// persistent bugger
function persistence(num) {
    let count = 0;

    while (num >= 10) {
        let product = 1;

        while (num > 0) {
            product *= (num % 10);
            num = Math.floor(num / 10); // FIX
        }

        num = product;
        count++;
    }

    return count;
}



// find the missing letter
function findMissingLetter(arr) {

    for (let i = 0; i < array.length; i++) {
        
       let curr = array[i].charCodeAt(0)
       let next = array[i + 1].charCodeAt(0)

       if (next - curr > 1) {
            return String.fromCharCode(curr + 1)
       }


    }
}






// weird string case
function toWeirdCase(string) {
    let arr = string.split(" ");
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let weirdWord = "";
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 == 0) {
                weirdWord += arr[i][j].toUpperCase();
            } else {
                weirdWord += arr[i][j].toLowerCase();
            }
        }
        result.push(weirdWord);
    }
    

    return result.join(" ");


}



// find the unique number
function findUniq(arr) {
    let numMap = {};
    
    for (let i = 0; i < arr.length; i++) {
        numMap[arr[i]] = (numMap[arr[i]] || 0) + 1;
    }

    for (let key in numMap) {
        if (numMap[key] == 1) {
            return Number(key);
        }
    }


}

































