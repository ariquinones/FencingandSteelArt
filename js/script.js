console.log("hello")
var projectImages = document.querySelectorAll(".woodProjectPhoto") 
var body = document.querySelector("body")

var slideShow = function () {
	var imagesArray = ['<img class="woodProjectSlideShow" src="images/patio1.jpg">',
					   '<img class="woodProjectSlideShow" src="images/patio2.jpg">',
					   '<img class="woodProjectSlideShow" src="images/patio3.jpg">',
					   '<img class="woodProjectSlideShow" src="images/patio4.jpg">',
	]
	var numImage = 0
	var nextImage = function () {
		var imageToShow = ''
		numImage = numImage + 1
		if (numImage >= 4) {
			numImage = 0
		}
		imageToShow = imagesArray[numImage]
		liImage.innerHTML = imageToShow
		
	}
	body.innerHTML +='<div class="pageOverlay"></div>'
					 + '<li class="liImage"></li>' + '<button class="slideShowButton"><img class="javascriptIcon" src="images/arrow-right.svg"></button>\
					<button class="exit"><img class="javascriptIcon" src="images/cancel.svg"></button>'
	var liImage = document.querySelector(".liImage")
	liImage.innerHTML = imagesArray[numImage]
	var button = document.querySelector(".slideShowButton") 	
	var exitButton = document.querySelector(".exit")
	var removeSlideShow = function() {
		var pageOverlayDiv = document.querySelector(".pageOverlay")
		body.removeChild(button)
		body.removeChild(pageOverlayDiv)
		body.removeChild(liImage)
		body.removeChild(exitButton)
	}
	button.addEventListener("click",nextImage)
	exitButton.addEventListener("click",removeSlideShow)

}


var startSlideShow = function() {
	for (var i = 0; i < projectImages.length; i++) {
		projectImages[i].addEventListener("click",slideShow)
	}
}
setTimeout(startSlideShow,100)
