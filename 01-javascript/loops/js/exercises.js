for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
};

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
};

for (let i = 0; i<= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
};

const assignGrade = function(num) {
    if (num >= 90) {
        return `A`;
    } else if (num >= 80) {
        return `B`;
    } else if (num >= 70) {
        return `C`;
    } else if (num >= 60) {
        return `D`;
    } else if (num >= 50) {
        return `E`;
    } else {
        return `F`;
    }
};

for (let i = 60; i <= 100; i++) {
    if (i >= 90) {
        console.log(`For ${i}, you got a A.`)
    } else if (i >= 80) {
        console.log(`For ${i}, you got a B.`)
    } else if (i >= 70) {
        console.log(`For ${i}, you got a C.`)
    } else
        console.log(`For ${i}, you got a D.`)
};
