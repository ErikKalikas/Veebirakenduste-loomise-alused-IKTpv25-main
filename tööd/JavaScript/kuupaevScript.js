const now = new Date();

const paev = now.getDate();
console.log("Tänane päev on " + paev + ".");

const kuu = now.getMonth() + 1; // getMonth() tagastab 0-11, seepärast +1
console.log("Kuu number on: " + kuu);

const aasta = now.getFullYear();
console.log("Aasta on: " + aasta);

const nadalapaev = now.getDay(); // 0-6, kus 0 on pühapäev
console.log("Nädalapäeva number on: " + nadalapaev);

function tana() {
    const vastus = document.getElementById("vastus");
    vastus.innerHTML = "Täna on " + paev + "." + kuu + "." + aasta;
}
// lisa veel getHours() = tund, getMinutes() = minutid
// ja lisa veel üks funktsioon, mis näitab kellaaega

// Mitu päeva on konsultatsiooni nädalani
// NB! new Date() kuud on 0-11: 10 = november, 11 = detsember
function konspaev() {
    const konsultatsioon = new Date(2026, 10, 2); // 2. november 2026
    const vahe = konsultatsioon.getTime() - now.getTime();
    const paevi = Math.ceil(vahe / (1000 * 60 * 60 * 24));

    const vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Konsultatsioonini on " + paevi + " päeva";
    console.log("Konsultatsiooni nädalani on " + paevi + " päeva");
}

console.log("Konsultatsiooni nädalani on " + konspaev + " päeva");