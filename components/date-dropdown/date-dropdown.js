let $dateDropdownBtn = $(".date-dropdown__button"),
    $dateDropdownInput = $("#date__start")
    dateDp = $dateDropdownInput.datepicker({
        onSelect: function (fd, d, picker) { 
            $("#date__start").val(fd.split("-")[0]);
            $("#date__end").val(fd.split("-")[1]);
        },
        language: 'ru',
        range: true,
        toggleSelected: false,
        minDate: new Date(),
        clearButton: true,
        applyButton: true,
        multipleDates: true,
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
        },
        showEvent: 'none',
    }).data('datepicker');

    $dateDropdownBtn.on('click', function(){
    dateDp.show();
    $dateDropdownInput.focus();
});
