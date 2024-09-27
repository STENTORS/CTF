function home() {
    document.location = 'index.html';
}

let userFlagArray = JSON.parse(localStorage.getItem("foundFlagStorage")) || [];

function reloadValues() {
    if (userFlagArray.length > 0) {
        for (let j = 0; j < userFlagArray.length; j++) {
            let numj = userFlagArray[j];
            document.getElementById(numj).innerText = "FOUND!!";
        }
    }
}

function check(event) {
    event.preventDefault();

    let flag = document.getElementById("flag").value;

    const flagArray = [
        "flag{A8d3J7kT6Q9}", //1 - CSS
        "flag{C9r2W5nP8X4}", //2 - HTML
        "flag{H6b1V8zK4Q3}", //3 - JS
        "flag{L5p9T2fY7X8}", //4.1 - Shop
        "flag{R7d3N8vK5M1}", //4.2 - Shop
        "flag{E9j4Q6cL3T2}", //5.1 - Blog
        "flag{M1k7X8nD5V4}", //5.2 - Blog
        "flag{Y2v6F9zQ3B8}", //5.3 - Blog
        "flag{P5n4J3kL8T7}", //6.1 - Gallery 
        "flag{Z8m7W9rT2K6}", //6.2 - Gallery
        "flag{B7x2}",        //7 - Poster
        "flag{D9k6Y5jN2T8}", //8 - Encryption
        "flag{T8d1Q4kV9W3}", //9 - HEX
        "flag{B9r5X3nL2T6}"  //10 - Storage
    ];

    for (let i = 0; i < flagArray.length; i++) {
        if (flagArray[i] === flag) {
            let num = i.toString(); // Convert index to string

            // Only add the flag if it hasn't been added before
            if (!userFlagArray.includes(num)) {
                document.getElementById(num).innerText = "FOUND!!";
                userFlagArray.push(num);

                // Save found flags in localStorage
                localStorage.setItem("foundFlagStorage", JSON.stringify(userFlagArray));

                alert("Correct flag number " + (i + 1) + " found");
            }
            return;
        }
    }
    alert("Incorrect flag. Try again.");
}

window.onload = function(e) {
    reloadValues();
};
