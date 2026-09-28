function nameReadFromBox() {
    let vastus1 = document.getElementById('vastus1');
    let nimi = document.getElementById('nimi');


vastus1.innerHTML = "Sisestud nimi on: " + nimi.value;
vastus1.style.backgroundColor = "lightgreen";

return nimi.value;


}

function raadioValik() {
    let vastus2 = document.getElementById('vastus2');
    let spotify = document.getElementById('spotify');
    let radio = document.getElementById('radio');
    let vinyyl = document.getElementById('vinüülplaat');


let valik = "";

if (spotify.checked) {
    valik = spotify.value;
}
else if (radio.checked) {
    valik = radio.value;
}
else if (vinyyl.checked) {
    valik = vinyyl.value;
}

vastus2.innerHTML = "valik: " + valik;

return valik;


}

function checkboxVastus() {
    let vastus3 = document.getElementById('vastus3');
    let SAMURAI = document.getElementById('SAMURAI');
    let Lifelover = document.getElementById('Lifelover');
    let CurtanWall = document.getElementById("Curta'n Wall");
    let CrackedBascienet = document.getElementById('Cracked Bascienet');


let valik2 = "";

if (SAMURAI.checked) {
    valik2 += SAMURAI.value + ', <br>';
}

if (Lifelover.checked) {
    valik2 += Lifelover.value + ', <br>';
}

if (CurtanWall.checked) {
    valik2 += CurtanWall.value + ', <br>';
}

if (CrackedBascienet.checked) {
    valik2 += CrackedBascienet.value + ', <br>';
}

if (valik2 == "") {
    valik2 = "tee oma valik!";
}

vastus3.innerHTML = "Sinu lemmik on: " + valik2;
vastus3.style.backgroundColor = "lightgreen";

return valik2;


}

function rangeValik() {
    let vastus4 = document.getElementById('vastus4');
    let tund = document.getElementById('tund');


vastus4.innerHTML = "Sa kuuled muusikat: " + tund.value + " tundi";

return tund.value;


}

function selectValik() {
    let vastus5 = document.getElementById('vastus5');
    let stiil = document.getElementById('stiil');

if (stiil.selectedIndex !== 0) {
    vastus5.innerHTML = "Sa valisid " + stiil.value;
}
else {
    vastus5.innerHTML = "palun tee oma valik";
}

return stiil.value;


}

function kuuladradio() {
    let vastus6 = document.getElementById('vastus6');
    let ei = document.getElementById('ei');
    let jah = document.getElementById('jah');


let valik3 = "";

if (jah.checked) {
    valik3 += jah.value + ', <br>';
}

if (ei.checked) {
    valik3 += ei.value + ', <br>';
}

if (valik3 == "") {
    valik3 = "tee oma valik!";
}

vastus6.innerHTML = "Kas sa kuulad raadiot? : " + valik3;
vastus6.style.backgroundColor = "lightgreen";

return valik3;

}

function naitaKoike() {
    let vastuskoike = document.getElementById('vastuskoik');


let nimi = nameReadFromBox();
let valik = raadioValik();
let valik2 = checkboxVastus();
let tund = rangeValik();
let stiil = selectValik();
let valik3 = kuuladradio();

vastuskoike.innerHTML = "Sinu nimi on: " + nimi + '<br>' +
    'Sinu lemmikud on: ' + valik2 + '<br>' +
    'Sa kasutad ' + valik + '<br>' +
    'Sa kuuled ' + tund + ' tundi' + '<br>' +
    'Sa valisid ' + stiil + '<br>' +
    '' + valik3;


}

function puhasta() {
    let vastus1 = document.getElementById('vastus1');
    let vastus2 = document.getElementById('vastus2');
    let vastus3 = document.getElementById('vastus3');
    let vastus4 = document.getElementById('vastus4');
    let vastus5 = document.getElementById('vastus5');
    let vastuskoik = document.getElementById('vastuskoik');
    let vastus6 = document.getElementById('vastus6');


vastus1.innerHTML = "";
vastus2.innerHTML = "";
vastus3.innerHTML = "";
vastus4.innerHTML = "";
vastus5.innerHTML = "";
vastuskoik.innerHTML = "";
vastus6.innerHTML = "";


}
