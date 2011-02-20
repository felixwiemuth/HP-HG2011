link = self.location.hash.substr(1);

// click handlers
function addClickHandlers() {
	//links on 'start.html'
	$("#page01").click( function() {
		self.location.href = "index.htm#content01";
	});
	$("#page02").click( function() {
		self.location.href = "index.htm#content02";
	});
	$("#page03").click( function() {
		self.location.href = "index.htm#content03";
	});
	$("#page04").click( function() {
		self.location.href = "index.htm#content04";
	});
	$("#pageimpressum").click( function() {
		self.location.href = "index.htm#impressum";
	});
	
	//links
	$("#link01").click( function() {
		$("#main").load("content/content01.html");
		self.location.hash = "content01";
	});	
	$("#link02").click( function() {
		$("#main").load("content/content02.html");
		self.location.hash = "content02";
	});	
	$("#link03").click( function() {
		$("#main").load("content/content03.html");
		self.location.hash = "content03";
	});
	$("#link04").click( function() {
		$("#main").load("content/content04.html");
		self.location.hash = "content04";
	});
	$("#linkimpressum").click( function() {
		$("#main").load("content/impressum.html");
		self.location.hash = "impressum";
	});
	
	$("#warning").hover(
		function() {
			$(this).clearQueue();
			$(this).fadeTo("fast", 1);
		},
		function() {
			$(this).clearQueue();
			$(this).fadeTo("slow", 0.5);
		}
	);
}

// ready event for document -- executed when DOM is ready
$(document).ready(addClickHandlers);
$(document).ready( function() {
	//browser detection and support "information"
	var tested = false;
	var weardown = false;
	var txt = "You are using ";
	if (navigator.userAgent.indexOf("Firefox") != -1) {
		$("#warning").append(txt + "Firefox.<br/>");
		tested = true;
	}
	else if (navigator.userAgent.indexOf("Chrome") != -1) {
		$("#warning").append(txt + "Google Chrome.<br/>");
		tested = true;
	}
	else if (navigator.userAgent.indexOf("Opera") != -1) {
		$("#warning").append(txt + "Opera.<br/>");
	}
	else if (navigator.userAgent.indexOf("Netscape.") != -1) {
		$("#warning").append(txt + "Opera<br/>");
	}
	else if (navigator.userAgent.indexOf("MSIE") != -1) {
		$("#warning").append(txt + "Microsoft Internet Explorer.<br/>");
		weardown = true;
	}
	else {
		$("#warning").append(txt + "an unidentified Browser.<br/>");
		$("#warning").css("background-color", "orange");
	}

	if (tested == true) {
		$("#warning").append("<b>The game was successfully tested with your browser.</b>");
		$("#warning").css("background-color", "green");
	} else {
		$("#browsertip").delay(3000).slideDown(600);
		$("#warning").append("<b>The game was not tested with your browser. Try yourself.</b>");
	}
	if (weardown == true) {
		$("#warning").append("<b><font size='5'> <br/>Would you please refrain from using our worthy game with such an unworthy \"browser\"!  </font> </b>");
	}
	$("#warning").slideDown(600);
	$("#warning").delay(3000).fadeTo("slow", 0.5);
});

function start_switch() {
	if (link != "") {
		if (link == "content01")
			$("#link01").click();
		else if (link == "content02")
			$("#link02").click();
		else if (link == "content02")
			$("#link02").click();
		else if (link == "content02")
			$("#link02").click();
		else if (link == "impressum")
			$("#linkimpressum").click();
	}
}