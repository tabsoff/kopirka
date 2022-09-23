function calculate() {

 // [ЧБ/цвет][кол-во][А4][А3]
	const priceSheet = [
		[[1, 29, 36],
        [6, 24, 29],
        [11, 21, 26],
        [21, 18, 23],
        [51, 17, 22],
        [101, 16, 21],
        [501, 14, 19]],

        [[1, 69, 84],
        [6, 67, 75],
        [11, 63, 68],
        [21, 60, 65],
        [51, 45, 50],
        [101, 40, 45],
        [200, 35, 40]]
	];

	var result;
	var sheets = Number(document.getElementById("sheets").value);
	var price;

 	var radio = document.getElementsByName('color');
	for (var i = 0; i < radio.length; i++) {
    	if (radio[i].checked) {
      		color = i;
      		break;
    	}
  	}

  	radio = document.getElementsByName('size');
	for (var i = 0; i < radio.length; i++) {
    	if (radio[i].checked) {
      		size = i + 1;
      		break;
    	}
  	}

	for (var i = 6; i >= 0; i--) {
	   if (sheets >= priceSheet[color][i][0]) {
	   		price = priceSheet[color][i][size];
	   		break;
	   }
	}

	result = sheets * price;

	document.getElementById("result").innerHTML = result;

}