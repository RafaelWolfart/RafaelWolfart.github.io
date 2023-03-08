let menu_visible = false;
const menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");

for (let i = 0; i < links.length; i++) {
    links[i].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
