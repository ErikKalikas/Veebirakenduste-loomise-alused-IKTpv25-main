function jookideValik() {//Joogi kalkulaator

    let vastus2 = document.getElementById("vastus2");
    let joogiValik = document.getElementById("joogiValik");
    let kogus = document.getElementById("kogus");
    let vastusepilt2 = document.getElementById("vastusepilt2");

    const kohv = 1.50;
    const cola = 2.20;
    const fanta = 2.00;

    if (joogiValik.selectedIndex === 1) {
        vastus2.innerHTML = kogus.value + ' Kohvi hind on ' + (kogus.value * kohv) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "kalkulaatoriImages/kohv.jpg";
    }

    else if (joogiValik.selectedIndex === 2) {
        vastus2.innerHTML = kogus.value + ' Vesi on tasuta!';
        vastus2.style.color = "green";
        vastusepilt2.src = "kalkulaatoriImages/vesi.jpg";
    }

    else if (joogiValik.selectedIndex === 3) {
        vastus2.innerHTML = kogus.value + ' Coca-Cola hind on ' + (kogus.value * cola) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "kalkulaatoriImages/cola.jpg";
    }

    else if (joogiValik.selectedIndex === 4) {
        vastus2.innerHTML = kogus.value + ' Fanta hind on ' + (kogus.value * fanta) + ' €';
        vastus2.style.color = "green";
        vastusepilt2.src = "kalkulaatoriImages/fanta.jpg";
    }
}
