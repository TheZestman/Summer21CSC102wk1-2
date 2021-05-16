// wk1-2 countdown timer.
// 10 to 1 then BLASTOFF
function startCountdown() {
    var count = 10; // sets count to 10

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // After one second code in here will execute
        // waits one seoond and outputs 9
    }, 1000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 2 seconds and outputs 8
    }, 2000);
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 3 seconds and outputs 7
    }, 3000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 4 seconds and outputs 6
    }, 4000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 5 seoncd and outputs 5
    }, 5000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 6 seconds and outputs 4
    }, 6000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 7 seconds and outputs 3
    }, 7000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;  
        // waits 8 seconds and outputs 2
    }, 8000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 9 seconds and outputs 2
    }, 9000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "BLASTOFF";
        // Outputs blastoff after 10 seconds
    }, 10000)
}