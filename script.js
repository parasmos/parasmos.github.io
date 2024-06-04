$(document).ready(function() {

    $('.nav-toggle').click(function() {
        $('.main-nav').slideToggle();
    });

    // $('.faq-question').click(function() {
    //     $(this).next('.faq-answer').slideToggle();
    // });

    $("#faq-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
    $("#steps-accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

});
