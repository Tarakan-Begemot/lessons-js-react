if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');

}

const num = 100;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case 49:
        console.log('Bip');
        break;
    case 100:
        console.log('Wooo');
        break;
    case 50:
        console.log('Yeap');
        break;
    default:
        console.log('NO!');
        break;
}