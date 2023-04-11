var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

let button = document.createElement("button");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";

}

function randomNumberButton() {

	button.appendChild(document.createTextNode("Random"));
	body.appendChild(button);
	
}

function generateRandomNumbers() {
	// let number1 = document.createElement("h4");
	// let number2 = document.createElement("h4");
	
	// number1.appendChild(document.createTextNode(Math.floor(Math.random() * 1000000000)));;
	// body.appendChild(number1);

	// number2.appendChild(document.createTextNode(Math.floor(Math.random() * 1000000000)));
	// body.appendChild(number2);


	//https://convertingcolors.com/blog/article/how_to_get_random_colors.html#:~:text=For%20a%20random%20RGB%20color,convert%20from%20decimal%20to%20hexadecimal.
    let randomNumber = Math.floor((Math.random() * 16777215));
    //hexadecimal In addition, it is toString(16) because hexadecimal means 16 and it is base 16. 
    //Therefore, toString(16) converts a given variable into a String in a desired form, 
    //in this case you want it to be in the hexadecimal form.
    let randomHex    = randomNumber.toString(16);
    //pad start of string so that it is 6 character, using 0
    let randomHexColor = randomHex.padStart(6, 0);
   

	let randomNumber2 = Math.floor((Math.random() * 16777215));
    let randomHex2    = randomNumber2.toString(16);
    let randomHexColor2 = randomHex2.padStart(6, 0);

	color1.value = "#"+randomHexColor
	color2.value = "#" + randomHexColor2

	setGradient();
console.log(randomNumber)
console.log(randomHex)
console.log(randomHexColor)
}


button.addEventListener("click", generateRandomNumbers)

window.addEventListener("load", randomNumberButton);

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

