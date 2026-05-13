// calculating with functions
function zero(op) {
    if (!op) {
        return 0;
    }
    return op(0);
}

function one(op) {
    if (!op) {
        return 1;
    }
    return op(1);
}

function two(op) {
    if (!op) {
        return 2;
    }
    return op(2);
}

function three(op) {
    if (!op) {
        return 3;
    }
    return op(3);
}

function four(op) {
    if (!op) {
        return 4;
    }
    return op(4);
}

function five(op) {
    if (!op) {
        return 5;
    }
    return op(5);
}
function six(op) {
    if (!op) {
        return 6;
    }
    return op(6);
}

function seven(op) {
    if (!op) {
        return 7;
    }
    return op(7);
}

function eight(op) {
    if (!op) {
        return 8;
    }
    return op(8);
}

function nine(op) {
    if (!op) {
        return 9;
    }
    return op(9);
}

function plus(right) {
    return function(left) {
        return left + right;
    }
}

function minus(right) {
    return function(left) {
        return left - right;
    }
}

function times(right) {
    return function(left) {
        return left * right;
    }
}
function dividedBy(right) {
    return function(left) {
        return Math.floor(left / right);
    }
}




// extract the domain from the url
function domainName(url) {

    url = url.replace("http://", "");
    url = url.replace("https://", "");
    url = url.replace("www.", "");

    console.log(url);

    return url.split(".")[0];


}



// max subarray sum
var maxSequence = function(arr) {

    let current = 0;
    let maxVal = 0;

    for (let i = 0; i < arr.length; i++) {

        current = Math.max(arr[i], current + arr[i]);
        maxVal = Math.max(maxVal, current);


    }


    return maxVal;


}






// is my friend cheating??
function removeNb(n) {

     const total = (n * (n + 1)) / 2;
    const res = [];

    for (let a = 1; a <= n; a++) {
        let b = (total - a) / (a + 1);

        if (Number.isInteger(b) && b <= n) {
            res.push([a, b]);
        }
    }

    return res;



}



// integers / recreation one
function listSquared(m, n) {

    let res = []
    for (let i = m; i <= n; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                sum += j * j;
            }
        }
        let root = Math.sqrt(sum);

        if (Number.isInteger(root)) {
            res.push([i, sum]);
        }
    }
    return res;
}




// mean square error
const solution = function(firstArray, secondArray) {
  
    let sum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        let diff = firstArray[i] - secondArray[i];
        sum += diff * diff;
    }

    return sum / firstArray.length;

}




// moving zeros to the end
function moveZeros(arr) {
  
   let k = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[k++] = arr[i];
        }
    }

    while (k < arr.length) {
        arr[k++] = 0;
    }

    return arr;

}





// scramblies
function scramble(str1, str2) {

    let map = {};

    
    for (let char of str1) {
        map[char] = (map[char] || 0) + 1;
    }

   
    for (let char of str2) {
        if (!map[char]) {
            return false;
        }
        map[char]--;
    }

    return true;




}



// a chain adding function
function add(n) {


    function next(x) {
        return add(n + x);
    }

    next.valueOf = function() {
        return n;
    }

    return next;


}









// first non-repeating character
function firstNonRepeatingLetter(s) {
  // Add your code here
  let charMap = {};

   
    for (let char of s.toLowerCase()) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    for (let char of s) {
        if (charMap[char.toLowerCase()] === 1) {
            return char;
        }
    }

    return "";
}












