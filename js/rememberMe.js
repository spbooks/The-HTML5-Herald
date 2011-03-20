/**
 * @author alexisgoldstein
 */
	function loadStoredDetails(){
		if (Modernizr.localstorage) {
			var name = localStorage.getItem("name");
			var email = localStorage["email"];
			var remember = localStorage["remember"];
			
			if (name) {
				$("#register-name").val(name);
			}
			
			if (email) {
				$("#address").val(email);
			}
			
			if (remember =="true")
			{
				$("#rememberme").attr("checked", "checked");

			}
		}
		else {
			// no native support for HTML5 storage :(
		}
		
	}
		
	function saveData(){
		if (Modernizr.localstorage) {
		// We need to check that the checkbox is ON, not just 
		// that's it's been checked (onClick is also fired for
		// UNchecking the box).
			if ($("#rememberme").attr("checked")) {
				var email = $("#address").val();
				var name = $("#register-name").val();
				
				localStorage["name"] = name;
				localStorage["email"] = email;
				localStorage["remember"] = "true";
			}
		}
		else {
			// no native support for HTML5 storage :(
		}
	}	