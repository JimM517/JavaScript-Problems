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














































