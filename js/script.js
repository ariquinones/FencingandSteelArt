console.log("hello")
var projectImage = document.querySelector(".projectPhoto") 
var body = document.querySelector("body")
var allImgs = document.querySelectorAll('.projectPhoto')
// NodeList.prototype.map = Array.prototype.map
// var allSources = allImgs.map(function(node) {return node.src})
var allSourcesSlow = []
for (var i = 0; i < allImgs.length; i++) {
	allSourcesSlow.push(allImgs[i].src)
}

var slideShow = function (e) {
	//console.log('clicked img ' + e.target)
	var thisSource = e.target.src
	var thisIndex = allSourcesSlow.indexOf(thisSource)
	var nextImage = function () {
		var imageToShow = ''
		thisIndex = thisIndex + 1
		if (thisIndex >= 4) {
			thisIndex = 0
		}
		imageToShow = allSourcesSlow[thisIndex]
		liImage.innerHTML = '<img class="projectSlideShow" src="' + allSourcesSlow[thisIndex] + '"></li>'
	}
	var slideShowDiv = document.createElement('div')
	slideShowDiv.innerHTML = '<div class="pageOverlay"></div>' +
						'<li class="liImage"><img class="projectSlideShow" src="' + allSourcesSlow[thisIndex] + '"></li>' + 
					 	'<button class="slideShowButton"><img class="javascriptIcon" src="images/arrow-right.svg"></button>\
						<button class="exit"><img class="javascriptIcon" src="images/cancel.svg"></button>'
	body.appendChild(slideShowDiv)
	var liImage = document.querySelector(".liImage")
	// liImage.innerHTML = imagesArray[numImage]
	var button = document.querySelector(".slideShowButton") 	
	var exitButton = document.querySelector(".exit")
	var removeSlideShow = function() {
		var pageOverlayDiv = document.querySelector(".pageOverlay")
		slideShowDiv.removeChild(button)
		slideShowDiv.removeChild(pageOverlayDiv)
		slideShowDiv.removeChild(liImage)
		slideShowDiv.removeChild(exitButton)
	}
	button.addEventListener("click",nextImage)
	exitButton.addEventListener("click",removeSlideShow)
}

projectImage.addEventListener("click",slideShow)

