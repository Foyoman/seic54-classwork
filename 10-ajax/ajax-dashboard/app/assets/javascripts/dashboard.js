const fetchBrother = function () {
    // $.ajax('/api/brother').done(function (brother) {
    //     // show the brother on the page
    //     $('#brother').text(brother);
    // });
    $('#brother').load('/api/brother');
};

const fetchTime = function () {
    // $.ajax('/api/time').done(function (time) {
    //     $('#time').text(time);
    // });
    $('#time').load('/api/time');
};

const fetchUptime = function () {
    // $.ajax('/api/uptime').done(function (uptime) {
    //     $('#uptime').text(uptime);
    // });
    $('#uptime').load('/api/uptime');
};

// setInterval(fetchBrother, 4000); // polling
// setInterval(fetchTime, 1000);
// setInterval(fetchUptime, 7000);

const fetchInfo = function () {
    $.getJSON('/api/info').done(function (info) {
        $('#brother').text(info.brother);
        $('#time').text(info.time);
        $('#uptime').text(info.uptime);
        $('#calls').text(info.calls);
        $('#floods').text(info.floods);
    });
};

setInterval(fetchInfo, 2000);