function check(event) {
    event.preventDefault();
    let discount = document.getElementById('discount').value;
    
    if (discount === "OR '1'='1' --") {
        alert("flag{R7d3N8vK5M1}");
    } else {
        alert("Invalid code");
    }
}


function home() {
	document.location='index.html'
}

