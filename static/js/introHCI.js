'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("NO");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}

	var n = 0;
function projectClick(e) {
	//console.log("Project Clicked");

	// prevent the page from reloading
	e.preventDefault();
	
	// In an event handler. $(this) refers to the
	// object that triggered the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $("#jumbotron h1");
	jumbotronHeader.text(projectTitle);
	// $(this).css("background-color", "#7fff00")
	
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if(description.length == 0) {
		$(containingProject).append("<div class = 'project-description'><p>Description of the project.</p></div>");
	}
	else {
		if( n == 0) {
			$(description).hide();
			n = 1;
		}
		else {
			$(description).show();
			n = 0;
		}
		//description.html("<p>Stop clicking on me! You just did it at " 
		//+ (new Date()) + "</p>");
	}
}
