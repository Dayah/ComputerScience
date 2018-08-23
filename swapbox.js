// Warning: This is a custom script prepared for the CompSci front page. Do not attempt to modify or copy this script.
// Michael Dayah (michael@dayah.com)

var holdId = 0;
var lastIn = 0;

if (document.layers) {
	onLoad = function() { setTimeout("regenerateLayout();", 1000); }
	onResize = function () { setTimeout("regenerateLayout();", 1000); }
}

if (!document.layers && !document.getElementById) { document.styleSheets[0].disabled = true; }

function regenerateLayout() { if (document.layers["InformationFor"].document.width > 170) { location.reload(); } }

function swapIn(byid) {
	if (!holdId) {
		if (document.getElementById) {
			if (lastIn) { document.getElementById(lastIn).style.visibility = "hidden"; }
			document.getElementById(byid).style.visibility = "visible";
		} else if (document.layers) {
			if (lastIn) { document.layers["InformationFor"].document.layers[lastIn].visibility = "hide"; }
			document.layers["InformationFor"].document.layers[byid].visibility = "show";
}	}	}

function rememberLast(byid) { lastIn = byid; }

function hold(byid) {
	if (document.getElementById) {
		if (holdId) { document.getElementById(holdId).style.visibility = "hidden"; }
		document.getElementById(byid).style.visibility = "visible";
	} else if (document.layers) {
		if (holdId) { document.layers["InformationFor"].document.layers[holdId].visibility = "hide"; }
		document.layers["InformationFor"].document.layers[byid].visibility = "show";
	}
	holdId = byid;
}