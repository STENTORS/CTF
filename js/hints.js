function c1(){
	alert("Try looking at the styling of the website, its easier than you think");
}
function c2(){
	alert("Right Click and go to inspect element try to find the flag there");
}
function c3(){
	alert("Try find the console");
}
function c4(){
	alert("Try manipulating all of the possible inputs");
}
function c5(){
	alert("Can you find the login in inspect element?");
}
function c6(){
	alert("One of the blog users has a weak pasword...");
}
function c7(){
	alert("Look at the different account urls...");
}

function c8(){
	alert("the discount code has a database vunrability... https://www.w3schools.com/sql/sql_injection.asp");
}

function c9(){
	alert("Check the image files");
}

function c10(){
	alert("Steganography: https://manytools.org/hacker-tools/steganography-encode-text-into-image/ ");
}

function c11(){
	alert("Check the CTF poster.... whats strange about the binary...");
}

function c(){
	alert("");
}


function cheatsheet(){
	if (document.getElementById("sql").innerHTML == ""){
		document.getElementById("sql").innerHTML = "admin' -- | admin' # | admin'/* | ' or 1=1-- | ' or 1=1# | ' or 1=1/* | ') or '1'='1-- | ') or ('1'='1--";
	}else{
		document.getElementById("sql").innerHTML = ""
	}
}
function home(){
	document.location = 'index.html'
}