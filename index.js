let url = 'http://localhost:3000/users'
let body = document.querySelector("body")

function submitData(name, email) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name,email})
  })
  .then((resp) => resp.json())
  .then((details) => {
    let p = document.createElement("p")
    p.textContent = details.id
    body.appendChild(p)
  })
  .catch((error) => {
    let h4 = document.createElement("h4")
    h4.textContent = error.message
    body.append(h4)
  })
};
