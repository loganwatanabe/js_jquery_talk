(function() {	//the document is loaded, and this function is carried out

	//alert("hi");

	var image_array = ['images/index1.jpeg', 'images/index2.jpg', 'images/index3.jpg', 'images/index4.jpg']

	var index_num = 2;
	window.setInterval(function(){
		document.getElementById("index-main-pic").src=image_array[index_num%4];
		index_num +=1;
		console.log("image changed");

	}, 5000);

	window.onload = function() {
		document.getElementById("color-button").onclick = function(){

			var hex_chars = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
			var rando = "#"
			do{
				rando+= hex_chars[Math.floor(Math.random()*hex_chars.length)]
			}while(rando.length<7);


			document.getElementById("color-changer").setAttribute("style", "background-color:"+rando+";");
			console.log(rando);

		};
	}



})();

