// set alarm L1
function setAlarm(employed, vacation) {

    return employed && !vacation
}





// sort and star
function sortAndStar(s) {

   let arr = s.sort()
   let val = arr[0]
   let result = ""

   for (let i = 0; i < val.length; i++) {
        result += val[i]
        if (i !== val.length - 1) {
            result += "***"
        }
   }
    
   return result


}





// find smallest number in array
function findSmallest(arr) {

    const result = arr.reduce((curr, prev) => Math.min(curr, prev));

    return result;




}






// Training JS #4: Basic Arrays
function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length - 1];
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el);
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop();
  return arr;
}





// sum arrays 
function sum(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((next, prev) => next + prev);
}




// you only need one
function check(a, x) {

  for (let i = 0; i < a.length; i++) {

    if (a[i] === x) {
      return true;
    }

  }

  return false;


}



// Array.diff
function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}


// be concise IV - index of an element in an array
function find(a,e) {
  return(i=a.indexOf(e))+1?i:"Not found"
}


// reversed sequence
const reverseSeq = n => {
    let res = []
    for (let i = n; i >= 1; i--) {
      res.push(i);
    }
    return res;
}







































