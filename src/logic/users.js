import userDisplay from "./user.js";
function usersDisplay(users) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
    document.body.style.display = "grid";
    document.body.style.gridTemplateColumns = "400px 400px";
    document.querySelector(".container").style.gridColumnEnd = "3";
    userDisplay(users[i]);
  }
}

export default usersDisplay;
