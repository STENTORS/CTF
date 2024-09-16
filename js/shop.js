let basket = [];
let amount1 = 5;
let amount2 = 5;
let amount3 = 5;

function addToBasket(item, price, itemval) {
    basket.push({ item, price });
    
    if (itemval == 1) {
        amount1 += 1;
        document.getElementById('amount-display1').innerText = amount1;
    }
    else if (itemval == 2) {
        amount2 += 1;
        document.getElementById('amount-display2').innerText = amount2;
    }
    else if (itemval == 3) {
        amount3 += 1;
        document.getElementById('amount-display3').innerText = amount3;
    }
}

function remove(item) {
    if (item == 1) {
        if (amount1 <= 0) {
            alert("flag{L5p9T2fY7X8}");
        } else {
            amount1 -= 1;
            document.getElementById('amount-display1').innerText = amount1;
        }
    } 
    else if (item == 2) {
        if (amount2 <= 0) {
            alert("flag{L5p9T2fY7X8}");
        } else {
            amount2 -= 1;
            document.getElementById('amount-display2').innerText = amount2;
        }
    } 
    else if (item == 3) {
        if (amount3 <= 0) {
            alert("flag{L5p9T2fY7X8}");
        } else {
            amount3 -= 1;
            document.getElementById('amount-display3').innerText = amount3;
        }
    }
}


function viewBasket() {
	let basketContent = 'Your Basket:\n';
	let total = 0;
	basket.forEach(entry => {
		basketContent += `${entry.item} - ${entry.price} Points\n`;
		total += entry.price;
	});
	basketContent += `\nTotal: ${total} Points`;
	alert(basketContent);
}
		
function checkout(){
	document.location='checkout.html'
}

function home() {
	document.location='index.html'
}

