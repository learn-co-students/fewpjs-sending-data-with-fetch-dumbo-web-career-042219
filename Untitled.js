const url = "http://localhost:3000/users"

function submitData(name, email) {
  return fetch(url, {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
    name,
    email
  })
})
}

.then(function(response){
  return response.json()
})
