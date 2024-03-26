//Gestione livelli e schermate
let livello = 0;

//Schermata Home
let font1; //font testo
let font2; //font intro
let giocatoreHome; //personaggio della home che si muove
let velPersonaggioHome = 5; //velocità personaggio schermata home
let imgGiocatoreHome; //gif giocatore nella home
let imgLupoHome; //Immagine lupo home
let musicaHome;//musica di sottofondo
let lettere = []; // Array contenente le lettere
let yPos; // Posizione verticale iniziale del testo
let speed = 1; // Velocità di caduta del testo
let imgGiocatore;

//Generali
let rectWidth = 500; // Larghezza del rettangolo //di qualsiasi livello 
let rectHeight = 120; // Altezza del rettangolo // qualsiasi livello 
let ultimoLivello; //Ultimo livello visitato
let interval = 0; //Gestisce il tempo in cui mostrare le schermate (gameOver, )
let imgGiocatoreFermoDestra; //Immagine hog fermo destra


//Schermata livelli
let rettangoloClick = -1; // Indice del rettangolo cliccato, -1 se nessuno è stato cliccato
let nLivelli = 3; // Numero di rettangoli = numero livelli
let totalHeight = nLivelli * (rectHeight + 50); // Altezza totale dei rettangoli, includendo spazi vuoti
let startY; // Posizione Y in modo che i rettangoli siano centrati verticalmente
let testoScorr = "Cerca di sopravvivere il piu' possibile! I livelli vanno dal più difficile al più facile, scegli con attenzione!"; //Testo informazioni scorrimento
let x; // Posizione iniziale del testo (partendo dalla destra)
let y; // Posizione verticale del testo
let velocitaScorrimento = 3; //Velocità scorrimento 
let imgHogLivelli;
let imgLarryLivelli;

//Game over
let imgGameOver;
let musicaGameOver;


// Spazio livello1
let timerId; // Variabile per memorizzare l'ID del timer
let giocatoreLiv1; //Giocatore
let cerchi = []; //Array che contiene le palline
let intervalloPalline; //Intervallo che gestisce dopo quanto tempo appaiono nuove palline 
let imgAsteroide; //immagine asteroide
let partenzaX = -30; //x di partenza degli asteroidi
let imgHogSpazio; //Personaggio immagine
let imgSfondoLv1; // immagine sfondo livello 1
let x1 = 0; //X iniziale dello sfondo che si muove
let x2; //X finale
let velScorrSfondo = 2; //Velocità di scorrimento
let musicaLivello1;
let tempoInizio; //Segnare il tempo in cui si gioca
let punteggioMigliore1 = 0; //Punteggio migliore
let tempoTrascorso = 0; //Tempo in cui si è vivi
let punteggio = 0; //Punteggio

//Livello 2
let primo = false;
let punteggioMigliore2 = 0; //Punteggio migliore
let punteggio2 = 0;  //Punteggio
let musicaLivello2win; //Musica vittoria
let musicaLiv2;
let imgSfondoLiv2;
let giocatoreLiv2; //Creo giocatore
let imgLupo;
let imgFine;
let lupo; //Creo avversario
let cerchioX, cerchioY; // Posizione del cerchio
let diametroCerchio = 30; // Diametro del cerchio
let tempoVisualizzazione = 1000; // 1 secondo in cui si vede il cerchio
let tempoInizioVisualizzazione; // Tempo iniziale di visualizzazione
let cerchioCliccato = false; // Flag per controllare se il cerchio è stato cliccato

//Livello 3 Race
let velocitaScheletri = 5.5; // Velocità iniziale degli scheletri
let velocitaNuvole;  // Velocità iniziale delle nuvole
let velocitaUccelli = 5.5; //Velocità uccelli
let musicaLivello3;
let scheletri = []; //Nemici scheletri
let punteggioMigliore3 = 0 //Punteggio migliore
let giocatoreLiv3; //Giocatore
let nuvole = []; // Array per tenere traccia delle nuvole
let uccelli = [];// Array per tenere traccia uccelli
let ultimoTempoNuvola = 0; // Variabile per tenere traccia dell'ultimo tempo in cui è apparsa una nuvola
let intervalloNuvole = 3000; // Intervallo di tempo tra l'apparizione di nuvole
let punteggio3 = 0;  //Punteggio
let tempoInizio3; //Tempo 
let tempoTrascorso3 = 0; //In cui si è vivi
let primoScheletroCreato = false; // Variabile per controllare se il primo scheletro è stato creato
let jump = false; //Per vedere se il giocatore ha saltato
let ySpeed = 0; //Velocità di salto
let imgLarry;
let imgUccello;
let puoSaltare = false; //Massimo due salti di fila
let ultimoTempoUccelli = 0; //Segnare quando è stato generato
let intervalloUccelli = 3000; // Intervallo in millisecondi per aggiungere nuovi uccelli
let musicaLiv3;

//Schermata Pausa
let imgHogPausa;
let imgSgherroPausa;


function preload() {
  //caricare immagini giocatore, oggetti e nemici
  imgGiocatore = loadImage('./img/hog.gif');
  imgGiocatoreFermoDestra = loadImage('./img/hogFermoDestra.gif');
  imgGiocatoreHome = loadImage('./img/hogHome.png');
  imgUccello = loadImage('./img/bird.gif');
  imgLupo = loadImage('./img/wolf.gif');
  imgFine = loadImage('./img/fine.png');
  imgLupoHome = loadImage('./img/lupoHome.png');
  imgHogLivelli = loadImage('./img/livelliHog.png');
  imgLarryLivelli = loadImage('./img/larryLivelli.png');
  imgAsteroide = loadImage('./img/asteroide.png');
  imgHogSpazio = loadImage('./img/hogSpace.png');
  imgSfondoLv1 = loadImage('./img/spazio.png');
  imgLarry = loadImage('./img/larry.gif');
  imgGameOver = loadImage('./img/hogTriste.gif');
  imgSfondoLiv2 = loadImage('./img/sfondoLiv2.jpg');
  imgHogPausa = loadImage('./img/pausaHog.png');
  imgSgherroPausa = loadImage('./img/eagle.png');
  //carico font per i testi
  font1 = loadFont('./font/minecraft/Minecraft.ttf');
  font2 = loadFont('./font/intro/intro.ttf');
  //carico suono
  musicaHome = loadSound('./sound/homeSound.mp3');
  musicaLivello1 = loadSound('./sound/Tycho.mp3');
  musicaLivello2win = loadSound('./sound/vittoria.mp3');
  musicaLiv2 = loadSound('./sound/mario.mp3');
  musicaLiv3 = loadSound('./sound/hog.mp3');
  musicaGameOver = loadSound('./sound/gameOver.mp3');
}


function setup() {

  createCanvas(innerWidth - 30, innerHeight - 30); //creo lo schermo di gioco
  frameRate(60);
  textAlign(CENTER);

  //Livello 1
  x2 = width;
  x = width + 2000;
  y = height / 2 + 450;
  yPos = height / 2 + 360

  giocatoreHome = new Giocatore(150, 150, windowHeight - 350); //Creo giocatore per la home
  giocatoreLiv2 = new Giocatore(120, 120, windowHeight - 350); //Creo giocatore livello 2
  lupo = new Giocatore(140, 160, windowHeight - 450); //Creo lupo avversario livello 2
  giocatoreLiv1 = new GiocatoreSpazioLv1(60, 60); //Creo il giocatore per il livello  1
  giocatoreLiv3 = new Giocatore(90, 90, windowHeight - 290); //Creo giocatore livello 3


  giocatoreLiv2.x = windowWidth / 2 - 840; // Posizione del giocatore nel livello 2

  //Livello Home
  // Aggiungi ogni lettera del testo nell'array
  let textString = "Benvenuto/a, sarai pronto/a ad affrontare tutte le sfide proposte? Vedremo se avrai la stoffa giusta!";
  for (let i = 0; i < textString.length; i++) {
    lettere.push({
      char: textString.charAt(i),
      yPos: yPos,
      speed: random(1, 3)
    });
  }

  //Menu livelli
  startY = (windowHeight - totalHeight) / 2; // Posizione Y in modo che i rettangoli siano centrati verticalmente nel menu dei livelli
}

function draw() {
  velocitaNuvole = random(1, 5); //Velocità casuale nuvole

  if (livello == 0) {
    //Livello Start
    menuStart();
  }

  else if (livello == 1) {
    //Livelli
    menuLivelli();
  }

  else if (livello == 2) {
    //Livello Asteoridi
    livello1();
  }

  else if (livello == 3) {
    //Corsa sprint
    livello2();
  }

  else if (livello == 4) {
    //Livello Ostacoli
    livello3();
  }

  else if (livello == 5) {
    //Schermata gameOver
    gameOver();
  }

  else if (livello == 6) {
    //Schermata Pausa, restart e resume
    menuPausa();
  }
  else if (livello == 7) {
    //In caso di vittoria nel livello 3(2)
    vittoria();
  }
  else if(livello==8){ //Istruzioni livello 1 asteroidi
    istruzioni1();
  }
  else if(livello==9){ //Istruzioni livello 1 gara
    istruzioni2();
  }
  else if(livello==10){ //Istruzioni livello 1 ostacoli
    istruzioni3();
  }
}


function keyPressed() {
  if (livello == 2 || livello == 3 || livello == 4) { // In tutti i livelli per mettere in pausa schiaccio esc
    if (keyCode === ESCAPE) {
      livello = 6; //Schermata pausa
    }
  }
  if (livello == 4) { // Nel livello 4 (3 gioco) se schiaccio spazio o la freccia in su
    if (key === ' ' || keyCode === UP_ARROW) {
      if (giocatoreLiv3.numeroSalti < 2) { // Controlla che il giocatore non abbia già effettuato 2 salti
        ySpeed = -7.5; // Velocità di salto
        jump = true; // Imposta jump a true
        giocatoreLiv3.numeroSalti++; // Incrementa il numero di salti del giocatore
        if (giocatoreLiv3.numeroSalti <= 2) puoSaltare = true; //Se ha fatto più di due salti puoSaltare= false
        else puoSaltare = false;
      }
    }
  }
}


// Funzione per gestire il click del mouse
function mouseClicked() {

  //Il mouse nel livello 0
  if (livello == 0) {
    // Controlla se il mouse è sopra il rettangolo quando viene cliccato
    let rectX = (windowWidth - rectWidth) / 2; // Posizione X del rettangolo
    let rectY = (windowHeight - rectHeight) / 2; // Posizione Y del rettangolo
    if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      livello = 1; //Imposto il livello a 1
    }
  }
  //Il mouse nella schermata dei livelli
  else if (livello == 1) {
    let rectX = (windowWidth - rectWidth) / 2; // Posizione X del rettangolo
    for (let i = 0; i < nLivelli; i++) {
      let rectY = startY + i * (rectHeight + 50); // Calcola la posizione Y per il rettangolo corrente
      if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
        // Se il click del mouse è avvenuto all'interno del rettangolo i-esimo, memorizza l'indice del rettangolo cliccato
        rettangoloClick = i;
        switch (rettangoloClick) { // in base al valore di i imposto il livello delle istruzioni
          case 0:
            livello = 8;
            break;
          case 1:
            livello = 9;
            break;
          case 2:
            livello = 10;
            break;
        }
      }
    }
  }
  else if (livello == 3) {
    // Se il mouse è cliccato sul cerchio
    if (
      mouseX > cerchioX - diametroCerchio / 2 &&
      mouseX < cerchioX + diametroCerchio / 2 &&
      mouseY > cerchioY - diametroCerchio / 2 &&
      mouseY < cerchioY + diametroCerchio / 2
    ) {
      // Imposta la posizione del cerchio al di fuori dello schermo
      cerchioX = width + 100;
      cerchioY = height - 100;
      cerchioCliccato = true; // Setta il flag a true se il cerchio è stato cliccato
      //se il cerchio è stato cliccato incrementa la x del mio giocatore
      giocatoreLiv2.x += 70;
      giocatoreLiv2.mostraMovimentoDestra();
    }
  }
  //Il mouse nella schermata di pausa
  else if (livello == 6) {
    let rectX = (windowWidth - rectWidth) / 2; // Posizione X del rettangolo
    for (let i = 0; i < nLivelli; i++) {
      let rectY = startY + i * (rectHeight + 100); // Calcola la posizione Y per il rettangolo corrente
      if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
        // Se il click del mouse è avvenuto all'interno del rettangolo i-esimo, memorizza l'indice del rettangolo cliccato
        rettangoloClick = i;
        switch (rettangoloClick) { // in base al valore di i imposto il livello
          case 0: //Se schiaccio resume riprendo da dove mi sono interrotto
            livello = ultimoLivello;
            break;
          case 1: //Se schiaccio restart resetto tutto e riprendo dal livello corrente
            resetAll()
            livello = ultimoLivello;
            break;
          case 2: //Se schiaccia esci resetto tutto e torno all'inizio
            resetAll();
            break;
        }
      }
    }
  }

}

// Schermata di introduzione al gioco
function menuStart() {

  ultimoLivello = 0;

  if (!musicaHome.isPlaying()) { //Parte la musica
    musicaHome.loop();
  }

  background(0); // Sfondo nero
  // Ripristina il cursore predefinito
  cursor();
  musicaGameOver.stop(); //Fermo la musica game over

  // Rettangolo start to play
  let rectX = (windowWidth - rectWidth) / 2; // Posizione X del rettangolo
  let rectY = (windowHeight - rectHeight) / 2; // Posizione Y del rettangolo
  let borderRadius = 20;

  textFont(font1);
  fill(255); //Coloro di bianco
  textSize(70); //Grandezza testo
  text("A HOG RIDER'S' LIFE", windowWidth / 2, windowHeight / 6);
  textSize(40);
  text("BY DAVIDE DELOGU", windowWidth / 2, windowHeight / 4)

  // Disegna il rettangolo
  fill(179, 40, 179); // Colore rettangolo
  stroke(255); // Colore del contorno bianco
  strokeWeight(2); // Spessore del contorno
  rectMode(CORNER); // Imposta il modo di disegnare il rettangolo al vertice in alto a sinistra
  rect(rectX, rectY, rectWidth, rectHeight, borderRadius);
  // Testo da centrare nel rettangolo
  noStroke(); // Rimuove il contorno
  textSize(30); // Imposta la dimensione del testo
  textAlign(CENTER, CENTER); // Allinea il testo al centro
  fill(0); // Colore del testo bianco
  textFont(font1);
  text("Clicca qui per giocare", windowWidth / 2, windowHeight / 2); // Disegna il testo al centro del rettangolo

  stroke(255); // Colore della linea bianco
  strokeWeight(2); // Spessore della linea
  line(0, windowHeight - 200, windowWidth, windowHeight - 200); // Disegna una linea orizzontale che attraversa il centro del canvas

  // Movimento orizzontale
  giocatoreHome.x += velPersonaggioHome;
  giocatoreHome.mostraMovimentoDestra();
  // Se il giocatore esce dal canvas da destra
  if (giocatoreHome.x > windowWidth) {
    giocatoreHome.x = -100; // Riporta il giocatore alla posizione iniziale
  }

  //Testo introduzione
  fill(255);
  textSize(50);
  textFont(font2);
  // Disegna e aggiorna la posizione di ogni lettera
  for (let i = 0; i < lettere.length; i++) {
    let lettera = lettere[i];
    // Disegna la lettera
    text(lettera.char, windowWidth / lettere.length + + i * 20, lettera.yPos);
    // Aggiorna la posizione verticale
    lettera.yPos += lettera.speed;
    // Se la lettera raggiunge un'altezza desiderata, ferma il suo movimento
    if (lettera.yPos > windowHeight - 125) {
      lettera.speed = 0;
    }
  }
  //Immagini nella home
  image(imgGiocatoreHome, windowWidth / -22, windowHeight / 2 - 550, 850, 750);
  image(imgLupoHome, windowWidth - 750, windowHeight / 2 - 400, 700, 600);
}

function updateTextPosition() {
  // Aggiorna la posizione del testo
  x -= velocitaScorrimento;
  if (x < -textWidth(testoScorr)) {
    x = width + 2000;
  }
}


//Schermata a livelli
function menuLivelli() {
  ultimoLivello = 1;
  // Ripristina il cursore predefinito
  cursor();
  background('#2B4CA6');
  let borderRadius = 50;
  let rectX = (width - rectWidth) / 2; // Posizione X del rettangolo
  rectMode(CORNER); // Imposta il modo di disegnare il rettangolo al vertice in alto a sinistra
  for (let i = 0; i < nLivelli; i++) {
    let rectY = startY + i * (rectHeight + 50); // Calcola la posizione Y per il rettangolo corrente
    rect(rectX, rectY, rectWidth, rectHeight, borderRadius);
    // Testo da centrare nel rettangolo
    textSize(50); // Imposta la dimensione del testo
    textFont(font1);
    textAlign(CENTER, CENTER); // Allinea il testo al centro
    fill(0); // Reimposta il colore del riempimento a nero
    text(`LIVELLO ${i + 1}`, rectX + rectWidth / 2, rectY + rectHeight / 2); // Disegna il testo al centro del rettangolo
    fill(255);
  }

  fill(255);
  textFont(font2);
  textSize(100);
  // Disegna il testo
  text(testoScorr, x, y);
  // Aggiorna la posizione orizzontale del testo scorrevole (scorre da destra verso sinistra)
  x -= velocitaScorrimento;
  // Se il testo è completamente uscito dallo schermo, riportalo alla posizione iniziale
  if (x < -textWidth(testoScorr)) {
    x = 4450;
  }

  // Disegna l'immagine centrata verticalmente
  image(imgHogLivelli, windowWidth - 850, windowHeight / 950, 800, 950); // Utilizza le dimensioni desiderate per l'immagine
  image(imgLarryLivelli, windowWidth / 14, (windowHeight - 750) / 2, 500, 700);

  if (!musicaHome.isPlaying()) { //Continuo la musica 
    musicaHome.loop();
  }

}




function livello1() {

interval = 0;
  ultimoLivello = 8;

  // Inizio del livello, registra il tempo attuale
  if (!tempoInizio) {
    tempoInizio = millis();
  }

  // Metto la musica
  if (!musicaLivello1.isPlaying()) {
    musicaLivello1.loop();
  }

  // Disegna l'immagine dello sfondo in due parti
  image(imgSfondoLv1, x1, 0, width, height);
  image(imgSfondoLv1, x2, 0, width, height);
  // Muovi lo sfondo
  x1 -= velScorrSfondo;
  x2 -= velScorrSfondo;
  // Se lo sfondo si sposta completamente fuori schermo, riportalo indietro
  if (x1 <= -width) {
    x1 = width;
  }
  if (x2 <= -width) {
    x2 = width;
  }

  noCursor(); // Tolgo il cursore

  // Ferma la musica di background del menu principale
  musicaHome.stop();

  giocatoreLiv1.display(); // Mostro e faccio muovere il giocatore
  giocatoreLiv1.movimento();

  // Controllo se il timer è già attivo, se non lo è, lo avvio
  if (!timerId) {
    timerId = setInterval(aggiungiCerchi, 5000); // Aggiungi cerchi ogni 5 secondi
  }

  for (let i = 0; i < cerchi.length; i++) {
    cerchi[i].display();
    cerchi[i].movimento();
    // Controlla la collisione tra il giocatore e i cerchi
    if (trovaCollisione(giocatoreLiv1, cerchi[i])) {
      // Se c'è una collisione, il livello = 5 così vado al game over
      livello = 5;
    }
  }
  // Calcola il tempo trascorso e il punteggio
  tempoTrascorso = (millis() - tempoInizio) / 1000; // Tempo in secondi
  punteggio = 0 + Math.round(tempoTrascorso * 10); // Esempio di calcolo del punteggio

  // Aggiorna il punteggio migliore se il punteggio attuale è maggiore
  if (punteggio > punteggioMigliore1) {
    punteggioMigliore1 = punteggio;
  }

  // Mostra il punteggio e il punteggio migliore sullo schermo
  fill(255);
  textSize(54);
  text("Punteggio: " + punteggio, windowWidth / 8, 40);
  text("Punteggio Migliore: " + punteggioMigliore1, windowWidth / 8, 100);
}

// Funzione per aggiungere un numero specifico di cerchi
function aggiungiCerchi() {
  const minDistance = 100; // Distanza minima tra i cerchi
  for (let i = 0; i < 4; i++) { // Aggiungi tre cerchi ogni volta che la funzione viene chiamata
    let nuovaX, nuovaY;
    let isValidPosition = false;
    while (!isValidPosition) {
      // Genera la posizione y casuale all'interno del canvas
      nuovaY = random(height - 100);
      // Imposta la posizione x in modo che i cerchi entrino dalla sinistra
      nuovaX = -50; // Imposta una posizione appena fuori dal lato sinistro del canvas
      // Verifica la distanza tra il nuovo cerchio e i cerchi esistenti
      isValidPosition = true;
      for (let j = 0; j < cerchi.length; j++) {
        const distanza = dist(nuovaX, nuovaY, cerchi[j].x, cerchi[j].y);
        if (distanza < minDistance) {
          isValidPosition = false;
          break;
        }
      }
    }
    let xVel = random(3, 6); // Velocità x positiva (verso destra)
    let yVel = random(-6, 6); // Velocità y casuale
    cerchi.push(new Cerchi(nuovaX, nuovaY, xVel, yVel));
  }
}
// Funzione per controllare la collisione tra due oggetti
function trovaCollisione(obj1, obj2) {
  // Trova il punto nel rettangolo più vicino al centro del cerchio
  let puntoPiùVicinoX = clamp(obj2.x, obj1.x, obj1.x + obj1.sizex);
  let puntoPiùVicinoY = clamp(obj2.y, obj1.y, obj1.y + obj1.sizey);

  // Calcola la distanza euclidea tra il punto più vicino e il centro del cerchio
  let distanza = dist(puntoPiùVicinoX, puntoPiùVicinoY, obj2.x, obj2.y);

  // Se la distanza è minore o uguale al raggio del cerchio, c'è una collisione
  return distanza <= (obj2.diametro / 2);
}

// Funzione ausiliaria per limitare un valore tra un minimo e un massimo
function clamp(valore, minimo, massimo) {
  return Math.max(minimo, Math.min(valore, massimo));
}


// Funzione per gestire il Livello 2 del gioco
function livello2() {
  interval = 0;
  background(imgSfondoLiv2); //Immagine di sfondo
  if (!primo) {
    // genero il primo cerchio dopo 3 sec
    setTimeout(generaNuovoCerchio, 3000);
    primo=true;
  }
  if (!musicaLiv2.isPlaying()) { //Metto la musica
    musicaLiv2.loop();
  }


  if (giocatoreLiv2.x > windowWidth / 2 || lupo.x > windowWidth / 2) { //Quando un giocatore supera la metà appare il traguardo
    image(imgFine, width / 2 + 900, height / 2 + 200, 100, 150);
  }
  if (lupo.x > width / 2 + 950) { //Se vince il lupo passo al game over
    livello = 5;
  }
  else if (giocatoreLiv2.x > width / 2 + 950) { //Se vinco io passo alla schermata della vittoria
    livello = 7;
  }

  ultimoLivello = 9;
  giocatoreLiv2.mostraMovimentoDestra(); //Mostro i personaggi
  lupo.mostraLupo();

  // Controlla se è il momento di mostrare un nuovo cerchio
  if (millis() - tempoInizioVisualizzazione >= tempoVisualizzazione) {
    if (!cerchioCliccato) {
      //Se il cerchio non viene cliccato in tempo viene incrementata la posizione del lupo
      lupo.x += 70;
      lupo.mostraLupo();
    }
    generaNuovoCerchio();
    cerchioCliccato = false; // Resetta il flag quando appare un nuovo cerchio
  }

  stroke(0);
  strokeWeight(5);
  // Disegna il cerchio se è visibile
  if (millis() - tempoInizioVisualizzazione < tempoVisualizzazione) {
    fill(255, 0, 0);
    ellipse(cerchioX, cerchioY, diametroCerchio);
  }

  punteggio2 = giocatoreLiv2.x - lupo.x; //Punteggio è la distanza del mio giocatore dal lupo
  // Aggiorna il punteggio migliore se il punteggio attuale è maggiore
  if (punteggio2 > punteggioMigliore2) {
    punteggioMigliore2 = punteggio2;
  }

  // Mostra il punteggio e il punteggio migliore sullo schermo
  fill(255);
  textFont(font2);
  textSize(54);
  text("Punteggio: " + punteggio2, windowWidth / 8, 40);
  text("Punteggio Migliore: " + punteggioMigliore2, windowWidth / 8, 100);

  // Ferma la musica di background del menu principale
  musicaHome.stop();
}

function generaNuovoCerchio() {
  cerchioX = random(width); //x casuale
  cerchioY = random(height); //y casuale
  tempoInizioVisualizzazione = millis(); // Resetta il timer
}



function livello3() {
  interval = 0;
  // Metto la musica
  if (!musicaLiv3.isPlaying()) {
    musicaLiv3.loop();
  }

  // Inizio del livello, registra il tempo attuale
  if (!tempoInizio3) {
    tempoInizio3 = millis();
  }
  ultimoLivello = 10;

  background(0);
  stroke(255);
  strokeWeight(2);
  line(0, windowHeight - 200, windowWidth, windowHeight - 200); //Linea

  // Luna
  noStroke();
  fill(230, 230, 180);
  ellipse(windowWidth - 240, 150, 210, 210); // Posiziona l'ellisse in alto a destra

  // Controllo se il timer è già attivo per aggiungere scheletri, se non lo è, lo avvio
  if (!timerId) {
    timerId = setInterval(aggiungiScheletro, random(1000, 2000)); // Aggiungi scheletri dopo un tempo casuale tra 1 e 4 secondi
  }

  for (let i = scheletri.length - 1; i >= 0; i--) {
    scheletri[i].display();
    scheletri[i].movimento();

    // Rimuovi lo scheletro se esce dallo schermo
    if (scheletri[i].x + scheletri[i].imgWidth < 0) {
      scheletri.splice(i, 1);
    }
  }

  // Controllo se è il momento di aggiungere una nuova nuvola
  if (millis() - ultimoTempoNuvola > intervalloNuvole) {
    aggiungiNuvola();
    ultimoTempoNuvola = millis(); // Aggiorna l'ultimo tempo in cui è stata aggiunta una nuvola
  }

  // Controllo se è il momento di aggiungere nuovi uccelli
  if (millis() - ultimoTempoUccelli > intervalloUccelli) {
    aggiungiUccelli();
    ultimoTempoUccelli = millis(); // Aggiorna l'ultimo tempo in cui sono stati aggiunti gli uccelli
  }

  // Mostra e muovi le nuvole
  for (let i = nuvole.length - 1; i >= 0; i--) {
    nuvole[i].display();
    nuvole[i].movimento();
  }
  // Mostra e muovi gli uccelli
  for (let i = uccelli.length - 1; i >= 0; i--) {
    uccelli[i].display();
    uccelli[i].movimento();
  }

  // Controllo del tempo per la creazione del primo scheletro
  if (!primoScheletroCreato && millis() - tempoInizio > 3000) {
    aggiungiScheletro();
    primoScheletroCreato = true;
  }

  // Mostra il giocatoreLiv3
  giocatoreLiv3.salto();

  // Calcola il tempo trascorso e il punteggio
  tempoTrascorso3 = (millis() - tempoInizio3) / 1000; // Tempo in secondi
  punteggio3 = 0 + Math.round(tempoTrascorso3 * 10); // Esempio di calcolo del punteggio

  // Aggiorna il punteggio migliore se il punteggio attuale è maggiore
  if (punteggio3 > punteggioMigliore3) {
    punteggioMigliore3 = punteggio3;
  }

  // Mostra il punteggio e il punteggio migliore sullo schermo
  fill(255);
  textSize(45);
  text("Punteggio: " + punteggio3, windowWidth / 8, 40);
  text("Punteggio Migliore: " + punteggioMigliore3, windowWidth / 8, 100);

  // Nel ciclo di disegno o in qualche parte del tuo codice principale dove gestisci il gioco:
  giocatoreLiv3.controllaCollisione(scheletri);
  giocatoreLiv3.controllaCollisione(uccelli);

  // Ferma la musica di background del menu principale
  musicaHome.stop();
}



function aggiungiScheletro() {
  let y = windowHeight - 282; // Posizione y fissa sulla linea
  let x = windowWidth; // Posizione iniziale da destra dello schermo
  let numScheletri = Math.floor(random(1, 4)); // Genera un numero casuale tra 1 e 3 per il numero di scheletri

  // Aggiungi il numero di scheletri specificato
  for (let i = 0; i < numScheletri; i++) {
    let offsetX = i * 60; // Spazio tra gli scheletri attaccati
    scheletri.push(new Scheletri(x + offsetX, y, velocitaScheletri));
  }
  primoScheletroCreato = true; // Imposta a true dopo che il primo scheletro è stato creato

  // Dopo un certo periodo di tempo, fermare l'aggiunta di scheletri
  setTimeout(() => {
    clearInterval(timerId);
    timerId = null;
  }, 1000); // Ferma l'aggiunta di scheletri dopo 5 secondi
}

function aggiungiUccelli() {
  let x = windowWidth; // Posizione iniziale da destra dello schermo
  let y = random(windowHeight / 2 + 50, windowHeight / 2 + 150); // Altezza casuale  dello schermo
  // Aggiungi nuova uccello all'array
  uccelli.push(new Uccelli(x, y, velocitaUccelli));
}


function aggiungiNuvola() {
  let x = windowWidth; // Posizione iniziale da destra dello schermo
  let y = random(windowHeight / 2 - 500, windowHeight / 2 - 20); // Altezza dello schermo
  nuvole.push(new Nuvole(x, y, velocitaNuvole));
}




function gameOver() {
  interval++;

  // Stop music
  if (musicaLivello1.isPlaying()) {
    musicaLivello1.stop();
  }

  if (!musicaGameOver.isPlaying()) {
    musicaGameOver.loop(); // Start game over music
  }
  if (musicaLiv2.isPlaying()) {
    musicaLiv2.stop();
  }
  if (musicaLiv3.isPlaying()) {
    musicaLiv3.stop();
  }

  background(0);
  image(imgGameOver, (windowWidth - 600) / 2, (windowHeight - 900) / 2, 600, 600);
  textFont(font2);
  textSize(80);
  fill(255);
  text("Oh no, hai perso! Sarai più fortunato la prossima volta.", windowWidth / 2, (windowHeight + 500) / 2);
  text("Attendi 5 secondi, per favore.", windowWidth / 2, (windowHeight + 700) / 2);
  //Dopo un tot che viene mostrata la schermata 
  if (interval == 300) {
    resetAll();
  }
}


function menuPausa() {
  // Stop music
  if (musicaLivello1.isPlaying()) {
    musicaLivello1.stop();
  }
  if (musicaLiv2.isPlaying()) {
    musicaLiv2.stop();
  }
  if (musicaLiv3.isPlaying()) {
    musicaLiv3.stop();
  }
  background(0);
  // Ripristina il cursore predefinito
  cursor();
  // Stop music
  musicaLivello1.stop();
  rectMode(CORNER);
  let rectX = (width - rectWidth) / 2; // Posizione X del rettangolo
  rectMode(CORNER); // Imposta il modo di disegnare il rettangolo al vertice in alto a sinistra
  let opzioni = ["RIPRENDI", "RICOMINCIA", "ESCI"]; // Array delle opzioni
  for (let i = 0; i < opzioni.length; i++) {
    stroke(255);
    strokeWeight(5);
    fill(179, 40, 179); // Colore rettangolo
    let rectY = startY + i * (rectHeight + 100); // Calcola la posizione Y per il rettangolo corrente
    rect(rectX, rectY, rectWidth, rectHeight, 20);
    // Testo da centrare nel rettangolo
    textSize(50); // Imposta la dimensione del testo
    textFont(font2);
    textAlign(CENTER, CENTER); // Allinea il testo al centro
    fill(0); // Reimposta il colore del riempimento a nero3
    noStroke();
    text(opzioni[i], rectX + rectWidth / 2, rectY + rectHeight / 2); // Disegna il testo al centro del rettangolo
    fill(255);
  }
  image(imgHogPausa, windowWidth / -20 + 150, windowHeight / 12 - 100, 650, 1050);
  image(imgSgherroPausa, windowWidth - 700, windowHeight / 2 - 300, 650, 550);

}
function resetAll() {

  //Reset primo cerchio
  primo = false;
  
  //Reset scheletri
  scheletri = [];

  //Reset nuvole
  nuvole = [];
  uccelli = [];

  // Reset tempo e punteggio
  tempoInizio = 0;
  tempoTrascorso = 0;
  punteggio = 0;

  tempoInizio3 = 0;
  tempoTrascorso3 = 0;
  punteggio3 = 0;

  punteggio2 = 0;

  // Reset timer
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }

  //Posizione giocatori
  giocatoreLiv2.x = windowWidth / 2 - 840;
  lupo.x = 300;

  // Reset cerchi e altri oggetti del livello 1
  cerchi = [];

  // Reset music
  if (musicaLivello1.isPlaying()) {
    musicaLivello1.stop();
  }
  if (musicaLivello2win.isPlaying()) {
    musicaLivello2win.stop();
  }
  if (musicaLiv2.isPlaying()) {
    musicaLiv2.stop();
  }
  if (musicaGameOver.isPlaying()) {
    musicaGameOver.stop();
  }
  if (musicaLiv3.isPlaying()) {
    musicaLiv3.stop();
  }


  livello = 1; // Back to home
  interval = 0;


}

function vittoria() {
  interval++
  if (musicaLiv2.isPlaying()) { //Musica fermata
    musicaLiv2.stop();
  }
  // Metto la musica
  if (!musicaLivello2win.isPlaying()) {
    musicaLivello2win.loop();
  }
  background(0);
  fill(255);
  textSize(100);
  textFont(font2);
  text("Complimenti hai vinto!", width / 2, height / 2);
  if (interval == 220) {
    resetAll();
  }
}

function istruzioni1(){
  musicaHome.stop(); //tolgo musica
  interval++; //Parte intervallo
  background(0);
  textSize(50);
  fill(255);
  text("Il nostro amico hog rider si trova nella nube di oort \n per scappare dai suoi nemici suula terra!\n Aiutalo ad evitare gli asteroidi guidandolo con il mouse!\nBuon viaggio!", width/2, height/2);
  if(interval==400){
    livello=2;
  }
}

function istruzioni2(){
  musicaHome.stop(); //tolgo musica
  interval++; //Parte intervallo
  background(0);
  textSize(50);
  fill(255);
  text("L'hog rider è stato sfidato dal Lupo in una gara di corsa!\nSchiacciando i punti sullo schermo aiuterai il nostro amico ad andare più veloce!\nSe non premi in tempo il punto il Lupo andrà più veloce!\nBuona gara!", width/2, height/2);
  if(interval==400){
    livello=3;
  }
}

function istruzioni3(){
  musicaHome.stop(); //tolgo musica
  interval++; //Parte intervallo
  background(0);
  textSize(50); 
  fill(255);
  text("Gli Scheletri e le Aquile hanno deciso di attaccare il nostro amico Hog Rider!!\n Aiutalo a schivare gli ostacoli cliccando spazio o la freccia in su!\n Se schiacci 2 volte questi pulsanti il giocatore farà un salto in più in aria!\nBuona fortuna!", width/2, height/2);
  if(interval==500){
    livello=4;
  }
}


