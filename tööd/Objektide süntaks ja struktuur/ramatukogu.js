const raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    kirjeldus() {
        return "Raamat \"" + this.pealkiri + "\", autor " + this.autor + ", välja antud " + this.aasta + ". aastal";
    },

    muudaAasta(uusAasta) {
        const vanaAasta = this.aasta;
        this.aasta = uusAasta;
        console.log("Vana aasta: " + vanaAasta);
        console.log("Uus aasta: " + this.aasta);
        console.log(this.kirjeldus());
        return "Aasta muudetud: " + vanaAasta + " → " + this.aasta + "<br>" + this.kirjeldus();
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

    kuvaRaamatud() {
        let tekst = "";
        this.raamatud.forEach((raamat, i) => {
            const rida = (i + 1) + ". " + raamat.pealkiri + " - " + raamat.autor + " (" + raamat.aasta + ")";
            console.log(rida);
            tekst = tekst + rida + "<br>";
        });
        return tekst;
    },

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
        console.log("Lisatud raamat: " + pealkiri + " - " + autor + " (" + aasta + ")");
        return "Lisatud raamat: " + pealkiri + " - " + autor + " (" + aasta + ")";
    },

    koguarv() {
        console.log("Raamatukogus on " + this.raamatud.length + " raamatut");
        return "Raamatukogus on " + this.raamatud.length + " raamatut";
    },

    parast2000() {
        const uued = this.raamatud.filter(raamat => raamat.aasta > 2000);
        console.log("Pärast 2000. aastat on ilmunud " + uued.length + " raamatut");
        return "Pärast 2000. aastat on ilmunud " + uued.length + " raamatut";
    },

    // Minu meetod: otsib kõik raamatud, mille autor on antud nimi (filter teeb uue massiivi leitud raamatutest)
    otsiAutor(autor) {
        const leitud = this.raamatud.filter(raamat => raamat.autor.toLowerCase() === autor.toLowerCase());
        if (leitud.length === 0) {
            console.log("Autorilt " + autor + " raamatuid ei leitud");
            return "Autorilt " + autor + " raamatuid ei leitud";
        }
        let tekst = "Autori " + autor + " raamatud:<br>";
        console.log("Autori " + autor + " raamatud:");
        leitud.forEach(raamat => {
            console.log(raamat.pealkiri + " (" + raamat.aasta + ")");
            tekst = tekst + raamat.pealkiri + " (" + raamat.aasta + ")<br>";
        });
        return tekst;
    }
};

console.log(raamat);
console.log(raamat.kirjeldus());
console.log(raamatukogu.raamatud);

function naitaKirjeldus() {
    const vastus = document.getElementById("kirjeldus");
    vastus.innerHTML = raamat.kirjeldus();
    console.log(raamat.kirjeldus());
}

function muudaAastat() {
    const uusAasta = Number(document.getElementById("uusAasta").value);
    const vastus = document.getElementById("aastaVastus");
    if (uusAasta === 0) {
        vastus.innerHTML = "Sisesta aasta!";
        return;
    }
    vastus.innerHTML = raamat.muudaAasta(uusAasta);
}

function naitaRaamatud() {
    const vastus = document.getElementById("raamatud");
    vastus.innerHTML = raamatukogu.kuvaRaamatud();
}

function naitaKoguarv() {
    const vastus = document.getElementById("raamatud");
    vastus.innerHTML = raamatukogu.koguarv();
}

function naitaParast2000() {
    const vastus = document.getElementById("raamatud");
    vastus.innerHTML = raamatukogu.parast2000();
}

function lisaUusRaamat() {
    const pealkiri = document.getElementById("pealkiri").value;
    const autor = document.getElementById("autor").value;
    const aasta = Number(document.getElementById("aasta").value);
    const vastus = document.getElementById("lisaVastus");

    if (pealkiri === "" || autor === "" || aasta === 0) {
        vastus.innerHTML = "Täida kõik väljad!";
        return;
    }
    vastus.innerHTML = raamatukogu.lisaRaamat(pealkiri, autor, aasta);
    naitaRaamatud();
}

function otsiAutori() {
    const autor = document.getElementById("otsiAutor").value;
    const vastus = document.getElementById("otsiVastus");
    vastus.innerHTML = raamatukogu.otsiAutor(autor);
}
