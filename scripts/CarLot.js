var CarLot = (function (oldCarLot) {
  var inventory = [];

  return {
    oldCarLot.loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
          var inventoryArray = JSON.parse(event.target.responseText);
          callback(inventoryArray.inventory);
      });
    }
  };

  return oldCarLot;

})(CarLot || {});
