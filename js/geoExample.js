/**
 * @author alexisgoldstein
 */
function determineLocation(){
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(displayOnMap);
    }
    else {
        // geolocation is not supported in this browser
        // we can use Google Gears as a fallback
    }
}

function displayOnMap(position){
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
