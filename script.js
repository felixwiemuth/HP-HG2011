link = self.location.hash.substr(1);
var active_link;

// click handlers
function addClickHandlers() {
	//links on 'main.html'
	$("#page01").click( function() {
		self.location.href = "main.html#content01";
	});
	$("#page02").click( function() {
		self.location.href = "main.html#content02";
	});
	$("#page03").click( function() {
		self.location.href = "main.html#content03";
	});
	$("#page04").click( function() {
		self.location.href = "main.html#content04";
	});
	$("#pagegaestebuch").click( function() {
		self.location.href = "main.html#gaestebuch";
	});
	$("#pageimpressum").click( function() {
		self.location.href = "main.html#impressum";
	});
	
	//links
	$("#linkueber").click( function() { //link 0
		$("#main").load("content/ueber.html");
		self.location.hash = "ueber";
		set_active_link("#linkueber");
	});
	$("#link01").click( function() { //link 1
		$("#main").load("content/content01.html");
		self.location.hash = "content01";
		set_active_link("#link01");
	});	
	$("#link02").click( function() { //link 2
		$("#main").load("content/content02.html");
		self.location.hash = "content02";
		set_active_link("#link02");
	});	
	$("#link03").click( function() { //link 3
		$("#main").load("content/content03.html");
		self.location.hash = "content03";
		set_active_link("#link03");
		//IMPORTANT
		//$("#page").width(1400); //TODO FIT TO IMAGE! + reset on other links!
		init_schulrundgang();
		set_srg_img();
	});
	$("#link04").click( function() { //link 4
		$("#main").load("content/content04.html");
		self.location.hash = "content04";
		set_active_link("#link04");
	});
	$("#linkimpressum").click( function() { //link 5
		$("#main").load("content/impressum.html");
		self.location.hash = "impressum";
		set_active_link("#linkimpressum");
	});
	$("#linkdownloads").click( function() { //link 6
		$("#main").load("content/downloads.html");
		self.location.hash = "downloads";
		set_active_link("#linkdownloads");
	});
	$("#linkgaestebuch").click( function() { //link 7
		$("#main").load("content/gaestebuch.html");
		self.location.hash = "gaestebuch";
		set_active_link("#linkgaestebuch");
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
	//initialise link style
	init_links();
	//browser detection and support "information"
	if (navigator.userAgent.indexOf("MSIE") != -1) {
		$("#warning").slideDown(600);
		$("#browsertip").delay(5000).slideDown(600);
		$("#warning").delay(10000).fadeTo("slow", 0.5);
	}
});

function start_switch() {
	if (link != "") {
		if (link == "ueber")
			$("#linkueber").click();
		else if (link == "content01")
			$("#link01").click();
		else if (link == "content02")
			$("#link02").click();
		else if (link == "content03")
			$("#link03").click();
		else if (link == "content04")
			$("#link04").click();
		else if (link == "downloads")
			$("#linkdownloads").click();
		else if (link == "gaestebuch")
			$("#linkgaestebuch").click();
		else if (link == "impressum")
			$("#linkimpressum").click();
	}
}

function init_links() {
	 $("#linkueber").addClass("linkC");
	 $("#link01").addClass("linkA");
	 $("#link02").addClass("linkA");
	 $("#link03").addClass("linkA");
	 $("#link04").addClass("linkA");
	 $("#linkdownloads").addClass("linkB");
	 $("#linkgaestebuch").addClass("linkB");
	 $("#linkimpressum").addClass("linkC");	 
}

function set_active_link(link) {
	if (active_link != null)
		$(active_link).removeClass("linkOn");
	$(link).addClass("linkOn");
	active_link = link;
}

//functionality for "Schulrundgang"
function init_schulrundgang() {
	alert("Los gehts! (Waehrend dieser Meldung muss das Programm laden)");
	//links
	$("#linkSrg1").click( function() { //linkSrg1
		$("#link03").click();
	});
	$("#linkSrg2").click( function() { //linkSrg2
		$("#main").load("content/content03a.html");
		self.location.hash = "content03";
		set_active_link("#link03");
		init_schulrundgang();
		set_srgA_img();
	});
}

function set_srg_img() { //Schulrundgang (Standard)
	$("#td1408").attr("href", "content/schulrundgang/imglow/Schulhof-1.png").addClass("img");
	$("#td1711").attr("href", "content/schulrundgang/imglow/A-Trakt0.png").addClass("img");
	$("#td1810").attr("href", "content/schulrundgang/imglow/A-Trakt1.png").addClass("img");
	$("#td1114").attr("href", "content/schulrundgang/imglow/aus_erdkunde.png").addClass("img");
	$("#td1609").attr("href", "content/schulrundgang/imglow/bibliothek.png").addClass("img");
	$("#td0713").attr("href", "content/schulrundgang/imglow/D-Trakt_Gang.png").addClass("img");
	$("#td0710").attr("href", "content/schulrundgang/imglow/KU1-1.png").addClass("img");
	$("#td0810").attr("href", "content/schulrundgang/imglow/KU1-2.png").addClass("img");
	$("#td0809").attr("href", "content/schulrundgang/imglow/KU1-3.png").addClass("img");
	$("#td1111").attr("href", "content/schulrundgang/imglow/Pausenhalle.png").addClass("img");
	$("#td1011").attr("href", "content/schulrundgang/imglow/Schuleingang_Sekretariat.png").addClass("img");
	$("#td1306").attr("href", "content/schulrundgang/imglow/Schulhof-2.png").addClass("img");
	$("#td0818").attr("href", "content/schulrundgang/imglow/Schweineboxen.png").addClass("img");
	$("#td1110").attr("href", "content/schulrundgang/imglow/Vertretungsplan.png").addClass("img");
	$("#td1108").attr("href", "content/schulrundgang/imglow/V-Trakt.png").addClass("img");
	$(".img").imgPreview({imgCSS:{width: "150px"}}).lightBox();
}

function set_srgA_img() { //Schulrundgang A
	$("#srgA_664").attr("href", "gfx/bg2.jpg").addClass("img");
	$(".img").imgPreview({imgCSS:{width: "150px"}}).lightBox();
}