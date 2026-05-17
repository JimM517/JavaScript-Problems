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


// word values
function wordValues(words) {

    let result = [];

  for (let i = 0; i < words.length; i++) {
    let sum = 0;

    for (let char of words[i]) {
      if (char !== ' ') {
        sum += char.charCodeAt(0) - 96;
      }
    }

    result.push(sum * (i + 1));
  }

  return result;



}



// even times last
function evenLast(numbers) {

    let total = 0;

    if (numbers.length == 0) {
        return 0;
    }

    for (let i = 0; i < numbers.length; i++) {

        if (i % 2 == 0) {
            total += numbers[i];
        }


    }

    return total * numbers[numbers.length - 1];



}































