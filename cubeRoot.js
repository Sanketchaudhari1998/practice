function cubeRoot(num) {
    let isPerfectCube = false;
    for (let index = 1; index <= 100; index++) {
        let element = index * index * index;
        if (num === element) {
            let result = index;
            console.log(`The cube root of ${num} is ${result}`);
            isPerfectCube = true;
            break;
        }
    }

    if (!isPerfectCube) {
        console.log(`Given number ${num} is not a perfect cube of any number`);
    }
}
cubeRoot(125)
cubeRoot(16);
cubeRoot(64)
cubeRoot(15);
cubeRoot(8);
cubeRoot(27);

