function c1() {
    alert("There is a strange gap in the first box? Try highlighting it");
}

function c2() {
    alert("Right-click and go to 'Inspect Element'; try to find the flag there.");
}

function c3() {
    alert("Try to find the console in Inspect Element.");
}

function c4() {
    alert("Try manipulating all of the possible inputs.");
}

function c5() {
    alert("Can you find the login in 'Inspect Element' script data?");
}

function c6() {
    alert("One of the blog users has a weak 'pass'word...");
}

function c7() {
    alert("Look at the different account URLs...");
}

function c8() {
    alert("The discount code has a database vulnerability... https://www.w3schools.com/sql/sql_injection.asp");
}

function c9() {
    alert("Check the image file names.");
}

function c10() {
    alert("Steganography is the practice of hiding secret information within an ordinary file, such as an image Use this tool on the images: https://manytools.org/hacker-tools/steganography-encode-text-into-image/");
}

function c11() {
    alert("Use the steganography tool from the last flag with the favicon image in this website (which you can find in the head tag in the html of any of the pages). Use that information to locate and scan the nfc with your phone (ensure to enable nfc on your phone");
}

function c12() {
    alert("ROT13 encryption.");
}

function c13() {
    alert("Gather and convert all the HEX on the homepage.");
}

function c14() {
    alert("Look in the local storage section of 'Inspect Element' for the flag.");
}

function c15() {
    alert("The system only wants a text file; you have to spoof another file type (BAT, PIF, or EXE) to make it look like a text file. Use this guide for help: https://www.malwarebytes.com/blog/news/2016/09/lesser-known-tricks-of-spoofing-extensions");
}

function c() {
    alert("");
}

function cheatsheet() {
    const sqlElement = document.getElementById("sql");
    if (sqlElement.innerHTML === "") {
        sqlElement.innerHTML = "<ul><li>' or ''='</li><li>' or 1=1--</li><li>' or 1=1#</li></ul>";
    } else {
        sqlElement.innerHTML = "";
    }
}

function home() {
    document.location = 'home.html';
}
