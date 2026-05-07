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







