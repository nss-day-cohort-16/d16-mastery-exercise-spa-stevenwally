"use strict";

var CarLot = (function (oldCarLot) {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
          inventory = JSON.parse(event.target.responseText).cars;
          callback(inventory);
      });
    },

    getInventory: function() {
      return inventory;
    }
  };

})(CarLot || {});
