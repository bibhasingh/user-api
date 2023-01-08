function userDisplay(user) {
  console.log(user, typeof user);

  if (Object.keys(user).length !== 0) {
    const container = document.createElement("div");

    container.style.border = "solid";
    container.style.width = "400px";
    container.style.margin = "0 400px";

    document.body.appendChild(container);

    const name = document.createElement("h3");
    name.innerText = `Name : ${user.name}`;

    const username = document.createElement("h3");
    username.innerText = `User Name : ${user.username}`;

    const email = document.createElement("h3");
    email.innerText = `Email : ${user.email}`;

    const company = document.createElement("h3");
    company.innerText = `Company : ${user.company.name}`;

    const phone = document.createElement("h3");
    phone.innerText = `Phone : ${user.phone}`;

    const address = document.createElement("h3");
    address.innerText = `Address : ${user.address.city}`;

    const website = document.createElement("h3");
    website.innerText = `Website : ${user.website}`;

    container.append(name, username, email, company, address, website, phone);
  } else {
    const wrongID = document.createElement("h3");
    wrongID.innerText = `wrong ID provided`;
    wrongID.style.textAlign = "center";
    document.body.appendChild(wrongID);
  }
}

export default userDisplay;
