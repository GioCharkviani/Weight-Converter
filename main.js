//
// Pounds
// 1 lb * 0.45359237 * 1000 = Grames
// 1 lb * 0.45359237 = KiloGrames
// 1 lb * 16 = Ounces
//

var convertResult = document.querySelectorAll("p");
var numberInput = document.querySelector("input");
var displayDiv = document.querySelectorAll("div");

numberInput.addEventListener("input", function() {
    for(var i = 0; i < displayDiv.length; i++) {
        displayDiv[i].className = "";
    }
    convertResult[0].textContent = this.value *  0.45359237 * 1000;
    convertResult[1].textContent = this.value *  0.45359237;
    convertResult[2].textContent = this.value * 16;

});