const raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return this.pealkiri + ", " + this.autor + ", " + this.aasta;
    },

    muudaAasta(uus) {
        console.log("Enne: " + this.kirjeldus());
        this.aasta = uus;
        console.log("Pärast: " + this.kirjeldus());
    }
};

const raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Mees, kes teadis ussisõnu", autor: "Andrus Kivirähk", aasta: 2007 },
        { pealkiri: "Seltsimees laps", autor: "Leelo Tungal", aasta: 2008 }
    ],

    kuva() {
        let tekst = "";
        this.raamatud.forEach((r) => {
            console.log(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")");
            tekst = tekst + r.pealkiri + " - " + r.autor + " (" + r.aasta + ")<br>";
        });
        return tekst;
    },

    lisa(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log("Lisatud: " + pealkiri);
    },

    kokku() {
        console.log("Raamatuid kokku: " + this.raamatud.length);
        return this.raamatud.length;
    },

    parast2000() {
        const uued = this.raamatud.filter(r => r.aasta > 2000);
        console.log("Pärast 2000. aastat: " + uued.length);
        return uued.length;
    },

    otsiAutor(autor) {
        const leitud = this.raamatud.filter(r => r.autor === autor);
        let tekst = "";
        leitud.forEach((r) => {
            console.log(r.pealkiri + " (" + r.aasta + ")");
            tekst = tekst + r.pealkiri + " (" + r.aasta + ")<br>";
        });
        if (tekst === "") {
            console.log("Ei leitud");
            tekst = "Ei leitud";
        }
        return tekst;
    }
};

console.log(raamat);
console.log(raamatukogu);

function naita() {
    const vastus1 = document.getElementById("vastus1");
    vastus1.innerHTML = raamat.kirjeldus();
    console.log(raamat.kirjeldus());
}

function muuda() {
    const uus = Number(document.getElementById("uusAasta").value);
    raamat.muudaAasta(uus);

    const vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Nüüd: " + raamat.kirjeldus();
}

function koik() {
    const vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = raamatukogu.kuva();
}

function arv() {
    const vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "Raamatuid kokku: " + raamatukogu.kokku();
}

function uued() {
    const vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "Pärast 2000. aastat: " + raamatukogu.parast2000();
}

function lisaRaamat() {
    const pealkiri = document.getElementById("pealkiri").value;
    const autor = document.getElementById("autor").value;
    const aasta = Number(document.getElementById("aasta").value);
    const vastus4 = document.getElementById("vastus4");

    if (pealkiri === "" || autor === "") {
        vastus4.innerHTML = "Kirjuta pealkiri ja autor!";
    } else {
        raamatukogu.lisa(pealkiri, autor, aasta);
        vastus4.innerHTML = "Lisatud: " + pealkiri;
        koik();
    }
}

function otsi() {
    const autor = document.getElementById("otsing").value;
    const vastus5 = document.getElementById("vastus5");
    vastus5.innerHTML = raamatukogu.otsiAutor(autor);
}
