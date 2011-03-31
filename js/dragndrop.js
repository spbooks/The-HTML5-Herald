function dragSetup(event)
{
    event.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
}

function dragOver(event)
{
    event.preventDefault();
}

function itemDropped(event)
{

	var mouseHash = {};
	mouseHash['mouse1'] = "NOMNOMNOM";
	mouseHash['mouse2'] = "MEOW!";
	mouseHash['mouse3'] = "Purr...";

	var nearestCatH2;

	// event.target is the element the event happened to
 	if (event.target.id == "cat1")
	{
		nearestCatH2  = document.getElementById("cat1Heading");
	}
	else 
	{
		nearestCatH2 = document.getElementById("cat2Heading");
	}

	// change text of the appropriate h1 (depending on which cat we dropped a treat on)
    var item = event.dataTransfer.getData("text/plain");
	nearestCatH2.innerHTML = mouseHash[item];	
	
	// get the img element for the mouse, and then remove it
	var mousey = document.getElementById(item);
    mousey.parentNode.removeChild(mousey);
	
	event.preventDefault();
	
}
