// click handlers
function addClickHandlers() {
	$("#start").click(function() {
		$("#menu").slideUp(600);
		$("#help").slideUp(600);
		$("#browsertip").slideUp(600);
		$("#warning").slideUp(600);
		$("#game").css("display","inline");
	});

	$("#showhelp").click(function() {
		if ($("#help").css("display")=="none") {
			$("#help").slideDown(600);
			$("#showhelp").attr("value","Hide help");
		} else {
			$("#help").slideUp(600);
			$("#showhelp").attr("value","Show help");
		}
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
	
	$("#page").hover(
		function() {
			$(this).clearQueue();
			$(this).fadeTo("fast", 1);
		},
		function() {
			$(this).clearQueue();
			$(this).delay(4000).fadeTo(4000, 0.5);
		}
	);
}

// ready event for document -- executed when DOM is ready
$(document).ready(addClickHandlers);
$(document).ready( function() {
	//slide and fade 'page'
	$("#page").delay(500).animate({
		opacity: 'toggle',
		height: 'toggle'
	}, 5000);
	// $("#page").delay(1000).animate({
		// opacity: 'toggle'
	// }, 2000).animate({height: 'toggle'}, 5000);
	// $("#page").animate({
		// opacity: '0.8'
	// }, 5000);
	// $("#main").delay(200).animate({
		// opacity: 'toggle',
		// height: 'toggle'
	// }, 3000);
	// //$("#navigation").slideDown(600);


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

// implement indexOf if not present
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (obj, fromIndex) {
        if (fromIndex == null) {
            fromIndex = 0;
        } else if (fromIndex < 0) {
            fromIndex = Math.max(0, this.length + fromIndex);
        }
        for (var i = fromIndex, j = this.length; i < j; i++) {
            if (this[i] === obj)
                return i;
        }
        return -1;
    };
}

// ******************** game code *******************
