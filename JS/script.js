function getTimeFromMinutes(data) {
    // data = +prompt("Введите минуты", "");
    let hours = 0;
    let minutes = 0;
    if (isNaN(data) || Math.sign(data) === -1) {
        console.log("Ошибка, проверьте данные");
    } else {
        if (data % 60 === 0) {
            hours = data / 60;
            console.log(`${hours} часов и ${minutes} минут`);
        } else {
            data = data / 60;
            hours = Math.trunc(data);
            minutes = (data - hours) * 60;
            console.log(`${hours} часов и ${Math.round(minutes)} минут`);
        }
    }

}

getTimeFromMinutes(152);

console.log();
