function showHideRoomDropdown() {
    let click = document.getElementById("room-dropdown-content")
    if (click.style.display === "none") {
        click.style.display = "block" 
        document.getElementById("room-dropdown-input").style.borderBottomLeftRadius = "0"
        document.getElementById("room-dropdown-button").style.borderBottomRightRadius = "0"
        document.getElementById("room-dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.5)"
        document.getElementById("room-dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.5)"
        document.getElementById("room-dropdown-button").style.color= "rgba(31, 32, 65, 0.75)"
        document.getElementById("room-dropdown-button").innerHTML="expand_less"
    } else {
        click.style.display = "none" 
        document.getElementById("room-dropdown-input").style.borderBottomLeftRadius = "4px"
        document.getElementById("room-dropdown-button").style.borderBottomRightRadius = "4px"
        document.getElementById("room-dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.25)"
        document.getElementById("room-dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.25)"
        document.getElementById("room-dropdown-button").style.color= "rgba(31, 32, 65, 0.5)"
        document.getElementById("room-dropdown-button").innerHTML="expand_more"
    }
};

