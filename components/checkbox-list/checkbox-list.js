function showHideCheckboxList() {
    let click = document.getElementById("checkbox-list__items")
    if (click.style.display === "none") {
        click.style.display = "block" 
        document.getElementById("checkbox-list__button").innerHTML="expand_less"
    } else {
        click.style.display = "none" 
        document.getElementById("checkbox-list__button").innerHTML="expand_more"
    }
};