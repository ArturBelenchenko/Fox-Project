const getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};

const initializeClock = (id, endtime) => {
    const clock = document.getElementById(id);
    const days = clock.querySelector('.days');
    const hours = clock.querySelector('.hours');
    const minutes = clock.querySelector('.minutes');
    const seconds = clock.querySelector('.seconds');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = ('0' + t.hours).slice(-2);
        minutes.innerHTML = ('0' + t.minutes).slice(-2);
        seconds.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    };

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
};

const deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);