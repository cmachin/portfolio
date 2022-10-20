function show(option) {
	console.log("Showing: " + option);

	hideAll();

	$("#" + option).show();
}

function hideAll() {
	$("#resume").hide();
	$("#education").hide();
	$("#work").hide();
	$("#research").hide();
	$("#certifications").hide();
	$("#skills").hide();
}
