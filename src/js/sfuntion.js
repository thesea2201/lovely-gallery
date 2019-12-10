$(document).ready(function() {
    clockCountdown();
    changeImageSource();

});

function clockCountdown(){
    var end = $('#select-countdown').val();
    var now = new Date();
    var yearNow = now.getFullYear();
    var yearNext = yearNow + 1;

    nowTime = (Date.parse(now) / 1000);	
    endThisYear = end.replace("year", yearNow);
    endTime = (Date.parse(endThisYear) / 1000);

    var timeLeft = endTime - nowTime;
    if(timeLeft < 0){
        endNextYear = end.replace("year", yearNext);
        endTime = (Date.parse(endNextYear) / 1000);
        timeLeft = endTime - nowTime;
    }

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days-countdown").html(days + "<span>Days</span>");
    $("#hours-countdown").html(hours + "<span>Hours</span>");
    $("#minutes-countdown").html(minutes + "<span>Minutes</span>");
    $("#seconds-countdown").html(seconds + "<span>Seconds</span>");		

	setInterval(function() { clockCountdown(); }, 1000);
}

function changeImageSource(){
    $('#select-countdown').change(function(){
        var end = $('#select-countdown').val();console.log(end.indexOf('04 October'));
        if(end.indexOf('04 October') != -1){
            $('#hours-countdown').bind().on('click', function() {
                var images = $('.data-carousel-3d').find('img');
                images.each(function(){
                    var src = $(this).attr('src');console.log(src);
                    src = src.replace('image', 'loveImage');console.log(src);
                    $(this).attr('src', src);
                })
            });
        }
    });
}