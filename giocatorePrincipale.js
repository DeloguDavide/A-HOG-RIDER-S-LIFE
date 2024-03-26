class Giocatore {
  constructor(sizey, sizex, y) {
    this.x = 300;
    this.y = y;
    this.sizex = sizex;
    this.sizey = sizey;
    this.numeroSalti = 0;
  }

  mostraMovimentoDestra() {
    image(imgGiocatore, this.x, this.y, this.sizex, this.sizey);
  }

  mostraFermoDestra() {
    image(imgGiocatoreFermoDestra, this.x, this.y, 85, 85);
  }

  mostraLupo(){
    image(imgLupo, this.x - 100, this.y, this.sizex, this.sizey);
  }

  salto() {
    if (jump) { //se jump=true
      if (puoSaltare) { // e se nsalti<2
        this.y += ySpeed; //Faccio salatare
      }
      if (this.y < windowHeight - 290) { //Poi faccio scendere verso la posizione inizale
        ySpeed += 0.2; //Più aumento -salta
      } else { //Quando tocca il terreno
        this.y = windowHeight - 290;
        puoSaltare = true;
        this.numeroSalti = 0;
      }
      this.mostraFermoDestra(); //Quando salta mostro l'immagine ferma

      if (this.y >= windowHeight - 290) { //Quando tocca
        jump = false;
      }
    } else { //Quando tocca mostra la corsa
      this.mostraMovimentoDestra();
    }
  }

  controllaCollisione(nemici) {
    // Itera attraverso tutti gli scheletri o uccelli
    for (let i = 0; i < nemici.length; i++) {
      let nemico = nemici[i];

      // Calcola le posizioni e le dimensioni del giocatore e del nemico
      let giocatoreLeft = this.x;
      let giocatoreRight = this.x + this.sizex;
      let giocatoreTop = this.y;
      let giocatoreBottom = this.y + this.sizey;

      let nemicoLeft = nemico.x + 15;
      let nemicoRight = nemico.x + nemico.imgWidth - 15;
      let nemicoTop = nemico.y + 15;
      let nemicoBottom = nemico.y + nemico.imgHeight - 15;

      // Controlla la collisione basata su pixel
      if (
        giocatoreRight > nemicoLeft &&
        giocatoreLeft < nemicoRight &&
        giocatoreBottom > nemicoTop &&
        giocatoreTop < nemicoBottom
      ) {
        // Se le aree rettangolari si sovrappongono, controlla la collisione pixel per pixel
        let overlappingLeft = max(giocatoreLeft, nemicoLeft);
        let overlappingRight = min(giocatoreRight, nemicoRight);
        let overlappingTop = max(giocatoreTop, nemicoTop);
        let overlappingBottom = min(giocatoreBottom, nemicoBottom);

        // Dimensioni dell'area di sovrapposizione
        let overlappingWidth = overlappingRight - overlappingLeft;
        let overlappingHeight = overlappingBottom - overlappingTop;

        // Creazione di immagini temporanee per il giocatore e il nemico
        let imgGiocatoreTemp = get(this.x, this.y, this.sizex, this.sizey);
        let imgNemicoTemp = get(nemico.x, nemico.y, nemico.imgWidth, nemico.imgHeight);

        // Carica i pixel delle immagini temporanee
        imgGiocatoreTemp.loadPixels();
        imgNemicoTemp.loadPixels();

        // Controlla i pixel sovrapposti
        for (let y = 0; y < overlappingHeight; y++) {
          for (let x = 0; x < overlappingWidth; x++) {
            let giocatorePixelIndex = (x + (y * overlappingWidth)) * 4;
            let nemicoPixelIndex = (x + ((y - (giocatoreTop - nemicoTop)) * overlappingWidth)) * 4;

            // Controlla se i pixel sono entrambi non trasparenti
            if (imgGiocatoreTemp.pixels[giocatorePixelIndex + 3] !== 0 &&
              imgNemicoTemp.pixels[nemicoPixelIndex + 3] !== 0) {
              // Collisione pixel per pixel
              livello = 5;
            }
          }
        }
      }
    }
  }
}
