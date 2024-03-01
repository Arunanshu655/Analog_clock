setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hRo = 30 * h + m / 2 + s / 120;
    mRo = 6 * m + s / 10;
    sRo = 6 * s;

    hour.style.transform = `rotate(${hRo}deg)`;
    minute.style.transform = `rotate(${mRo}deg)`;
    second.style.transform = `rotate(${sRo}deg)`;

}, 1000);