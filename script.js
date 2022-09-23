function calculate() {

	const A4_1 = [
        [1, 29],
        [6, 24],
        [11, 21],
        [21, 18],
        [51, 17],
        [101, 16],
        [501, 14]
	];

	var result;
	var sheets = Number(document.getElementById("sheets").value);
	var price;

	for (var i = 6; i >= 0; i--) {
	   if (sheets >= A4_1[i][0]) {
	   		price = A4_1[i][1];
	   		break;
	   }
	}

	result = sheets * price;

	document.getElementById("result").innerHTML = result;
}