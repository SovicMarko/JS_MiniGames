function setCookie(provera) {
    console.log(document.cookie);
    if (provera == "unos") {
        if (document.cookie != "" ) {
            document.getElementById("unos").innerHTML = "Dobrodosli " + document.cookie.substr(9); 
        }
        else {
            var username = document.getElementById("ime").value;
            document.cookie = "username=" + username;
            console.log(document.cookie);
        }
    } else {
        if (document.cookie.substr(9) != "" ) { 
            document.getElementById("unos").innerHTML = "Dobrodosli " + document.cookie.substr(9); 
        }
    }
    
}
setCookie();