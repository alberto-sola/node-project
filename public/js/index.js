$(document).ready(() => {
    $.each($('span.clr-ctrl'), ({}, el) => {
        if ($(el).text() < 6) $(el).addClass('red')
        else $(el).addClass('green')
    })

    $('.myCard').animate({left: 0, opacity: 1}, 1000, 'swing')
    /*$('#form').animate({right: 0}, 1000, 'swing')*/
    $('.add-btn').fadeIn(1500)
})

const validate = () => {
    let name = $('#name')
    let surname = $('#surname')
    let media = $('#media')
    /*let min = $('#min')
    let max = $('#max')*/

    /*if (min.val() === "") {
        min.addClass('invalid')
    } else min.removeClass('invalid')

    if (max.val() === "") {
        max.addClass('invalid')
    } else max.removeClass('invalid')*/

    if (name.val() === "") {
        name.addClass('invalid');
    } else name.removeClass('invalid')

    if (surname.val() === "") {
        surname.addClass('invalid')
    } else surname.removeClass('invalid')

    if (media.val() === "") {
        media.addClass('invalid')
    } else media.removeClass('invalid')

    return null;
}