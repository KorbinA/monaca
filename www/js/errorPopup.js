function displayMessage(title, message, buttonText, url) {
    var html =
        '<div class="gc-dialog__body">' +
          // optional icon slot; styled solid in CSS (no gradients)
          '<div class="gc-dialog__icon" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
              '<path d="M12 7.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75Zm0 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="#fff"/>' +
            '</svg>' +
          '</div>' +
          '<div>' +
            (title ? '<div class="gc-dialog__title">' + title + '</div>' : '') +
            '<div class="gc-dialog__text">' + message + '</div>' +
          '</div>' +
        '</div>';

    $('#messagePopup').html(html).dialog({
        modal: true,
        resizable: false,
        draggable: false,
        closeOnEscape: true,
        width: Math.min($(window).width() - 32, 560),
        dialogClass: 'gc-dialog',
        open: function () {
            $(this).siblings('.ui-dialog-titlebar').hide();
        },
        buttons: [{
            text: buttonText || "OK",
            click: function () {
                $(this).dialog("close");
                if ((url != undefined) && (url.length > 0)) {
                    window.location.href = url;
                }
            }
        }]
    });
}
