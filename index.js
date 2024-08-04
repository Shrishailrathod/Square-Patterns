
// STAR PATTERNS
// 6:-
function printHourglass(size) {
    // Top half
    for (let i = size; i >= 1; i--) {
        let line = '';
        for (let j = 0; j < size - i; j++) {
            line += '  ';
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            line += '* ';
        }
        console.log(line);
    }
    
    // Bottom half
    for (let i = 2; i <= size; i++) {
        let line = '';
        for (let j = 0; j < size - i; j++) {
            line += '  ';
        }
        for (let k = 0; k < (2 * i - 1); k++) {
            line += '* ';
        }
        console.log(line);
    }
}

printHourglass(5);








// 5:-
// function printDiamond(height) {
//     // Print the top half of the diamond
//     for (let i = 1; i <= height; i++) {
//         let line = '';
//         // Add spaces before the stars
//         for (let j = height; j > i; j--) {
//             line += '  ';
//         }
//         // Add stars
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             line += '* ';
//         }
//         console.log(line);
//     }
    
//     // Print the bottom half of the diamond
//     for (let i = height - 1; i >= 1; i--) {
//         let line = '';
//         // Add spaces before the stars
//         for (let j = height; j > i; j--) {
//             line += '  ';
//         }
//         // Add stars
//         for (let k = 1; k <= (2 * i - 1); k++) {
//             line += '* ';
//         }
//         console.log(line);
//     }
// }

// printDiamond(5);











// 4:-
// function printPyramid(height) {
//     for (let i = 1; i <= height; i++) {
//         let line = '';
//         // Add spaces before the stars
//         for (let j = 0; j < height - i; j++) {
//             line += '  ';
//         }
//         // Add stars
//         for (let k = 0; k < (2 * i - 1); k++) {
//             line += '* ';
//         }
//         console.log(line);
//     }
// }

// printPyramid(5);




// 3:-
// function printRightTriangle(number) {
//     for (let i = 1; i <=number; i++) {
//         let line = '';
//         for (let j = 1; j<=i; j++) {
//             line += '* ';
//         }
//         console.log(line);
//     }
// }

// printRightTriangle(5);






// 2:-
// function printSquare(size) {
//     for (let i = 0; i < size; i++) {
//         let line = '';
//         for (let j = 0; j < size; j++) {
//             line += '* ';
//         }
//         console.log(line);
//     }
// }

// printSquare(5);


// 1:-
// let n = 5;
// let m = 5;
// function printPattern(n, m) {


//     for (let i = 1; i <= n; i++) {
//         let line = '';

//         for (let j = 1; j <= m; j++) {
//             // Print '*' for the border and spaces for the inside of the rectangle
//             if (i === 1 || j === 1 || i === n || j === m) {
//                 // line += '* ';
//             } else {
//                 line += '  ';
//             }
//         }

//         console.log(line);
//     }
// }

// printPattern(n, m);
