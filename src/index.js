// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {
        "H": 50,
        "Q": 25,
        "D": 10,
        "N": 5,
        "P": 1
    };
    let result = {};
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency < 1){
        return {};
    }
    else {
        if (Math.floor(currency / coins.H) !== 0) {
            let half_dollars = Math.floor(currency / coins.H);
            result["H"] = half_dollars;
            currency -= half_dollars*coins.H;

        }
        if (Math.floor(currency / coins.Q) !== 0) {
            let quarters = Math.floor(currency / coins.Q);
            result["Q"] = quarters;
            currency -= quarters*coins.Q;
        }
        if (Math.floor(currency / coins.D) !== 0) {
            let dimes = Math.floor(currency / coins.D);
            result["D"] = dimes;
            currency -= dimes*coins.D;
        }
        if (Math.floor(currency / coins.N) !== 0) {
            let nickels = Math.floor(currency / coins.N);
            result["N"] = nickels;
            currency -= nickels*coins.N;
        }
        if (Math.floor(currency / coins.P) !== 0) {
            let pennies = Math.floor(currency / coins.P);
            result["P"] = pennies;
        }
        return result;
    }
}
