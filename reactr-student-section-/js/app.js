// $(document).foundation()
console.log("Hello");

	
	// var previous = document.querySelector("#prevButton");
	var next = document.querySelector('#nextButton');
	var submit = document.querySelector('#submitButton');
	// var progressBarLeft = document.querySelector(".progressBarLeft");
	// var progressBarRight = document.querySelector(".progressBarRight");


function nextSection(e){
	e.preventDefault();
	var slides = document.querySelectorAll('.slide');
	for(var i = 0; i < slides.length; i++){
		slides[i].classList.toggle("showing");
	}
	if(slides[0].classList.contains("showing")){
		next.innerHTML = "Next";
		console.log("next");
		submit.style.visibility = "hidden";
		// progressBarLeft.style.backgroundColor = "#4e5d5c";
		// progressBarRight.style.backgroundColor = "#e6e6e6";
	}
	else{
		console.log("previous");
		next.innerHTML = "Previous";
		submit.style.visibility = "visible";
		// progressBarLeft.style.backgroundColor = "#e6e6e6";
		// progressBarRight.style.backgroundColor = "#4e5d5c";
	}
}




	next.addEventListener("click", nextSection, false);
	// previous.addEventListener("click", prevButton, false);