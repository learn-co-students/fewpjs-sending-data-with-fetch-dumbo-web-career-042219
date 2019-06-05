// write a method, submitData, that takes two strings arguments, one representing a user's name and the other representing a user's email.
function submitData(name, email) {
	//write a valid POST request to http://localhost:3000/users using fetch().
	// The destination URL
	return fetch('http://localhost:3000/users', {
		method: "POST",
		// Headers for 'Content-Type' and 'Accept' set to 'application/json'
		headers: {
			"Content-Type": 'application/json',
			'Accept': 'application/json'
		},
		// A body with the name and email passed in as arguments to submitData.
		// These should be assigned to name and email keys within an object.
		// This object should then be stringified.
		body: JSON.stringify({
			name,
			email
		})
	// On a successful POST request, expect the server to respond with a [Response][response] object.
	// Use a then() call to access the Response object and use its built in json() method to parse the contents of the body property.
	}).then( function(response){
		return response.json()
	// Use a second then() to access this newly converted object.
	}).then( function(object){
		 // From this object, find the new id and append this value to the DOM.
		 document.body.innerHTML = object["id"]
	// add a catch().
	// When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong.
	}).catch( function(error){
	// Append this message to the DOM when catch() is called.
		document.body.innerHTML = error.message
	})
}
