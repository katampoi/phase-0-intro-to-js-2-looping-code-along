// Code your solutions in this file
const name = ['simon', 'Katampoi', 'mbatiany'];
const event = 'surprise';

function writeCards(name, event) {
    let newArray = [];
    for (let i = 0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        
    }

    return newArray;
}

function countDown(count = 10) {
    while (count >= 0) {
       console.log(count--);
   }
}
