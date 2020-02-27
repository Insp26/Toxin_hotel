function likeButtonClick() {
    let likeBtnClick = document.getElementsByClassName("like-button__input")
    if (likeBtnClick.checked = true) {
        document.getElementsByClassName("like-button__count").style.content = "+1"
    }
    else {
        document.getElementsByClassName("like-button__count").style.content = "-1"
    }
}
