var EBUW;
var EBUU;
var EBUB;
var EBUR;
var EBUG;

var EBTW;
var EBTU;
var EBTB;
var EBTR;
var EBTG;

var total;

$(function() {

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/users/479540/media/recent/?access_token=479540.69e3081.ef47b766ba0948498fb0fd8a0ae02104",
    success: function(data) {
        for (var i = 0; i < 1; i++) {
          console.log(data);
            $("#instagram").append("<img src='" + data.data.images.thumbnail.url+ "'></img>");
        }
    }
});
});


function analyzeMana() {

}

function updateTable() {
    var EBUW = +basicW.value + +fetchGW.value + +fetchWU.value + +fetchWB.value + +fetchWR.value + +shockGW.value + +shockWU.value + +shockWB.value + +shockWR.value;
	var EBUU = +basicU.value + +fetchWU.value + +fetchUB.value + +fetchUR.value + +fetchUG.value + +shockWU.value + +shockUB.value + +shockUR.value + +shockUG.value;
    var EBUB = +basicB.value + +fetchUB.value + +fetchBR.value + +fetchWB.value + +fetchBG.value + +shockUB.value + +shockBR.value + +shockWB.value + +shockBG.value;
    var EBUR = +basicR.value + +fetchBR.value + +fetchRG.value + +fetchWR.value + +fetchUR.value + +shockBR.value + +shockRG.value + +shockWR.value + +shockUR.value;
    var EBUG = +basicG.value + +fetchRG.value + +fetchGW.value + +fetchUG.value + +fetchBG.value + +shockRG.value + +shockGW.value + +shockUG.value + +shockBG.value;
	
	var total = +basicW.value + +fetchGW.value + +fetchWU.value + +fetchWB.value + +fetchWR.value + +shockGW.value + +shockWU.value + +shockWB.value + +shockWR.value +
	            +basicU.value + +fetchUB.value + +fetchUR.value + +fetchUG.value + +shockUB.value + +shockUR.value + +shockUG.value +
				+basicB.value + +fetchBR.value + +fetchBG.value + +shockBR.value + +shockBG.value +
				+basicR.value + +fetchRG.value + +shockRG.value +
				+basicG.value;
	
	document.getElementById('tableEBUW').textContent = EBUW
	document.getElementById('tableEBUU').textContent = EBUU
	document.getElementById('tableEBUB').textContent = EBUB
	document.getElementById('tableEBUR').textContent = EBUR
	document.getElementById('tableEBUG').textContent = EBUG
	
	document.getElementById('tableTotalW').innerHTML = EBUW;
	document.getElementById('tableTotalU').innerHTML = EBUU;
	document.getElementById('tableTotalB').innerHTML = EBUB;
	document.getElementById('tableTotalR').innerHTML = EBUR;
	document.getElementById('tableTotalG').innerHTML = EBUG;
	
	document.getElementById('total').innerHTML = total;
}

function calculate() {
	worth = income.value < money.value/(time.value/60);
	if (worth) {
		document.getElementById('result').innerHTML = "Yes";
	}
	else {
		document.getElementById('result').innerHTML = "No";
	}
}
