(function(){	//the document is loaded, and this function is carried out

alert("hI");

var image_array = ['images/index1.jpeg', 'images/index2.jpg', 'images/index3.jpg', 'images/index4.jpg'];
var index = 2;
window.setInterval(function(){
	document.getElementById("index-main-pic").src=image_array[index%4];
	index +=1;
	console.log("image changed");
}, 5000);

window.onload = function(){
	document.getElementById("color-button").onclick = function(){
		var hex_char=[0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
		var random = "#";

		do{
			random +=hex_char[Math.floor(Math.random() * hex_char.length)]
		}while(random.length<7)

		document.getElementById('color-changer').setAttribute("style", 'background-color: '+random+';');
		console.log(random);
	};
};


})();

