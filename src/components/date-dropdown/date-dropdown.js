function parseDate(str) {
    var mdy = str.split('.');
    return new Date(mdy[2], mdy[1]-1, mdy[0]);
}

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

let $dateDropdownBtn = $(".date-dropdown__button"),
    $dateDropdownInput = $("#date__start")
    dateDp = $dateDropdownInput.datepicker({
        onSelect: function onSelect(selectedDates) { 
            if(selectedDates !== undefined && selectedDates != '' && selectedDates.indexOf('-') > -1){
                let mdy = selectedDates.split('-');
                $("#date__start").val(mdy[0]);
                $("#date__end").val(mdy[1]);
                let numNights = (datediff(parseDate(mdy[0]), parseDate(mdy[1])));
                console.log(selectedDates)
                console.log(numNights)
            }
        },
        language: 'ru',
        dateFormat:'dd.mm.yyyy',
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
