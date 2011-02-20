query = self.location.search.substr(1);

// click handlers
function addClickHandlers() {
	//links on 'start.html'
	$("#page01").click( function() {
		location.href = "index.htm?content01";
	});
	
	//links
	$("#link01").click( function() {
		$("#main").load("content/content01.html");
		//location.href.search = "index.htm?content01";
	});
	
	$("#link02").click( function() {
		$("#main").load("content/content02.html");
		location.href.search = "index.htm?content02";
	});
	
	$("#link03").click( function() {
		$("#main").load("content/content03.html");
	});
	
	$("#linkimpressum").click( function() {
		$("#main").load("content/impressum.html");
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
	
	/*$("#home-navigation").hover(
		function() {
			$(this).clearQueue();
			$(this).fadeTo("fast", 1);
		},
		function() {
			$(this).clearQueue();
			$(this).delay(4000).fadeTo(4000, 0.2);
		}
	);*/
}

// ready event for document -- executed when DOM is ready
$(document).ready(addClickHandlers);
$(document).ready( function() {
	//SWITCHED OFF FOR DEBUG PURPOSES
	//slide and fade 'page'
	// $("#page").delay(500).animate({
		// opacity: 'toggle',
		// height: 'toggle'
	// }, 5000);
	//$("#page").toggle(); //DEBUG
	//load();

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

function start_switch() {
	if (query != "") {
		if (query == "content01")
		//$("#link01").click();
			$("#main").load("content/content01.html");
		else if (query == "content02")
			$("#main").load("content/content02.html");
		//TODO add other links
		
		//delete query from URL
		//self.location.href = "index.htm";
	}
}
	

// ******************** code *******************

// load html into divs

// function load()
// {
	// $("#main").append("<b>Enter loading!</b>");
// var xmlhttp;
// if (window.XMLHttpRequest)
  // {// code for IE7+, Firefox, Chrome, Opera, Safari
  // xmlhttp=new XMLHttpRequest();
  // }
// else
  // {// code for IE6, IE5
  // xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  // }
// xmlhttp.onreadystatechange=function()
  // {
  // if (xmlhttp.readyState==4 && xmlhttp.status==200)
    // {
    // document.getElementById("#main").innerHTML=xmlhttp.responseText;
    // }
	// else {
		// $("#main").append("<b>Error!</b>");
	// }
  // }
// xmlhttp.open("GET","content/template_v0.html",true);
// xmlhttp.send();
// }

