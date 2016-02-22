"use strict";

var matt = {
  name: "Matt",
  friends: ["Mark", "Lyle", "Rian"],
  printFriends: function printFriends() {
    var _this = this;

    this.friends.forEach(function (f) {
      return console.log(_this.name + " knows " + f);
    });
  }
};
matt.printFriends();
