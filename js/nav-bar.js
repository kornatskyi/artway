"use strict";

document.getElementById("nav-toggler").onclick = () => {

    if( document.getElementById("nav-links").style.display === "flex") {
        document.getElementById("nav-links").style.display = null;
    } else {
        document.getElementById("nav-links").style.display = "flex";
    }
}