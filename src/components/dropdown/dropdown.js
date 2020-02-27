function showHideDropdown() {
    let click = document.getElementById("dropdown-content")
    if (click.style.display === "none") {
        click.style.display = "block" 
        document.getElementById("dropdown-input").style.borderBottomLeftRadius = "0"
        document.getElementById("dropdown-button").style.borderBottomRightRadius = "0"
        document.getElementById("dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.5)"
        document.getElementById("dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.5)"
        document.getElementById("dropdown-button").style.color= "rgba(31, 32, 65, 0.75)"
        document.getElementById("dropdown-button").innerHTML="expand_less"
    } else {
        click.style.display = "none" 
        document.getElementById("dropdown-input").style.borderBottomLeftRadius = "4px"
        document.getElementById("dropdown-button").style.borderBottomRightRadius = "4px"
        document.getElementById("dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.25)"
        document.getElementById("dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.25)"
        document.getElementById("dropdown-button").style.color= "rgba(31, 32, 65, 0.5)"
        document.getElementById("dropdown-button").innerHTML="expand_more"
    }
};

let count = 0;
function countPlus() {
    count += 1
    document.getElementById("count").innerHTML = count;
};
function countMinus() {
    count -= 1
    document.getElementById("count").innerHTML = count;
};