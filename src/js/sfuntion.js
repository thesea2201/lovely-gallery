$(document).ready(function() {
    clockCountdown();

});

function clockCountdown(){
    var end = $('#select-countdown').val();
    var now = new Date();
    var yearNow = now.getFullYear();
    var yearNext = yearNow + 1;

    nowTime = (Date.parse(now) / 1000);	
    endThisYear = end.replace("year", yearNow);console.log(end, endThisYear);
    endTime = (Date.parse(endThisYear) / 1000);

    var timeLeft = endTime - nowTime;
    if(timeLeft < 0){
        endNextYear = end.replace("year", yearNext);console.log(end, endNextYear);
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