function parseEmails (emails) {
	if (emails != undefined) {
		var finalArray = [];
		for (var i = 0; i < emails.length; i++) {
			if (parseEmail(emails[i]) != undefined)
			finalArray.push(parseEmail(emails[i]));
		};

		return finalArray;
	}
	return [];
};
function parseEmail(textLines) {
	if (textLines != undefined){
		var email = textLines;
		var emailconverted = convert(email);
		if (validateEmail(emailconverted)){
			return emailconverted
		}
	}
}
function validateEmail (email){
	return email.search("@") != -1 && email.search(".") != -1 && 
			email.indexOf(".") > (email.indexOf("@")  +1 ) && 
			email.indexOf("@") > 0;
}
function  convert(email){
		var emailATreplaced = email.replace("(AT)","@").replace("AT", "@").replace("-at-","@").replace("-AT-","@").replace("(at)","@");
		var finalemail = emailATreplaced.replace("(DOT)",".").replace("DOT",".").replace("-dot-",".").replace("(dot)",".").replace("-DOT-",".");
		return finalemail;
}