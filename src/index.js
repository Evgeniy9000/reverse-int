module.exports = function reverse(n) {
    let resersed = "";
    n = Math.abs(n);
    while (true) {
        let rem = n % 10;
        if (rem === 0 && n === 0) break;
        resersed += String(rem);
        n = Math.trunc(n / 10);
    }
    return parseInt(resersed);
};
