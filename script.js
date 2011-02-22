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
	$("#linkdownloads").click( function() {
		$("#main").load("content/downloads.html");
		self.location.hash = "downloads";
	});
	$("#linkgaestebuch").click( function() {
		$("#main").load("content/gaestebuch.html");
		self.location.hash = "gaestebuch";
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
	if (navigator.userAgent.indexOf("MSIE") != -1) {
		$("#warning").slideDown(600);
		$("#browsertip").delay(5000).slideDown(600);
		$("#warning").delay(10000).fadeTo("slow", 0.5);
	}
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