function teisendamine() {//Meetri/tolli kalkulaator

    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");//mitu elementi ühe nimega
    let arv = document.getElementById("arv");
    let vastusepilt = document.getElementById("vastusepilt");

    const toll = 39.37;
    const meeter = 0.0254;

    //tsükkel
    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {

            if (valik[i].value === "meeter") {
                vastus.innerHTML = arv.value + ' meetri = ' + (arv.value * toll).toFixed(2) + " tolli";
                vastus.style.color = "darkgreen";
                vastusepilt.src = "kalkulaatoriImages/meeter.jpg";
            }

            else if (valik[i].value === "tolli") {
                vastus.innerHTML = arv.value + ' tolli = ' + (arv.value * meeter).toFixed(2) + " meetri";
                vastus.style.color = "red";
                vastusepilt.src = "kalkulaatoriImages/toll.png";
            }

            else {
                vastus.innerHTML = " Vali ühik - kas meeter või toll?: ";
            }
        }
    }
}
