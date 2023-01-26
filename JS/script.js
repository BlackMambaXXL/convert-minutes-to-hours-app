function getTimeFromMinutes(data) {
    let hours = 0;
    let minutes = 0;
    let hoursStr = "часов";
    let minutesStr = "минут";
    if (isNaN(data) || Math.sign(data) === -1 || data > 600) {
        console.log("Ошибка, проверьте данные");
    } else if (data === 69){
        console.log("( ͡° ͜ʖ ͡°)");
    } else {
        data = data / 60;
        hours = Math.trunc(data);
        minutes = (data - hours) * 60;
        minutes = Math.round(minutes);

        if (hours === 1 ) {
            hoursStr = "час";
        } else if (hours === 2 || hours === 3 || hours === 4) {
            hoursStr = "часа";
        }

        
        minutes = String(minutes);

        if (minutes.length < 2) {
            if (minutes == 1) {
                minutesStr = "минута";
            } else if (minutes == 2 || minutes == 3 || minutes == 4){
                minutesStr = "минуты";
            }

        } else {
            if (minutes.startsWith (1)) {
                minutesStr = "минут";
            } else if (minutes.includes(1, 1)) {
                minutesStr = "минута";
            } else if (minutes.includes(2, 1) || minutes.includes(3, 1) || minutes.includes(4, 1) ) {
                minutesStr = "минуты";
            }
        }

        minutes = Number(minutes);

        console.log(`Это ${hours} ${hoursStr} и ${minutes} ${minutesStr}`);
    }

}

getTimeFromMinutes(+prompt("Введите минуты", ""));
