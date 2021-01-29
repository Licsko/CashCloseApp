// HAZA ADOTT ÖSSZEG BEVITELE, ÉS HOZZÁADÁSA A TÁBLÁZATBA
let hazaadottResult = document.querySelectorAll('#hazaadott-col');
let hazaadottButton = document.querySelector('.hazaadott-button');
let hazaadott;
hazaadottButton.addEventListener('click', function() {
    hazaadott = document.querySelector('#hazaadott-input').value;
    hazaadott = Number(hazaadott);
    hazaadottResult[0].innerHTML = `🏠${Number(hazaadott).toLocaleString('de-DE')},-`
    hazaadottResult[1].innerHTML = `${Number(hazaadott).toLocaleString('de-DE')},-`
})

// UTOLSÓ OSZLOP CELLÁI
const cols = document.querySelectorAll('td:last-of-type');
// UTOLSÓ SOR UTOLSÓ CELLÁJA
const colSum = document.querySelector('tr:last-of-type td:last-of-type');

let cimletek = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5];
const equalButtons = document.querySelectorAll('.cimlet-equal');

const sumTotalButton = document.querySelector('.sumTotal-equal');

let sumNumber = [0,0,0,0,0,0,0,0,0,0,0,0];
let summedNumbers = 0;
let number;
for (let i = 0; i < cimletek.length; i++) {
    equalButtons[i].addEventListener('click', function() {
        let count = document.querySelectorAll('.money');
        sumNumber[i] = Number(count[i].value) * cimletek[i];
        
        cols[i+1].innerHTML = `${sumNumber[i].toLocaleString('de-DE')},-`;

    });

    sumTotalButton.addEventListener('click', function() {
        summedNumbers = summedNumbers + sumNumber[i];
        const summedNumbersRESULT = document.querySelector('#summary-table tr:nth-of-type(1) td:nth-of-type(2)');
        if (!hazaadott) {
            number = summedNumbers;
            colSum.innerHTML = `${number.toLocaleString('de-DE')},-`;
            summedNumbersRESULT.innerHTML = `${number.toLocaleString('de-DE')},-`;
        } else {         
            number = hazaadott + summedNumbers;   
            colSum.innerHTML = `${number.toLocaleString('de-DE')},-`;
            summedNumbersRESULT.innerHTML = `${number.toLocaleString('de-DE')},-`;
        }
    });
}


let inputs = document.querySelectorAll('input');
for (let j = 0; j < inputs.length; j++) {
    inputs[j].addEventListener('click', function() {
        inputs[j].value = "";
    })
}

let osszPenz = 0;
let inputsForSummary = document.querySelectorAll('.summary-inputs');
let resultsForSummary = document.querySelectorAll('.results-for-summary');
let datasToTableBUTTON = document.querySelector('#data-to-table-BUTTON');

let terminalResult = document.querySelector('#summary-table tr:nth-of-type(2) td:nth-of-type(2)');
const checkoutAndTerminalRESULT = document.querySelector('#summary-table tr:nth-of-type(3) td:nth-of-type(2)');
const nyiPRESULT = document.querySelector('#summary-table tr:nth-of-type(4) td:nth-of-type(2)');
const kasszaBevetelRESULT = document.querySelector('#summary-table tr:nth-of-type(5) td:nth-of-type(2)');
const penztarBevetelRESULT = document.querySelector('#summary-table tr:nth-of-type(6) td:nth-of-type(2)');
const elteresRESULT = document.querySelector('#summary-table tr:nth-of-type(7) td:nth-of-type(2)');
let masnapiNyito;
const masnapiNyitoShow = document.querySelector('#tomorrow-open-col');
let nyiPKeplet;
let kasszaBevetelKeplet;
let elteresKeplet;

datasToTableBUTTON.addEventListener('click', function() {
    for (let k = 0; k < inputsForSummary.length; k++) {
        resultsForSummary[k].innerHTML = `${Number(inputsForSummary[k].value).toLocaleString('de-DE')},-`;
    }
    osszPenz = osszPenz + number;
    masnapiNyito = osszPenz - hazaadott;
    nyiPCalc();
    terminalResult.innerHTML = `${Number(inputsForSummary[1].value).toLocaleString('de-DE')},-`;
    checkoutAndTerminalSum = osszPenz + Number(inputsForSummary[1].value);
    checkoutAndTerminalRESULT.innerHTML = `${Number(checkoutAndTerminalSum).toLocaleString('de-DE')},-`;
    masnapiNyitoShow.innerHTML = `${Number(masnapiNyito).toLocaleString('de-DE')},-`;
    calcKasszaBevetel();
    zaroallasKiirasa();
    elteres();
});

function nyiPCalc() {
    let nyiP = inputsForSummary[inputsForSummary.length-1].value;
    let gongyoleg = inputsForSummary[2].value;
    let aruvasarlas = inputsForSummary[3].value;
    nyiPKeplet = nyiP - aruvasarlas - gongyoleg;
    return nyiPRESULT.innerHTML = `${Number(nyiPKeplet).toLocaleString('de-DE')},-`;
}


function calcKasszaBevetel() {
    let checkoutAndTerminalSum = osszPenz + Number(inputsForSummary[1].value);
    kasszaBevetelKeplet = Number(checkoutAndTerminalSum) - Number(nyiPKeplet);
    console.log(kasszaBevetelKeplet);
    kasszaBevetelRESULT.innerHTML = `${Number(kasszaBevetelKeplet).toLocaleString('de-DE')},-`
}

function zaroallasKiirasa() {
    penztarBevetelRESULT.innerHTML = `${Number(inputsForSummary[0].value).toLocaleString('de-DE')},-`
}

function elteres() {
    elteresKeplet = Number(kasszaBevetelKeplet) - Number(inputsForSummary[0].value);
    elteresRESULT.innerHTML = `${(elteresKeplet.toLocaleString('de-DE'))},-`;
}