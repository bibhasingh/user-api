function userDetails() {
  const user = fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));

  return user;
}

export default userDetails;
