// KONSPEKT: JS objektide süntaks ja struktuur
//
// Objekt hoiab ühe asjaga seotud andmed koos (nt auto: mark, mudel, aasta).
// Objekt koosneb võtme ja väärtuse paaridest: { võti: väärtus }
// Väärtus võib olla tekst, arv, massiiv või funktsioon.
//
// Sisseehitatud objektid:
// Math   - matemaatika (ümardamine, ruutjuur)
// Date   - kuupäevad ja kellaajad
// Array  - massiivid ja nende meetodid
// String - tekst (length, toUpperCase, substring)
// Object - kõikide objektide alus
//
// Igal nupul on oma funktsioon, mis näitab ühte teemat
// konsoolis (console.log) ja lehel (innerHTML).

// Objekti loomine
// Objekt tehakse { } sulgudega, omadused eraldatakse komaga.
// Punktisüntaks: auto.mark annab "Toyota"
function naitaAuto() {
    const auto = {
        mark: "Toyota",
        mudel: "Corolla",
        aasta: 2022,
        varv: "punane",
        lisavarustus: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"]
    };

    console.log(auto);
    console.log(auto.mark);
    console.log(auto.mudel);
    console.log(auto.aasta);
    console.log(auto.varv);
    console.log(auto.lisavarustus);

    let tekst = "Mark: " + auto.mark + "<br>";
    tekst = tekst + "Mudel: " + auto.mudel + "<br>";
    tekst = tekst + "Aasta: " + auto.aasta + "<br>";
    tekst = tekst + "Värv: " + auto.varv + "<br>";
    tekst = tekst + "Lisavarustus:<br>";
    auto.lisavarustus.forEach((asi) => {
        tekst = tekst + asi + "<br>";
    });

    const vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = tekst;
}

// Objekti meetodid ja this kasutamine
// Meetod on funktsioon objekti sees.
// this tähendab sama objekti: this.mark = auto.mark
function nimi() {
    const auto = {
        mark: "Toyota",
        mudel: "Corolla L",
        aasta: 2022,
        varv: "punane",
        omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
        taisnimi: function() {
            return this.mark + " " + this.mudel;
        }
    };

    console.log(auto.taisnimi());

    const vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Auto täisnimi on " + auto.taisnimi();
}

// Meetodi lühendamine (ES6)
// taisnimi: function() { } asemel võib kirjutada taisnimi() { }
// Kui omadus on massiiv, siis kasuta forEach tsüklit
function omadused() {
    const auto = {
        mark: "Toyota",
        mudel: "Corolla L",
        aasta: 2022,
        varv: "punane",
        omadused: ["kliimaseade", "elektriaknad", "navigatsioonisüsteem"],
        taisnimi() {
            return this.mark + " " + this.mudel;
        },
        kuvaOmadused() {
            this.omadused.forEach(omadus => console.log(omadus));
        }
    };

    auto.kuvaOmadused();

    let tekst = "Auto " + auto.taisnimi() + " omadused:<br>";
    auto.omadused.forEach((omadus) => {
        tekst = tekst + omadus + "<br>";
    });

    const vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = tekst;
}

// Objektide massiivi loomine ja kuvamine
// Objektide massiiv on massiiv, kus iga element on objekt.
// Indeks algab 0-st: autod[0] on esimene auto, autod[0].mark tema mark
// forEach käib kõik autod läbi
function koikAutod() {
    const autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    console.log(autod);
    console.log(autod[0]);
    console.log(autod[0].mark);

    let tekst = "";
    autod.forEach((auto) => {
        console.log("Mark: " + auto.mark + ", Mudel: " + auto.mudel + ", Aasta: " + auto.aasta);
        tekst = tekst + "Mark: " + auto.mark + ", Mudel: " + auto.mudel + ", Aasta: " + auto.aasta + "<br>";
    });

    const vastus4 = document.getElementById("vastus4");
    vastus4.innerHTML = tekst;
}

// Objekti massiivi meetodid
// push()    - lisab lõppu
// unshift() - lisab algusesse
// splice(algus, mitu eemaldada, mida lisada) - kustutab ja lisab korraga
function lisa() {
    const autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
    ];

    autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });
    autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });
    console.log(autod);

    autod.splice(0, 1);
    autod.splice(1, 0, { mark: 'Audi', mudel: 'A4', aasta: 2018 });
    console.log(autod);

    let tekst = "";
    autod.forEach((auto) => {
        tekst = tekst + auto.mark + " " + auto.mudel + " " + auto.aasta + "<br>";
    });

    const vastus5 = document.getElementById("vastus5");
    vastus5.innerHTML = tekst;
}

// Massiivist otsimine
// find() leiab esimese sobiva elemendi, kui ei leia, siis undefined
// Mitu tingimust korraga: &&
function otsi() {
    const autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Audi', mudel: 'A4', aasta: 2018 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 },
        { mark: 'BMW', mudel: '320i', aasta: 2015 }
    ];

    const otsing = autod.find(auto => auto.aasta > 2018);
    console.log(otsing);

    const otsing2 = autod.find(auto => auto.aasta > 2018 && auto.mark === "Tesla");
    console.log(otsing2);

    const vastus6 = document.getElementById("vastus6");
    vastus6.innerHTML = "Leitud auto: " + otsing.mark + " " + otsing.mudel + " " + otsing.aasta;
}

// Massiivi filtreerimine
// filter() teeb uue massiivi kõigist sobivatest elementidest
// arv % 2 === 0 tähendab, et arv jagub 2-ga (paarisarv)
function filtreeri() {
    const arvud = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filtreeritud = arvud.filter(arv => arv % 2 === 0);
    console.log(filtreeritud);

    const autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Audi', mudel: 'A4', aasta: 2018 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 },
        { mark: 'BMW', mudel: '320i', aasta: 2015 }
    ];
    const filter = autod.filter(auto => auto.aasta > 2018);
    console.log(filter);

    let tekst = "Paarisarvud: ";
    filtreeritud.forEach((arv) => {
        tekst = tekst + arv + " ";
    });
    tekst = tekst + "<br>Uuemad kui 2018: ";
    filter.forEach((auto) => {
        tekst = tekst + auto.mark + " " + auto.mudel + " ";
    });

    const vastus7 = document.getElementById("vastus7");
    vastus7.innerHTML = tekst;
}

// Massiivi sorteerimine
// sort() vajab objektide puhul võrdlusfunktsiooni
// a.aasta - b.aasta: kui tulemus on negatiivne, läheb a ette
// Nii sorteeritakse väiksemast suuremani
function sorteeri() {
    const autod = [
        { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
        { mark: 'Audi', mudel: 'A4', aasta: 2018 },
        { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
        { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 },
        { mark: 'BMW', mudel: '320i', aasta: 2015 }
    ];

    autod.sort((a, b) => a.aasta - b.aasta);
    console.log(autod);

    let tekst = "";
    autod.forEach((auto) => {
        tekst = tekst + auto.aasta + " " + auto.mark + " " + auto.mudel + "<br>";
    });

    const vastus8 = document.getElementById("vastus8");
    vastus8.innerHTML = tekst;
}
