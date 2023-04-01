$(function () {

    var header = $("#header");
    var introH = $("#cards").innerHeight();
    var scrollOffset = 0;

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    })
})


// Бургер меню 
$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $(this).toggleClass('open-menu');
        $('.nav').toggleClass('open-menu');
    });
});

// Поисковик 
$('#search-input').keyup(function() {
    var query = $(this).val();
    $('#search-results').empty();
    if(query.length > 0) {
        $('searchable').each(function() {
            if($(this).text().toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                $('#search-results').append('<li>' + $(this).html() + '</li>');
            };
        });
    }
});