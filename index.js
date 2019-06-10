// Add your code here
let formData = {
  name: "Steve",
  email: "steve@steve.com"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

const bodyTag = document.querySelector('body')

function submitData(name, email) {
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    bodyTag.innerHTML += `<p>${object.id}</p>`
  })
  .catch(function(error) {
    bodyTag.innerHTML += "<p>Unauthorized Access</p>"
  });
}

// code below also works

// function submitData(name, email) {
//   return fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email
//     })
//   })
//   .then( (response) => {
//     return response.json();
//   })
//   .then( (json) => {
//     const idTag = document.createElement('p');
//     idTag.innerHTML = `Successfully created user with ID ${json.id}`;
//     document.body.append(idTag);
//   })
//   .catch( (error) => {
//     const errorTag = document.createElement('p');
//     errorTag.innerHTML = error.message;
//     document.body.append(errorTag);
//   });
// }
