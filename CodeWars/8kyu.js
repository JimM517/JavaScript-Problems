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







