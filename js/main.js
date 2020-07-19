$(function () {
	const $div1 = $("<div></div>").attr("class", "wrapper");
	const $div2 = $("<div></div>").attr("class", "wrapper");
	const $moreButton = $div1.append(
		$("<button>More</button>").attr("id", "more").attr("class", "more"),
	);
	const $lessButton = $div2.append(
		$("<button>Less</button>").attr("id", "less").attr("class", "less"),
	);
	function collapse() {
		$("#description").css("height", "100px");
		$("#description").css("white-space", "nowrap");
		$("#description").css("overflow", "hidden");
		$("#description").css("text-overflow", "ellipsis");
	}

	if ($("#description").height() > 300) {
		collapse();
		$("#description").after($moreButton);
	}
	$(document).on("click", "#more", function () {
		$("#description").css("height", "100%");
		$moreButton.replaceWith($lessButton);
	});
	$(document).on("click", "#less", function () {
		collapse();
		$lessButton.replaceWith($moreButton);
	});

	// drawer
	$("#bargerBtn").click(function () {
		$("#overlay").addClass("active");
		$("#drawer").addClass("active");
		$("#overlay").css("height", $("body").outerHeight());
		$("#drawer").css("height", $("body").outerHeight());
	});
	$("#overlay").click(function () {
		$("#overlay").removeClass("active");
		$("#drawer").removeClass("active");
	});
});

var mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	observer: true,
	observeParents: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
