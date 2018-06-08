

// See All Animals On Click Button
$('#seeAll').on('click', function() {

	$('#animalAction').empty();
	$('#form').css("display", "none");
	$('#searchBarDisplay').css("display", "none");


	const url = "https://animalrestapi.azurewebsites.net/Animal/List?candidateID=7960d0e9-8701-4f34-906d-026ea6a3c10a";
	const headers = {
		"Content-Type" : "application/x-www-form-urlencoded"
	}


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
			let deleteButton = $("<button>");
				deleteButton.addClass("btn-primary");
				deleteButton.attr("id", "deleteAnimal");
				deleteButton.attr("value", response.list[i].id);
				deleteButton.html("Delete");
			newCard.append(cardTitle, cardBody, deleteButton);

			$('#animalAction').append(newCard);


		}
		
		

		});
});

// Create a New Animal On Click Button
$('#addAnimal').on('click', function() {
	$('#animalAction').empty();
	$('#searchBarDisplay').css("display", "none");
	$('#form').css("display", "block");
});

//Create Search Bar Appear On Click
$('#search').on('click', function() {
	$('#animalAction').empty();
	$('#form').css("display", "none");
	$('#searchBarDisplay').css("display", "block");
});

$('#createSubmit').on('click', function(e) {
	e.preventDefault();
	let commonName = $('#common').val();
	let scientificName = $('#scientific').val();
	let family = $('#family').val();
	let imageURL = $('#image').val();

	const dataSet = {
		"commonName" : commonName,
		"scientificName" : scientificName,
		"family" : family,
		"imageURL" : imageURL
	}


	const url = "https://animalrestapi.azurewebsites.net/Animal/Create?candidateID=7960d0e9-8701-4f34-906d-026ea6a3c10a";
	const headers = {
		"Content-Type" : "application/x-www-form-urlencoded"
	}

	$.ajax(url, {
		method : "POST",
		data : dataSet,
		headers : headers,
		dataType : 'json'
	}).done(function(response) {
		console.log(response.status);
		if (response.status === 'OK') {
			$('#didCreate').html("Creature Added Successfully!");
		}

	});


});

$(document).on('click', '#deleteAnimal', function() {
	let idNumber = this.value;
	console.log(idNumber);

	const url = "https://animalrestapi.azurewebsites.net/Animal/Delete?candidateID=7960d0e9-8701-4f34-906d-026ea6a3c10a";
	const headers = {
		"Content-Type" : "application/x-www-form-urlencoded"
	}

	if ((idNumber == 1) || (idNumber == 2) || (idNumber == 3)) {
		alert("Cannot Delete This Item");
	}
	else {
		$.ajax(url, {
		method : "POST",
		data : {
			id : idNumber
		},
		headers : headers,
		dataType : 'json'
		}).done(function(response) {
			console.log(response);
			location.reload();
			

		});
	}
	
});

