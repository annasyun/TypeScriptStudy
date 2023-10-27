// narrowing
function 내함수(x) {
    if (typeof x === "number") {
        return x + 1;
    }
    else if (typeof x === "string") {
        return x + 1;
    }
    else {
        return 0;
    }
}
