function clickk() {
	//document.write("Ураааааа");
	var a = Number(document.getElementById('a').value);
	var b = Number(document.getElementById('b').value);
	var c = Number(document.getElementById('c').value);
	if (a != 0) {
		var D = Math.pow(b, 2) - 4 * a * c;
		if (D > 0) {
			var x1 = (-b - Math.sqrt(D)) / (2 * a);
			var x2 = (-b + Math.sqrt(D)) / (2 * a);
			document.getElementById('result').innerHTML = "х1 = " + x1 + "<br/>" + "х2 = " + x2 + "<br/>";
		} else if (D == 0) {
			var x = -b / (2 * a);
			document.getElementById('result').innerHTML = "х = " + x + "<br/>";
		} else {
			document.getElementById('result').innerHTML = "Рівняння немає коренів!!!<br/>";
		}
	} else {
		document.getElementById('result').innerHTML = "Рівняння не є квадратним!!!<br/>";
	}
}
function biquad() {
	//document.write("Ураааааа");
	var a = Number(document.getElementById('a').value);
	var b = Number(document.getElementById('b').value);
	var c = Number(document.getElementById('c').value);
	if (a != 0) {
		var D = Math.pow(b, 2) - 4 * a * c;
		if (D > 0) {
			var t1 = (-b - Math.sqrt(D)) / (2 * a);
			var t2 = (-b + Math.sqrt(D)) / (2 * a);
			if (t1 >= 0) {
				var x1 = Math.sqrt(t1);
				var x2 = -Math.sqrt(t1);
				if (t2 >= 0) {
					var x3 = Math.sqrt(t2);
					var x4 = -Math.sqrt(t2);
					document.getElementById('result').innerHTML = "х1 = " + x1 + "<br/>" + "х2 = " + x2 + "<br/>" + "х3 = " + x3 + "<br/>" + "х4 = " + x4 + "<br/>";
				} else {
					document.getElementById('result').innerHTML = "х1 = " + x1 + "<br/>" + "х2 = " + x2 + "<br/>" + "Рівняння має лише два корені!<br/>";
				}
			} else if (t2 >= 0) {
				var x3 = Math.sqrt(t2);
				var x4 = -Math.sqrt(t2);
				document.getElementById('result').innerHTML = "х1 = " + x3 + "<br/>" + "х2 = " + x4 + "<br/>" + "Рівняння має лише два корені!<br/>";
			} else {
				document.getElementById('result').innerHTML = "Рівняння немає коренів!!!<br/>";
			}
		} else if (D == 0) {
			var t = -b / (2 * a);
			if (t1 >= 0) {
				var x1 = Math.sqrt(t);
				var x2 = -Math.sqrt(t);
				document.getElementById('result').innerHTML = "х1 = " + x1 + "<br/>" + "х2 = " + x2 + "<br/>" + "Рівняння має лише два корені!<br/>";
			} else {
				document.getElementById('result').innerHTML = "Рівняння немає коренів!!!<br/>";
			}
		} else {
			document.getElementById('result').innerHTML = "Рівняння немає коренів!!!<br/>";
		}
	} else {
		document.getElementById('result').innerHTML = "Рівняння не є біквадратним!!!<br/>";
	}
}   
