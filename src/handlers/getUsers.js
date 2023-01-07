import usersDisplay from "../logic/users.js";
import userDetails from "../API/getUsers.js";

const getUsers = function () {
  console.log("Getting ID");
  const id = Number(document.querySelector(".text").value);

  userDetails()
    .then((users) => usersDisplay(users))
    .catch((err) => console.error(err));
};
export default getUsers;
