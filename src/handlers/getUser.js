import userDisplay from "../logic/user.js";
import userDetails from "../API/getUser.js";

const getUser = function () {
  console.log("Getting ID");
  const id = Number(document.querySelector(".text").value);

  while (document.body.childElementCount > 1) {
    document.body.removeChild(document.body.lastChild);
  }

  userDetails(id)
    .then((user) => userDisplay(user))
    .catch((err) => console.error(err));
};
export default getUser;
