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