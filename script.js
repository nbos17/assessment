
$('#seeAll').on('click', function() {

	const url = "https://animalrestapi.azurewebsites.net/Animal/List?candidateID=7960d0e9-8701-4f34-906d-026ea6a3c10a";
	const headers = {
		"Content-Type" : "application/x-www-form-urlencoded"
	}
	// const dataSet = {
	// 	"commonName" : "lizard",
	// 	"scientificName" : "lalala",
	// 	"family" : "reptile",
	// 	"imageURL" : "www.lizard.com"
	// }

	$.ajax(url, {
		method : "GET",
		//data : dataSet,
		headers : headers,
		dataType : 'json'
	}).done(function(response) {
		console.log(response.list);
		console.log(response.list.length);

		for (var i = 0; i < response.list.length; i++) {
			let animalName = response.list[i].commonName;
			console.log(animalName);
		}

		});
});
	