function registracija() {
   
    var forma = document.reg;
    var ime = forma.ime;
    var email = forma.email;
    var pass1 = forma.loz1;
    var pass2 = forma.loz2;

    console.log(ime.value + " " + email.value + " " + pass1.value + " " + pass2.value);
     
    try {
        if (ime.value == "" ||
            email.value == "" ||
            pass1.value == "" ||
            pass2.value == "") {
                throw "Molimo popunite sva polja";
        } else {
            if (validacijaEmaila(email.value) == false) {
                throw "Email nepravino unet";
            } else if (pass1.value != pass2.value) {
                throw "Lozinka se ne podudara"
            }
        }
        window.location.href = "index.html";
    } catch (error) {
        document.getElementById("greska").innerHTML = error;
    }
}

function validacijaEmaila(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email); 
}