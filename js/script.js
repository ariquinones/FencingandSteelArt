console.log("hello")
var projectImages = document.querySelector(".projectPhoto") 
var body = document.querySelector("body")
console.log(projectImages.src)
var slideShow = function () {
	var imagesArray = ['<img class="projectSlideShow" src="images/woodFence/woodFence1.jpg">',
					   '<img class="projectSlideShow" src="images/woodFence/woodFence2.jpg">',
					   '<img class="projectSlideShow" src="images/woodFence/woodFence3.jpg">',
					   '<img class="projectSlideShow" src="images/woodFence/woodFence4.jpg">'
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

projectImages.addEventListener("click",slideShow)
