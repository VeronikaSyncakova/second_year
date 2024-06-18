// Function to toggle the display of the menu
function toggleMenu() {
    var menu = document.getElementById("popupMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to close the menu
function closeMenu() {
    var menu = document.getElementById("popupMenu");
    menu.style.display = "none";
}

// Close the menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var menus = document.getElementsByClassName("menu");
        for (var i = 0; i < menus.length; i++) {
            var openMenu = menus[i];
            if (openMenu.style.display === "block") {
                openMenu.style.display = "none";
            }
        }
    }
}