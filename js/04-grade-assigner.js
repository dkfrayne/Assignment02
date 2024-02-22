let assigner = (x) => {
    if(x < 1 || x > 100) return null;
    else if(x < 60) return 'F'; 
    else if(x < 70) return 'D';
    else if(x < 80) return 'C';
    else if(x < 90) return 'B';
    else return 'A';
}
let score = assigner(Number(prompt("Enter a score between 1 and 100")));
if(score === null) alert("Score must be between 1 and 100.");
else alert(`You received a ${score}`);