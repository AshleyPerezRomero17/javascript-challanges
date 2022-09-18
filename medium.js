var userName = prompt("Please enter your name");
if (userName.toUpperCase() === userName) {
  console.log("The user was shouting")
} else if (userName.toLowerCase() === userName) {
  console.log("The user was whispering")
} else {
  console.log("The user was talking normally")
}