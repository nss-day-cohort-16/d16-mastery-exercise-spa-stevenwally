"use strict";

////--> VARIABLES

const inventoryOutput = document.getElementById("output");
var carBlock = "";

////////---------> FUNCTIONS

function populatePage (inventory) { //////----> POPULATING DOM
	for (var i = 0; i < inventory.length; i++) {
		if (i % 3 === 0) {
			carBlock += `<div class="row">`; ////---> BUILDING PRODUCT STRING
		}

		carBlock += `<div id=${inventory[i].id} class="card col-md-3">`;
		carBlock += `<h3 class="make-model">${inventory[i].make} ${inventory[i].model}</h3>`;
		carBlock += `<img src="${inventory[i].image}">`;
		carBlock += `<h4 class="year">Year: ${inventory[i].year}</h4>`;
		carBlock += `<h4 class="price">$${inventory[i].price}</h4>`;
		carBlock += `<p class="info">Description: ${inventory[i].description}</p></div>`;

		 if ((i + 1) % 3 === 0) {
			carBlock += `</div>`; // CLOSE DIV ROW TAG AFTER 3 COLUMNS ARE MADE
		}
	}

	inventoryOutput.innerHTML += carBlock; ///---> OUTPUT PRODUCT STRING -> DOM
	CarLot.activateEvents(); //-> ACTIVATE EVENT LISTENERS + FUNCTIONS for DOM interactivity
}

CarLot.loadInventory(populatePage); // --> LOAD INVENTORY + INVOKE CALLBACK FUNCTION WHEN LOADED