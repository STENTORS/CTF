function login(event,form){
	event.preventDefault();
	let inPut = form.user.value;
	let inPutpass = form.pass.value;
	if (inPut == "hackerman" && inPutpass == "pass"){
		document.location='3.html'
	} else if (inPut == "qwerty" && inPutpass == "qwerty_pass_very_secure"){
		document.location='1.html'
	} else{
		alert("Incorrect username or password");
	}
}

function home() {
	document.location='home.html'
}
