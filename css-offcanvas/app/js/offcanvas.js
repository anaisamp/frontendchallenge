$(function() {
    $('.toggle-nav, .overlay').click(function() {
        toggleNav();
    });
});

function toggleNav() {
    if ($('body').hasClass('show-nav')) {
        //nav closes
        $('body').removeClass('show-nav');
    } else {
        //nav opens
        $('body').addClass('show-nav');
    }
}
