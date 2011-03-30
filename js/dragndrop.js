function dragSetup(event)
{
    event.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
}

function dragOver(event)
{
	var catElement = document.getElementById(event.dataTransfer.getData("text/plain"));
    console.log("in drag over" + catElement);
    event.preventDefault();
}

function itemDropped(event)
{

	var mouseHash = {};
	mouseHash['mouse1'] = "NOMNOMNOM";
	mouseHash['mouse2'] = "MEOW!";
	mouseHash['mouse3'] = "Purr...";

    var item = event.dataTransfer.getData("text/plain");
	console.log("item is " + item);

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
	nearestCatH2.innerHTML = mouseHash[item];	
	event.preventDefault();
	
}
