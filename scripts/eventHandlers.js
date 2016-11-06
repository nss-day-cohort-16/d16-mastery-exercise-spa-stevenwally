"use strict";

var CarLot = (function(oldCarLot) {

	oldCarLot.activateEvents = function() {
		// DOM-RELATED VARIABLES
		var userInput = document.getElementById("input");
		var inventory = document.getElementsByClassName("card");
		var color;


		// DOM-RELATED EVENT LISTENERS
		document.addEventListener("click", carClick);
		userInput.addEventListener("keyup", dynamicInput);

		// DOM-RELATED FUNCTIONS

		function carClick () {
			console.log(event.currentTarget);
			for (var i = 0; i < inventory.length; i++) {
				var cardPick = inventory[i];
				color = "#AEDFF2";
				CarLot.removeClass(cardPick, color);

				if (event.target === inventory[i] || event.target.closest("div") === inventory[i]) {
					color = "#C5DDDE";
					CarLot.addClass(cardPick, color);
					userInput.focus();
					userInput.value = "";
				}
			}
		}

		function dynamicInput(e) {
			for (var i = 0; i < inventory.length; i++) {
					var newText = document.getElementsByClassName("card-change");
				if (e.keyCode === 13) {
					userInput.value = "";
					carClick();
				} else if (inventory[i].classList.contains("card-change")) {
					newText[0].childNodes[4].innerHTML = userInput.value;
				}
			}
		}
	};
	return oldCarLot;
})(CarLot || {});