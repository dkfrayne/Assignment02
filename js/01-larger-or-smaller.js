let p = Number(prompt("Enter a number")), q = Number(prompt("Enter another number"));
let large = (x, y) => {
    if(x == y) return null;
    return x > y ? x : y;
}
let l = large(p, q);
document.write(l === null ? `The two are equal.` : `${l} is the larger number.`);

