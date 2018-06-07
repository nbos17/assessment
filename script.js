
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

		for (let i = 0; i < response.list.length; i++) {
			let animalName = response.list[i].commonName;
			let imageURL = response.list[i].imageURL;
			console.log(animalName);
			let newCard = $("<div>");
				newCard.addClass("card");
			let cardTitle = $("<h2>");
				cardTitle.addClass("card-title");
				cardTitle.html(animalName);
			let cardBody = $("<img>");
				cardBody.addClass("card-img");
				cardBody.attr("src", imageURL);
			newCard.append(cardTitle, cardBody);

			$('#animalAction').append(newCard);
		}

		});
});

$('#addAnimal').on('click', function() {
	$('#animalAction').empty();
	$('#form').css("display", "block");
})
	