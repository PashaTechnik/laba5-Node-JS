
var d = document

var t = new Date()


function findWeek(obj) {
    var c = obj.week.value;
    var month = Number(c[5] + c[6])-1;
    var day = Number(c[8] + c[9]);
    var week = month*30+day;
    var weeknum = week/7;
    obj.weekNum.value = Math.floor(weeknum+1);
}

function c1(form) {
    var z = "";
    var c = form.bday.value;
    console.log(form.bday.value);
    var day = Number(c[8] + c[9]);
    var month = Number(c[5] + c[6]);
    console.log(day, month);
    switch (month) {
        case 1:
            if (day < 19) z = "Козерог"
            else z = "Водолей"
            break;
        case 2:
            if (day < 18) z = "Водолей"
            else z = "Рыбы"
            break;
        case 3:
            if (day < 20) z = "Рыбы"
            else z = "Овен"
            break;
        case 4:
            if (day < 20) z = "Овен"
            else z = "Телец"
            break;
        case 5:
            if (day < 20) z = "Телец"
            else z = "Близнецы"
            break;
        case 6:
            if (day < 20) z = "Близнецы"
            else z = "Рак"
            break;
        case 7:
            if (day < 22) z = "Рак"
            else z = "Лев"
            break;
        case 8:
            if (day < 22) z = "Лев"
            else z = "Дева"
            break;
        case 9:
            if (day < 23) z = "Дева"
            else z = "Весы"
            break;
        case 10:
            if (day < 23) z = "Весы"
            else z = "Скорпион"
            break;
        case 11:
            if (day < 21) z = "Скорпион"
            else z = "Стрелец"
            break;
        case 12:
            if (day < 21) z = "Стрелец"
            else z = "Козерог"
            break;
    }

    form.rest.value = z;
}

function c2(form) {
    var a = form.dat.value;
    var year = Number(a[0] + a[1] + a[2] + a[3]);
    var animal = year%1948;
    var z = "";
    var color = year%1948;
    color = color % 10 + 1;
    console.log(color);
    switch (color) {
        case 1:
        case 2:
            z = "Желтый"
            break;
        case 3:
        case 4:
            z = "Белый"
            break;
        case 5:
        case 6:
            z = "Синий"
            break;
        case 7:
        case 8:
            z = "Зеленый"
            break;
        case 9:
        case 10:
            z = "Красный"
            break;

    }

    z += " ";
    switch (animal % 12 + 1) {
        case 1:
            z += "Крыса";
            break;
        case 2:
            z += "Бык"
            break;
        case 3:
            z += "Тигр"
            break;
        case 4:
            z += "Кролик"
            break;
        case 5:
            z += "Дракон"
            break;
        case 6:
            z += "Змея"
            break;
        case 7:
            z += "Лошадь"
            break;
        case 8:
            z += "Овца"
            break;
        case 9:
            z += "Обезьяна"
            break;
        case 10:
            z += "Петух"
            break;
        case 11:
            z += "Собака"
            break;
        case 12:
            z += "Свинья"
            break;
    }
    console.log(z);
    form.res.value = z;
}