//Below is a cash register programmed to give change.
//It uses OOP and recursion.

var cashRegister = {
    total: 0,
    change: 0,    
    coinNames: ["five dollar bills", "one dollar bills", "quarters", "dimes", "nickels", "pennies"],
    currency: [5.00, 1.00, 0.25, 0.10, 0.05, 0.01],
	setTotal: function (amount) {
		this.total = amount;
	},
	getPaid: function (amountPaid) {
		if (this.total > amountPaid) {
			console.log ("Not enough!");
		} else {
            this.change = amountPaid - this.total;
			console.log ("Give them:");
            this.makeChange(this.coinNames, this.currency, 0);
		}
	},
    howManyCoins: function (coinName, coinAmount, coinsSoFar) {
        if (this.change < coinAmount) {
            console.log(coinsSoFar + " " + coinName);
        } else {
            this.change -= coinAmount;
            this.change = this.change.toFixed(2);
            this.howManyCoins(coinName, coinAmount, coinsSoFar + 1);
        }
    },
    makeChange: function(coinNames, currency, index) {
        if (index >=currency.length) {
        	return;
        } else {
        	this.howManyCoins(coinNames[index], currency[index], 0);
        	this.makeChange(coinNames, currency, index + 1);
        }
    }
};    


//testing for correct output
cashRegister.setTotal(99.95);
//line below should be not enough
cashRegister.getPaid(50);
cashRegister.getPaid(124.77);