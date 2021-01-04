// задачка с машинкой
var car = {
        manufacturer: "lada",
        model: "2101",
        birth: "1977",
        speed: 60,
    }

function infoCar(obj) {
    let answer = "";
    for (let key in obj) {
        answer += (`${key} - ${obj[key]} <br>`); 
    }
    return answer;
}

function buttomInfo() {
    let fild = document.getElementById("answerFild");
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `${infoCar(car)}`);
}

function cleanFild() {
    let compareClean = document.getElementById("answerFild");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}

function timeInRoad() {
    let distance = Number(document.getElementById("km").value);
    let fild = document.getElementById("answerFild");
    let averageSpeed = Number(car.speed);
    let time = Math.floor(distance / averageSpeed);
    let remainderDistance = distance % averageSpeed;
    let restHours = 0;
    let timeInARoad = 0;
    if (distance <= 0) {
        cleanFild()
        fild.insertAdjacentHTML('beforeend', `а давай дистацния будет больше 0`);
    } else { 
    for (let hour = 1; hour <= time; hour++) {
        if (hour % 4 == 0) {
            restHours++;
        }
    }
    timeInARoad = time + restHours;
    if (distance % 240 == 0) {
        timeInARoad = timeInARoad - 1;
        restHours -= 1;
    }
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `Наш жигуль проедет ${distance} км за:<br>${timeInARoad} 
    часов и ${remainderDistance} минут<br> со средней скоростью ${averageSpeed}<br> отдохнет всего ${restHours} час`);
}
}

// задачка время

function setTime() {
    var myDate = new Date();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();
if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}
return (`${hour}:${minute}:${second}`)
}

function timeNow() {
    let fild = document.getElementById("timeFild");
    cleanTimeFild()
    fild.insertAdjacentHTML('beforeend', `${setTime()}`);
}

function cleanTimeFild() {
    let compareClean = document.getElementById("timeFild");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}

function setSecond(sec) {
    var d = new Date();
    d.setSeconds(d.getSeconds() + sec);
return (`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`)
}
function setMinutess(min) {
    var f = new Date();
    f.setMinutes(f.getMinutes() + min);
return (`${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`)
}
function setHours(hours) {
    var f = new Date();
    f.setHours(f.getHours() + hours);
return (`${f.getHours()}:${f.getMinutes()}:${f.getSeconds()}`)
}
 


function sec() {
    let inputSecond = Number(document.getElementById("setSec").value);
    let fild = document.getElementById("timeFild");
    cleanTimeFild()
    fild.insertAdjacentHTML('beforeend', `${setTime()} - до изменений <br>${setSecond(inputSecond)} - после изменений`);
}
function min() {
    let inputMinutes = Number(document.getElementById("setMin").value);
    let fild = document.getElementById("timeFild");
    cleanTimeFild()
    fild.insertAdjacentHTML('beforeend', `${setTime()} - до изменений <br>${setMinutess(inputMinutes)} - после изменений`);
}
function how() {
    let inputHours = Number(document.getElementById("setHow").value);
    let fild = document.getElementById("timeFild");
    cleanTimeFild()
    fild.insertAdjacentHTML('beforeend', `${setTime()} - до изменений <br>${setHours(inputHours)} - после изменений`);
}