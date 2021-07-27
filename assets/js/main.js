;(function ($) {
    $(document).ready(function () {
        $('body').on('click', "#noticeninja .notice-dismiss", function () {
            console.log('clicked');
            setCookie('nn-close', '1', 5);
        });
    })
})(jQuery);

/*
function setCookie(cookieName, cookieValue, expiryInSeconds) {
    var expiry = new Data();
    expiry.setTime(expiry.getTime() + 1000 * expiryInSeconds);
    document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expiry.toGMTString() + "; path=/";
}*/


function setCookie(name, value, seconds) {
    var expires = "";
    if (seconds) {
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}