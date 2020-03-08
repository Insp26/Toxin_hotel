//     if (click.style.display === "none") {
//         click.style.display = "block" 
//         document.getElementById("guest-dropdown-input").style.borderBottomLeftRadius = "0"
//         document.getElementById("guest-dropdown-button").style.borderBottomRightRadius = "0"
//         document.getElementById("guest-dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.5)"
//         document.getElementById("guest-dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.5)"
//         document.getElementById("guest-dropdown-button").style.color= "rgba(31, 32, 65, 0.75)"
//         document.getElementById("guest-dropdown-button").innerHTML="expand_less"
//     } else {
//         click.style.display = "none" 
//         document.getElementById("guest-dropdown-input").style.borderBottomLeftRadius = "4px"
//         document.getElementById("guest-dropdown-button").style.borderBottomRightRadius = "4px"
//         document.getElementById("guest-dropdown-input").style.borderColor = "rgba(31, 32, 65, 0.25)"
//         document.getElementById("guest-dropdown-button").style.borderColor= "rgba(31, 32, 65, 0.25)"
//         document.getElementById("guest-dropdown-button").style.color= "rgba(31, 32, 65, 0.5)"
//         document.getElementById("guest-dropdown-button").innerHTML="expand_more"
//     }
// };

// let count = 0;
// function countPlus() {
//     count += 1
//     document.getElementById("count").innerHTML = count;
// };
// function countMinus() {
//     count -= 1
//     document.getElementById("count").innerHTML = count;
// };

let guestDropdownClick = document.querySelector('.guest-dropdown__inner')
let guestDropdownButton = document.querySelector('.guest-dropdown__button')

guestDropdownButton.onclick = function() {
    guestDropdownClick.classList.toggle('guest-dropdown__inner_show')
    guestDropdownClick.classList.toggle('guest-dropdown__inner_hide')
};

