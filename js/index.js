window.onload = ()=>{
	//carousel
	let width = $(".slider-img").width()
	let height = $(".slider-img").height()
	let pos = 1

	$("#slide1").click(()=>{
		pos = 1
		$(".img-container").animate({
			right: 0
		})

		$(".change-slide-box").css({
			"background-color": "#F1F6F9"
		})

		$("#slide1").css({
			"background-color": "#14274E"
		})
	})

	$("#slide2").click(()=>{
		pos = 2
		$(".img-container").animate({
			right: width
		})

		$(".change-slide-box").css({
			"background-color": "#F1F6F9"
		})

		$("#slide2").css({
			"background-color": "#14274E"
		})
	})

	$("#slide3").click(()=>{
		pos = 3
		$(".img-container").animate({
			right: 2*width
		})

		$(".change-slide-box").css({
			"background-color": "#F1F6F9"
		})

		$("#slide3").css({
			"background-color": "#14274E"
		})
	})

	$("#slide4").click(()=>{
		pos = 4
		$(".img-container").animate({
			right: 3*width
		})

		$(".change-slide-box").css({
			"background-color": "#F1F6F9"
		})

		$("#slide4").css({
			"background-color": "#14274E"
		})
	})

	setInterval(()=>{
		pos += 1
		if(pos > 4) {
			pos = 1
		}

		let slide = "#slide" + pos

		$(".img-container").animate({
			right: (pos-1)*width
		})

		$(".change-slide-box").css({
			"background-color": "#F1F6F9"
		})

		$(slide).css({
			"background-color": "#14274E"
		})
	}, 4500)

	// navbar
	$("#home").click(()=>{
		$(document.documentElement).animate({
			scrollTop: $(".top").offset().top
		}, 200)
	})

	$("#sinopsis").click(()=>{
		let header = $(".header").height()
		$(document.documentElement).animate({
			scrollTop: $(".sinopsis").offset().top - header
		}, 200)
	})

	$("#casting").click(()=>{
		let header = $(".header").height()
		$(document.documentElement).animate({
			scrollTop: $(".casting").offset().top - header
		}, 200)
	})

	let btnContainer = document.getElementById("navigations");
	let buttons = btnContainer.getElementsByClassName("nav-button");

	for (let index = 0; index < buttons.length; index++) {
		buttons[index].addEventListener("click", function() {
			let current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			// if (current.length > 0) { 
			// 	current[0].className = current[0].className.replace(" active", "");
			// }
			this.className += " active";
		});
	}
}