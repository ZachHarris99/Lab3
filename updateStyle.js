function update() {
	var myP = document.getElementById("p1");
	
	myP.style.borderWidth = document.getElementById("border_width").value;
	myP.style.borderColor = 'rgb(' + document.getElementById("border_red").value + ',' + document.getElementById("border_green").value + ',' + document.getElementById("border_blue").value + ')';
	myP.style.backgroundColor = 'rgb(' + document.getElementById("bg_red").value + ',' + document.getElementById("bg_green").value + ',' + document.getElementById("bg_blue").value + ')';
	
}
