// disemvowel trolls
function disemvowel(string) {
    let result = string.replace(/[aeiou]/gi, "");
    return result;
}





// binary addition
function toBinary(a, b) {
    let sum = (a + b).toString(2);
    return sum;
}





// the dropWhile function
function dropWhile(array, predicate) {

     for (let i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            return array.slice(i);
        }
    }

    return [];

}



// how many unique consonants?
function countConsonants(str) {

    let vowels = "aeiou";
    const conSet = new Set();

    for (let i = 0; i < str.length; i++) {

        let char = str.charAt(i).toLowerCase();

        if (
            char >= 'a' &&
            char <= 'z' &&
            !vowels.includes(char)
        ) {
            conSet.add(char);
        }
    }

    return conSet.size;


}



