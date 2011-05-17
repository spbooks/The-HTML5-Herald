$('document').ready(function() {
  // bind the dragstart event on the mice  
  $('#mouseContainer img').bind('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
  });
  
  // bind the dragover event on the cat
  $('#cat').bind('dragover', function(event) {
    event.preventDefault();
  });
  
  // bind the drop event on the cat
  $('#cat').bind('drop', function(event) {
    var mouseHash = {};
  	mouseHash['mouse1'] = "NOMNOMNOM";
  	mouseHash['mouse2'] = "MEOW!";
  	mouseHash['mouse3'] = "Purr...";
  
  	var ch = document.getElementById('catHeading');
  
  	// change text of the header based on which mouse was dropped
    var item = event.originalEvent.dataTransfer.getData("text/plain");
  	ch.innerHTML = mouseHash[item];	
  	
  	// get the img element for the mouse, and then remove it
  	var mousey = document.getElementById(item);
    mousey.parentNode.removeChild(mousey);
  	
  	event.preventDefault();  
  });
});

