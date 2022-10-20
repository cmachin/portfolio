show("resume");

function show(option) {
	console.log("Showing: " + option);

	// Hide content from other tabs and reset nav bar font color
	$("nav > *").css("color", "#000000");
	$("main > *").hide();

	// Show the selected tab's content and mark it with a different font color
	$("#" + option).show();
	$("#" + option + "Tab").css("color", "#444f61");
}
