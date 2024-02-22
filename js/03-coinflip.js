let flip = Math.round(Math.random());
let choice = confirm("Choose OK for heads and Cancel for tails.");
let ht = (x) => { return x ? "heads":"tails"; }
let msg = (x, y) => { return x == y ? "You win!":"You lose"; }
alert(`The flip was ${ht(flip)} and you chose ${ht(choice)}... ${msg(flip, choice)}`);