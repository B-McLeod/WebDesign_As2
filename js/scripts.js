function contactValidation() {
	"use strict";
	// Form wrappers
	var frmName = document.getElementById("frmName"),
		frmPhone = document.getElementById("frmPhone"),
		frmEmail = document.getElementById("frmEmail"),
		frmSubject = document.getElementById("frmSubject"),
		frmDescription = document.getElementById("frmDescription"),

		// Form Controls
		name = document.getElementById("name").value,
		phone = document.getElementById("phone").value,
		email = document.getElementById("email").value,
		subject = document.getElementById("subject"),
		description = document.getElementById("description").value,
		
		// Form Icon Handles
		nameIcon = document.getElementById("nameIcon"),
		phoneIcon = document.getElementById("phoneIcon"),
		emailIcon = document.getElementById("emailIcon"),
		descIcon = document.getElementById("descIcon"),

		// CSS Styling
		success = "form-group has-success has-feedback",
		warning = "form-group has-warning has-feedback",
		error = "form-group has-error has-feedback",

		// Glyphicons
		icoSuccess = '<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>',
		icoWarning = '<span class="glyphicon glyphicon-warning-sign form-control-feedback" aria-hidden="true"></span>',
		icoError = '<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>';

	// Form Validation
	// Name
	if (name === "") {
		frmName.className = error;
		nameIcon.innerHTML = icoError;
		
	} else {
		frmName.className = success;
		nameIcon.innerHTML = icoSuccess;
	}

	// Phone
	if (phone === "") {
		frmPhone.className = error;
		phoneIcon.innerHTML = icoError;
	} else {
		frmPhone.className = success;
		phoneIcon.innerHTML = icoSuccess;
	}

	// Email
	if (email === "") {
		frmEmail.className = error;
		emailIcon.innerHTML = icoError;
	} else {
		frmEmail.className = success;
		emailIcon.innerHTML = icoSuccess;
	}

	// Subject
	if (subject.selectedIndex == 0) {
		frmSubject.className = error;
	} else {
		frmSubject.className = success;
	}

	// Description
	if (description === "") {
		frmDescription.className = warning;
		descIcon.innerHTML = icoWarning;
	} else {
		frmDescription.className = success;
	}
}