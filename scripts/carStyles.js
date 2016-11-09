"use strict";

var CarLot = (function (oldCarLot) {

		oldCarLot.addClass = function(arg, color) {
			arg.classList.add("card-change");
			arg.style.backgroundColor = color;
		};

		oldCarLot.removeClass = function(arg, color) {
			arg.classList.remove("card-change");
			arg.style.backgroundColor = color;
		};

return oldCarLot;

})(CarLot || {});