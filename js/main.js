$(function () {
	const $moreButton = $("<button>More</button>").attr("id", "more");
	const $lessButton = $("<button>Less</button>").attr("id", "less");

	$("#description").after($moreButton);

	if ($("#description").height()) {
		$("#description").hide();
	}

	$(document).on("click", "#more", function () {
		$("#description").show();
		$moreButton.replaceWith($lessButton);
	});
	$(document).on("click", "#less", function () {
		$("#description").hide();
		$lessButton.replaceWith($moreButton);
	});
});
