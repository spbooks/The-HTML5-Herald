/**
 * @author alexisgoldstein
 */
function findLocation(){
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(findZipCode);
    }
}

function findZipCode(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(lat, lng);
    
    geocoder.geocode({
        'latLng': latlng
    }, function(results, status){
        if (status == google.maps.GeocoderStatus.OK) {
            if (results) {
                var zipcode = findZipcodeInResults(results);
                $("#zipcode").val(zipcode);
            }
        }
        else {
            alert("Geocoder failed due to: " + status);
        }
    });
    
}

function findZipcodeInResults(results){
    for (var i = 0; i < results.length; i++) {
        for (var j = 0; j < results[i].address_components.length; j++) {
            for (var k = 0; k < results[i].address_components[j].types.length; k++) {
                if (results[i].address_components[j].types[k] == "postal_code") {
                    return results[i].address_components[j].short_name;
                }
            }
        }
    }
    
}
