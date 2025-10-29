const fs = require('fs');

function parseInput(filename) {
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const k = parseInt(data.keys.k);
    const entries = [];

    for (const key in data) {
        if (key === 'keys') continue;
        const x = parseInt(key);
        const base = parseInt(data[key].base);
        const yStr = data[key].value;
        const y = BigInt(parseIntBase(yStr, base));
        entries.push({ x: BigInt(x), y });
    }

    return entries.slice(0, k); 
}

function parseIntBase(value, base) {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz';
    let result = BigInt(0);
    for (let i = 0; i < value.length; i++) {
        result = result * BigInt(base) + BigInt(chars.indexOf(value[i].toLowerCase()));
    }
    return result;
}

function lagrangeInterpolationAtZero(points) {
    let result = BigInt(0);
    const k = points.length;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let numerator = BigInt(1);
        let denominator = BigInt(1);

        for (let j = 0; j < k; j++) {
            if (i === j) continue;
            let xj = points[j].x;
            numerator *= -xj;
            denominator *= (xi - xj);
        }

        let li = numerator / denominator;
        result += yi * li;
    }

    return result;
}


const result1 = parseInput('test_input_1.json');
const secret1 = lagrangeInterpolationAtZero(result1);

const result2 = parseInput('test_input_2.json');
const secret2 = lagrangeInterpolationAtZero(result2);

console.log("Secret 1:", secret1.toString());
console.log("Secret 2:", secret2.toString());
