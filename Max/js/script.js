


function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(255);
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}

document.ontouchmove = function(event) {
	event.preventDefault();
}


$(document).ready(function() {
	var $that = $(this);

	$(document).on("click", function () {

	});



	$("li").click(function() {
		var $this = $(this);

		if ($(this).children().length > 0) {
			remove($this);

		} else {

			add($this);
		}


		return false;
	});
	function add($this) {
		$this.css(
			{
				"border": "3px solid black",
				"padding" : "10px"
			}
		);
		$this.load("html/" + $this.attr("class") + ".html");
	}

	function remove($this) {
		console.log($(this).parent());
		$this.css(
			{
				"border" : "none",
				"padding" : "0"
			}
		);
		$this.append($this.html());
		var $element = $this.children().remove();
		$this.append($element.html());
	}


});
