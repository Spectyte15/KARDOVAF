    function acceso() {
        var contra = "Spectyte";
        var password = document.getElementById("inputPassword").value;
        if (password == contra) {
             window.location="HOME.html";
        }
        else{
            alert("Passwords do not match.");
        }
    }


