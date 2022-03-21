function myFunction() {
    var file = "about.html";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {document.getElementById("demo").innerHTML = this.responseText;}
          if (this.status == 404) {document.getElementById("demo").innerHTML = "Page not found.";}
        }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
}
