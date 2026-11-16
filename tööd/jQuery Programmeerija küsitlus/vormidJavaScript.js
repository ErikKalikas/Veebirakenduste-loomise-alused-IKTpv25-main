
function checkboxVastusVorimd() {//1. Milliseid programmeerimiskeeli sa tead?

    let vastus = document.getElementById("vastus");

    let cSharp = document.getElementById("cSharp");
    let SQL = document.getElementById("SQL");
    let HTML = document.getElementById("HTML");
    let css = document.getElementById("css");

    let valik2 = "";

    if (cSharp.checked) {
        valik2 += cSharp.value + "<br>";
    }

    if (SQL.checked) {
        valik2 += SQL.value + "<br>";
    }

    if (HTML.checked) {
        valik2 += HTML.value + "<br>";
    }

    if (css.checked) {
        valik2 += css.value + "<br>";
    }

    if (valik2 === "") {
        valik2 = "Tee oma valik!";
    }

    vastus.innerHTML = "Sinu valitud programmeerimiskeeled :<br>" + valik2;

    vastus.style.backgroundColor = "lightgreen";

    return valik2;
}


function textvastus() {//2.Mida arvad programmeerimise õppimisest?

    let experience = document.getElementById("experience");
    let vastus2 = document.getElementById("vastus2");

    if (experience.value === "") {
        vastus2.innerHTML = "Kirjuta oma arvamus!";
    } else {
        vastus2.innerHTML = "Sinu arvamus: " + experience.value;
    }

    vastus2.style.backgroundColor = "lightgreen";
}

function numbertvastus() {//3. Mitu tundi nädalas tegeled programmeerimisega?

    let tund = document.getElementById("tund");
    let vastus3 = document.getElementById("vastus3");

    if (tund.value === "") {
        vastus3.innerHTML = "Kirjuta oma arvamus!";
    } else {
        vastus3.innerHTML = 'Tegeled programmeerimisega '+ tund.value +' tundi nädalas.';
    }

    vastus3.style.backgroundColor = "lightgreen";
}

function meldibProgrameerimine() {//4. Kas sulle meeldib programmeerida?
    let vastus4 = document.getElementById('vastus4');
    let ei = document.getElementById('ei');
    let jah = document.getElementById('jah');


    let valik3 = "";

    if (jah.checked) {
        valik3 += jah.value + ', <br>' + 'Programmeerimine meeldib!';
    }

    if (ei.checked) {
        valik3 += ei.value + ', <br>' + 'Programmeerimine ei meeldi!';
    }

    if (valik3 == "") {
        valik3 = "tee oma valik!";
    }

    vastus4.innerHTML =  valik3;
    vastus4.style.backgroundColor = "lightgreen";

    return valik3;

}

function textvastus2() {//5. Milliseid programmeerimisega seotud tööriistu oskad nimetada?

    let text2 = document.getElementById("text2");
    let vastus5 = document.getElementById("vastus5");

    if (text2.value === "") {
        vastus5.innerHTML = "Kirjuta oma tööriistad!";
    } else {
        vastus5.innerHTML = "Sinu nimetatud tööriistad: " + text2.value;
    }

    vastus5.style.backgroundColor = "lightgreen";
}

function saadaVastused() {//6. Millist programmeerimiskeelt sooviksid kõige rohkem õppida?

    let kokkuvoteSisu = document.getElementById("kokkuvoteSisu");

    let cSharp = document.getElementById("cSharp");
    let SQL = document.getElementById("SQL");
    let HTML = document.getElementById("HTML");
    let css = document.getElementById("css");

    let keeled = "";

    if (cSharp.checked) {
        keeled += cSharp.value + "<br>";
    }

    if (SQL.checked) {
        keeled += SQL.value + "<br>";
    }

    if (HTML.checked) {
        keeled += HTML.value + "<br>";
    }

    if (css.checked) {
        keeled += css.value + "<br>";
    }

    if (keeled === "") {
        keeled = "Valik puudub";
    }


    let experience = document.getElementById("experience").value;

    if (experience === "") {
        experience = "Vastus puudub";
    }


    let tund = document.getElementById("tund").value;

    if (tund === "") {
        tund = "Vastus puudub";
    }


    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let radio = "";

    if (jah.checked) {
        radio = jah.value;
    }

    if (ei.checked) {
        radio = ei.value;
    }

    if (radio === "") {
        radio = "Vastus puudub";
    }


    let text2 = document.getElementById("text2").value;

    if (text2 === "") {
        text2 = "Vastus puudub";
    }


    let meeldiv = document.getElementById("meeldiv").value;

    if (meeldiv === "") {
        meeldiv = "Vastus puudub";
    }


    kokkuvoteSisu.innerHTML = //7. Lisa küsimustiku lõppu nupp „Saada“.
        "Milliseid programmeerimiskeeli sa tead:<br>" +
        keeled +

        "<br>Mida arvad programmeerimise õppimisest:<br>" +
        experience +

        "<br>Mitu tundi nädalas tegeled programmeerimisega:<br>" +
        tund +

        "<br>Kas sulle meeldib programmeerida:<br>" +
        radio +

        "<br>Milliseid programmeerimisega seotud tööriistu oskad nimetada:<br>" +
        text2 +

        "<br>Millist programmeerimiskeelt sooviksid kõige rohkem õppida:<br>" +
        meeldiv;

    document.getElementById("kokkuvote").style.display = "block";
}


function puhastaVorm() {//8. Lisa küsimustiku lõppu nupp „Puhasta“.

    document.getElementById("experience").value = "";
    document.getElementById("tund").value = "";
    document.getElementById("text2").value = "";

    document.getElementById("cSharp").checked = false;
    document.getElementById("SQL").checked = false;
    document.getElementById("HTML").checked = false;
    document.getElementById("css").checked = false;

    document.getElementById("jah").checked = false;
    document.getElementById("ei").checked = false;

    document.getElementById("meeldiv").value = "";

    document.getElementById("vastus").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("fd").innerHTML = "";

    document.getElementById("kokkuvoteSisu").innerHTML = "";

    document.getElementById("kokkuvote").style.display = "none";
}

// jQuery vormi valideerimine
// Konspekt: https://metshein.com/courses/jquery/lessons/jquery-vormi-valideerimine-tekstivaljad/
// jQuery dokumentatsioon: https://api.jquery.com/

$(document).ready(function () {

    $('.viga').hide(); // alguses peidame kõik veateated

    // vajutame nuppu "Saada"
    $('#saada').click(function () {
        let korras = true; // kui leiame vea, muutub see false-ks

        // 1. checkbox: vähemalt üks keel peab olema valitud
        if ($('input[name="keel"]:checked').length < 1) {
            naitaViga('#programkeel fieldset', '#viga1');
            korras = false;
        } else {
            peidaViga('#programkeel fieldset', '#viga1');
        }

        // 2. tekstiväli ei tohi olla tühi
        if ($('#experience').val().trim().length < 1) {
            naitaViga('#experience', '#viga2');
            korras = false;
        } else {
            peidaViga('#experience', '#viga2');
        }

        // 3. tunnid: ei tohi olla tühi ja peab olema 0 kuni 168
        let tunnid = parseInt($('#tund').val()); // teisendab teksti täisarvuks
        if (isNaN(tunnid) || tunnid < 0 || tunnid > 168) {
            naitaViga('#tund', '#viga3');
            korras = false;
        } else {
            peidaViga('#tund', '#viga3');
        }

        // 4. raadionupp: jah või ei peab olema valitud
        if ($('input[name="programKusimus"]:checked').length < 1) {
            naitaViga($('#jah').closest('td'), '#viga4');
            korras = false;
        } else {
            peidaViga($('#jah').closest('td'), '#viga4');
        }

        // 5. tekstiväli ei tohi olla tühi
        if ($('#text2').val().trim().length < 1) {
            naitaViga('#text2', '#viga5');
            korras = false;
        } else {
            peidaViga('#text2', '#viga5');
        }

        // 6. rippmenüüst peab olema keel valitud
        if ($('#meeldiv').val() === '') {
            naitaViga('#meeldiv', '#viga6');
            korras = false;
        } else {
            peidaViga('#meeldiv', '#viga6');
        }

        // kokkuvõte tuleb ainult siis, kui vigu ei ole
        if (korras) {
            $('#yldViga').hide();
            saadaVastused();
        } else {
            $('#yldViga').fadeIn(400);
            $('#kokkuvoteSisu').html('');
        }
    });

    // nupp "Puhasta" peidab ka veateated
    $('#puhasta').click(function () {
        $('.viga').hide();
        $('.vigane').removeClass('vigane');
    });
});

// näitab veateadet ja teeb välja punaseks
function naitaViga(vali, viga) {
    $(vali).addClass('vigane');
    $(viga).fadeIn(400);
}

// peidab veateate ja võtab punase värvi ära
function peidaViga(vali, viga) {
    $(vali).removeClass('vigane');
    $(viga).hide();
}
 