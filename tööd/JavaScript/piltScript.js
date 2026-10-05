// juhuslik pilt - mida võtakse massiivist
function juhuslikPilt() {
    //massiiv pildifailidest
    pildid=[
        '../images/smile.png',
        '../images/neutral.png',
        '../images/lill.png',
        '../images/kurb.png'
    ];
    const randomPilt=document.getElementById('randomPilt');

    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    //Math.floor - ümardab täisarvuni
    //Math.random - juhuslik arv

    randomPilt.src=pilt;
}
function selectValik(){
    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if(randomPilt.getAttribute('src')==valik.value){
        vastus.innerHTML="Õige!";
        vastus.style.color="green";
    }
    else{
        vastus.innerHTML="Vale!";
        vastus.style.color="red";
    }

}
//radio valik
function raadioValik() {
    let piltValik = document.getElementsByName('piltValik'); //mitu elemendi ühe nimega
    let valitudPilt = document.getElementById('valitudPilt');

    for(let i=0;i<piltValik.length;i++){
        if(piltValik[i].checked){
            valitudPilt.scr=piltValik[i].value;
        }
        else {
            // alert('tee oma valiku');
        }


    }
}