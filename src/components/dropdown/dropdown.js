function show_hide() {
    let click = document.getElementById("dropdown-content")
    if (click.style.display === "none") {
        click.style.display = "block" 
        document.getElementById("dropdown-input").style.borderBottomLeftRadius = "0"
        document.getElementById("dropdown-button").style.borderBottomRightRadius = "0"
    } else {
        click.style.display = "none" 
        document.getElementById("dropdown-input").style.borderBottomLeftRadius = "4px"
        document.getElementById("dropdown-button").style.borderBottomRightRadius = "4px"
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