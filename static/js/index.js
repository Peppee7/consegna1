let c = 0
let media

let ans1 = prompt("1. Come si traduce 'ciao' in inglese?")
while(ans1 === null) {
    ans1 = prompt("1. Come si traduce 'ciao' in inglese?")
}

ans1 = ans1.toLowerCase()
ans1 = ans1.trim()

if(ans1 === "hello") {
    c++
} else {
    alert("La risposta corretta era: hello")
}

let ans2 = prompt("2. Di che colore era il cavallo bianco di Napoleone?")
while(ans2 === null) {
    ans2 = prompt("2. Di che colore era il cavallo bianco di Napoleone?")
}
ans2 = ans2.toLowerCase()
ans2 = ans2.trim()

if(ans2 === "bianco") {
    c++
} else {
    alert("La risposta corretta era: bianco")
}

let ans3 = prompt("3. In che città si trova il Colosseo?")
while(ans3 === null) {
    ans3 = prompt("3. In che città si trova il Colosseo?")
}
ans3 = ans3.toLowerCase()
ans3 = ans3.trim()

if(ans3 === "roma") {
    c++
} else {
    alert("La risposta corretta era: roma")
}

let ans4 = prompt("4. In che città si trova la Torre Eiffel?")
while(ans4 === null) {
    ans4 = prompt("4. In che città si trova la Torre Eiffel?")
}
ans4 = ans4.toLowerCase()
ans4 = ans4.trim()

if(ans4 === "parigi") {
    c++
} else {
    alert("La risposta corretta era: parigi")
}

let ans5 = prompt("5. Qual è il club calcistico più forte d'Italia?")
while(ans5 === null) {
    ans5 = prompt("5. Qual è il club calcistico più forte d'Italia?")
}
ans5 = ans5.toLowerCase()
ans5 = ans5.trim()

if(ans5 === "juventus") {
    c++
} else {
    alert("La risposta corretta era: juventus")
}

let ans6 = prompt("6. Chi è l'attuale presidente della repubblica?")
while(ans6 === null) {
    ans6 = prompt("6. Chi è l'attuale presidente della repubblica?")
}
ans6 = ans6.toLowerCase()
ans6 = ans6.trim()

if(ans6 === "mattarella") {
    c++
} else {
    alert("La risposta corretta era: mattarella")
}

let ans7 = prompt("7. Chi vinse il mondiale 2006?")
while(ans7 === null) {
    ans7 = prompt("7. Chi vinse il mondiale 2006?")
}
ans7 = ans7.toLowerCase()
ans7 = ans7.trim()

if(ans7 === "italia") {
    c++
} else {
    alert("La risposta corretta era: italia")
}

media = c*100/7
console.log("Risposte corrette: " + c + " --> " + Math.floor(media) + "%")