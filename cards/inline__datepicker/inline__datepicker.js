let $inlineDatepickerInput = $("#inline__datepicker")
    inlineDp = $inlineDatepickerInput.datepicker({
        language: 'ru',
        range: true,
        toggleSelected: false,
        minDate: new Date(),
        dateFormat: 'dd M',
        clearButton: true,
        applyButton: true,
        inline: true,
    showEvent: 'none',
    }).data('datepicker');