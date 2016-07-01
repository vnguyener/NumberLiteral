var NumberLiteralMatch = function() {
	var singles = ['one', 'two', 'three', 'four', 'five', 'size', 'seven', 'eight', 'nine'],
		teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
		doubles = ['twenty', 'thirty','fourty','fifty','sixty','seventy','eighty','ninety'];

	var convert = function(number) {
		if (number === 0) return "zero";
		else if (number < 10) return singles[number - 1];
		else if (number >= 10 && number < 20) return teens[number-10];
		else {
			var doublesLiteral = "",
				onesPlace = "";

			if (number%10 !== 0) {
				onesPlace = singles[number%10-1];
				return doubles[Math.floor(number/10) - 2] + " " + onesPlace
			}
			else {
				return doubles[Math.floor(number/10) - 2];
			}
		}
	}

	return {
		convert: convert
	}
};

module.exports = NumberLiteralMatch;