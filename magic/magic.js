function Magic() {
	var card1  = document.getElementById('c1').value
	var suit1 = document.getElementById('s1').value
	var card2  = document.getElementById('c2').value
	var suit2 = document.getElementById('s2').value
	var card3  = document.getElementById('c3').value
	var suit3 = document.getElementById('s3').value
	var card4  = document.getElementById('c4').value
	var suit4 = document.getElementById('s4').value
	res = getHiddenCard(card1,suit1,card2,suit2,card3,suit3,card4,suit4);
	document.getElementById('card-hidden').innerHTML = "card is " + res.card + " of " + res.suit;
}

function getHiddenCard(c1,s1,c2,s2,c3,s3,c4,s4) {
	res = {
		"card":"cardans",
		"suit": s4,
	}
	var offset = getOffset(c1,s1,c2,s2,c3,s3);
	console.log("offset = ", offset)
	var card = parseInt(c4) + parseInt(offset);
	if (card > 13) {
		card = card % 13;
	}
	if (card === 11) {
		card = 'J';
	} else if (card === 12) {
		card = 'Q';
	} else if (card === 13) {
		card = 'K';
	} else {
		// do nothing
	}
	res.card = card
	return res
}

function getOffset(c1,s1,c2,s2,c3,s3) {
	var a = parseInt(c1) + order(s1);
	var b = parseInt(c2) + order(s2);
	var c = parseInt(c3) + order(s3);
	console.log(a,b,c);
	if (a < b && b < c) {
		return 1;
	} else if (a < c && c < b) {
		return 2;
	} else if (b < a && a < c) {
		return 3;
	} else if (b < c && c < a) {
		return 4;
	} else if (c < a && a < b) {
		return 5;
	} else {
		return 6;
	}
}

function order(x) {
	if (x === 'c') {
		return 100;
	} else if (x == 'd') {
		return 200;
	} else if (x == 'h') {
		return 300;
	} else {
		return 400;
	}
}