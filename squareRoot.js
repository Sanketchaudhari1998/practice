function squareRoot(num) {
    let isPerfectSquare = false;
    for (let index = 1; index <= 100; index++) {
        let element = index * index;
        if (num === element) {
            let result = index;
            console.log(`The square root of ${num} is ${result}`);
            isPerfectSquare = true;
            break;
        }
    }

    if (!isPerfectSquare) {
        console.log(`Given number ${num} is not a perfect square of any number`);
    }
}
squareRoot(16)
squareRoot(15);