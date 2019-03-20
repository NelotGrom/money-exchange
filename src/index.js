module.exports = function makeExchange(coins) {
    var result = {};
    if (coins >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    } else if (coins <= 0) {
        return result;
    } else {
    result.H = Math.floor(coins / 50);
    result.H != 0 ? true : delete result.H;   
    result.Q = Math.floor(coins % 50 / 25); 
    result.Q != 0 ? true : delete result.Q;   
    result.D = Math.floor(coins % 25 / 10);
    result.D != 0 ? true : delete result.D;  
    result.N = Math.floor(coins % 25 % 10 / 5);     
    result.N != 0 ? true : delete result.N;  
    result.P = (coins % 5);
    result.P != 0 ? true : delete result.P;  
    return result;
    };
};