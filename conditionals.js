

let pups = ['Ama', 'kwessi', 'Adjoa', 'Amoah', 1, 2, 3];

console.log(pups[3]);

let High=true;

if (High==true) {
    console.log('You\'re\ a liar');
    
} else{
    console.log('buy some weed');
}

let score=57;

if (score>=80) {
    console.log('A');
}else if (score>=70) {
    console.log('B');
} else if (score>=60) {
    console.log('C');
} else{
    console.log('Try Again');
}

switch (score) {
    case 50:
        console.log('almost there')
        break;
        case 57:
        console.log('bingo')
        break;
        case 67:
        console.log('so off')
        break;
    default:
        console.log('better luck next time')
        break;
}

for (let r = 3; r <= 45; r+=3) {
   
    
    console.log(r);
    
}

while (score <100) {
    
    console.log(score);
    score +=3
}