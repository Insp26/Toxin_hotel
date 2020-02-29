$(function() {
    $("#pagination").pagination({
        items: 180,
        itemsOnPage: 12,
        displayedPages: 3,
        edges: 1,
        cssStyle: 'light-theme',
        prevText: '',
        nextText: 'arrow_forward',
        ellipsePageSet: false,
    });
});