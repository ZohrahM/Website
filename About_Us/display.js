function display() {
	// Get existing entries from local storage, or create empty array if none exist
	var entries = JSON.parse(localStorage.getItem("registrationDataArray")) || [];

	// Create list of entries as HTML string
	var entriesList = "<ul>";
	for (var i = 0; i < entries.length; i++) {
		entriesList += "<li>" + entries[i].name +"</li>";
	}
	entriesList += "</ul>";

	// Show list of entries in output div
	document.getElementById("listing").innerHTML = entriesList;
}

// Call displayEntries function when page is loaded
window.onload = display;