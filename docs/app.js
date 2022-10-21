show("about");

function show(option) {
	console.log("Showing: " + option);

	// Hide content from other tabs and reset nav bar font color
	$("h2").css("color", "white");
	$("main > *").hide();

	// Show the selected tab's content and mark it with a different font color
	$("#" + option).show();
	$("#" + option + "Tab").css("color", "#a5c1ee");
}

function sidebar() {
	console.log("Showing sidebar");

	if ($("#hamburguer-menu nav").is(":visible")) {
		$("#hamburguer-menu nav").hide();
	} else {
		$("#hamburguer-menu nav").show();
	}
}
