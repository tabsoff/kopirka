alert("Hello");

function calculate() {

	// Кол-во, А4, А3
	const priceBW = [
        [1, 29, 36],
        [6, 24, 29],
        [11, 21, 26],
        [21, 18, 23],
        [51, 17, 22],
        [101, 16, 21],
        [501, 14, 19]
	];

	var result;
	var sheets = Number(document.getElementById("sheets").value);
	var price;

	for (var i = 6; i >= 0; i--) {
	   if (sheets >= priceBW[i][0]) {
	   		price = priceBW[i][1];
	   		break;
	   }=
	}

	result = sheets * price;

	document.getElementById("result").innerHTML = result;

}