function home() {
    document.location = 'index.html';
}

// Initialize userFlagArray from localStorage
let userFlagArray = JSON.parse(localStorage.getItem("foundFlagStorage")) || [];

function reloadValues() {
    let storedFlags = JSON.parse(localStorage.getItem("foundFlagStorage"));
    
    // Check if there are stored flags
    if (storedFlags !== null) {
        for (let j = 0; j < storedFlags.length; j++) {
            let numj = storedFlags[j];
            let textj = numj.toString();
            let flagValue = "flag{" + (parseInt(numj) + 1) + "}";
            
            // Update the innerText of the corresponding element
            document.getElementById(textj).innerText = "FOUND!!";
        }
    }
}

function check(event) {
    event.preventDefault();
    
    let flag = document.getElementById("flag").value;
    
    const flagArray = [
        "flag{A8d3J7kT6Q9}",
        "flag{C9r2W5nP8X4}",
        "flag{H6b1V8zK4Q3}",
        "flag{L5p9T2fY7X8}",
        "flag{R7d3N8vK5M1}",
        "flag{E9j4Q6cL3T2}",
        "flag{M1k7X8nD5V4}",
        "flag{Y2v6F9zQ3B8}",
        "flag{P5n4J3kL8T7}",
        "flag{Z8m7W9rT2K6}",
		"flag{B7x2}"
    ];
    
    for (let i = 0; i < flagArray.length; i++) {
        if (flagArray[i] === flag) {
            let num = i;
            let text = num.toString();
            
            // Only add the flag if it hasn't been added before
            if (!userFlagArray.includes(text)) {
                let value = document.getElementById(text).innerText = "FOUND!!";
                userFlagArray.push(text);
                
                // Save found flags in localStorage
                localStorage.setItem("foundFlagStorage", JSON.stringify(userFlagArray));
                
                alert("Correct flag number " + (num + 1) + " found");
            }
            return; 
        }
    }
    alert("Incorrect flag. Try again.");
}

window.onload = function(e) {
    reloadValues();
};
