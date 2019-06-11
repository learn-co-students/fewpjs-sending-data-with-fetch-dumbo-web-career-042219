const userUrl = "http://localhost:3000/users";
const body = document.querySelector("body");

submitData = (userName, email) => {
  return fetch(userUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName,
      email: email
    })
  }).then(resp => resp.json())
    .then(user => body.append(user.id))
    .catch(error => body.append(error));
  
};