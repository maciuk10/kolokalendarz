/**
 * Created by maciek on 2017-10-26.
 */
$(function(){
    var next = 0;
    $('.from').html(moment().startOf('isoweek').format('DD-MM-YYYY'));
    $('.to').html(moment().endOf('isoweek').format('DD-MM-YYYY'));
    var firstDay = parseInt($('.from').html().substring(0,2));
    var currentMonth = parseInt($('.from').html().substring(3,5));

    $('.schedule > tbody > tr > th').each(function () {
        $(this).html($(this).html()+"<span class='day_desc'><br>"+firstDay+"."+currentMonth+"</span>");
        firstDay++;
    });


    $('.next-week').on('click', function (e) {
        next++;
        $('.from').html(moment().add(next, 'weeks').startOf('isoweek').format('DD-MM-YYYY'));
        $('.to').html(moment().add(next, 'weeks').endOf('isoweek').format('DD-MM-YYYY'));
        e.preventDefault();
    });
    $('.prev-week').on('click', function (e) {
        next--;
        $('.from').html(moment().add(next, 'weeks').startOf('isoweek').format('DD-MM-YYYY'));
        $('.to').html(moment().add(next, 'weeks').endOf('isoweek').format('DD-MM-YYYY'));
        e.preventDefault();
    });
});