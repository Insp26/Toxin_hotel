let $filterDateDropdownBtn= $(".filter-dropdown__button"),
    $filterDateDropdownInput = $("#filter__date")
    filterDateDp = $filterDateDropdownInput.datepicker({
        language: 'ru',
        range: true,
        toggleSelected: false,
        minDate: new Date(),
        dateFormat: 'dd M',
        clearButton: true,
        applyButton: true,
        navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
    },
    showEvent: 'none',
    }).data('datepicker');

    $filterDateDropdownBtn.on('click', function(){
        filterDateDp.show();
        $filterDateDropdownInput.focus();
});