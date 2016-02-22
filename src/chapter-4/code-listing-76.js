let matt = {
  name: "Matt",
  friends: ["Mark", "Lyle", "Rian"],
  printFriends() {
    this.friends.forEach(f =>
      console.log(this.name + " knows " + f));
  }
}
matt.printFriends();
