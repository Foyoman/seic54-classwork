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
        console.log(`For ${num}, you got a A.`)
    } else if (num >= 80) {
        console.log(`For ${num}, you got a B.`)
    } else if (num >= 70) {
        console.log(`For ${num}, you got a C.`)
    } else if (num >= 60) {
        console.log(`For ${num}, you got a D.`)
    } else if (num >= 50) {
        console.log(`For ${num}, you got an E.`)
    } else {
        console.log(`For ${num}, you got an F.`)
    }
};

for (let i = 60; i <= 100; i++) {
    assignGrade(i);
};

const bands = ['RHCP', 'Radiohead', 'Nirvana','Sticky Fingers'];
for (let i = 0; i < bands.length; i++) {
    console.log(`My #${i + 1} band is ${bands[i]}.`);
}