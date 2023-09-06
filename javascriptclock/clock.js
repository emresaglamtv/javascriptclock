let fullName = prompt("Lütfen adinizi giriniz: ");

let myName = document.querySelector("#myName");

myName.innerHTML = `${myName.innerHTML} ${fullName}`;

var myClock = document.getElementById('myClock');

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    var t = d.getDay();

    switch (t) {
        case 1:
            t = ("Pazartesi")
            break;
        case 2:
            t = ("Salı")
            break;
        case 3:
            t = ("Çarşamba")
            break;
        case 4:
            t = ("Perşembe")
            break;
        case 5:
            t = ("Cuma")
            break;
        case 6:
            t = ("Cumartesi")
            break;
        case 7:
            t = ("Pazar")
            break;

        default:
            break;
    }


    myClock.textContent =
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + (" " + t);
}
setInterval(time, 1000);