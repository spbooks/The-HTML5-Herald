/**
 * @author alexisgoldstein
 */
	

function determineLocation(){
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(displayOnMap);

		var container = Raphael(document.getElementById("spinner"), 125, 125);
					
        var Spinner = (function(){
					// shrinking images down by changing width and height here works fine in webkit, but looks 
					// distorted in FF/O. scale down the image first in inkscape!
            var spinner = container.image("images/spinner.svg", 0, 0, 100, 100);
            return {
                start: function(){
                    spinner.animate({
                        rotation: "720"
                    }, 60000);
                },
                stop: function(){
                    spinner.stop();
                }
            }
        })();
        
        Spinner.start();
		// hide the heading and the button
		//document.getElementById("geoHeading").style.visibility = "hidden";
		//document.getElementById("geobutton").style.visibility = "hidden";
    }
    else {
        // geolocation is not supported in this browser
        // we can use Google Gears as a fallback
    }
}

function displayOnMap(position){
	//Spinner.stop();
	document.getElementById("spinner").style.visibility = "hidden";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Let’s use Google Maps to display the location 
    var myOptions = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("mapDiv"), myOptions);
    
    var initialLocation = new google.maps.LatLng(latitude, longitude);
    
    var marker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Hello World!"
    });
    
    map.setCenter(initialLocation);
    
    
}



