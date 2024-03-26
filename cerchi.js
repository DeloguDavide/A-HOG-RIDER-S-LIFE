
class Cerchi { //Classe che gestisce i cerchi/meteoriti del livello 1
  constructor(x, y, xVel, yVel) {
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
    this.imgWidth = 90; // Larghezza dell'immagine dell'asteroide
    this.imgHeight = 80; // Altezza dell'immagine dell'asteroide
    this.diametro = (this.imgWidth + this.imgHeight) / 2; // Calcolo del diametro
  }

  movimento() {
    // Aggiornamento delle posizioni
    this.x += this.xVel; 
    if (this.x > width - this.diametro || this.x < -50) {
      this.xVel *= -1;
    }

    this.y += this.yVel;
    if (this.y < 0 || this.y > height - this.diametro) {
      this.yVel *= -1;
    }
    
    // Controllo la collisione con gli altri cerchi
    for (let i = 0; i < cerchi.length; i++) {
      if (cerchi[i] !== this) {
        let distanza = dist(this.x, this.y, cerchi[i].x, cerchi[i].y);
        let raggioSomma = this.diametro / 2 + cerchi[i].diametro / 2;
        if (distanza < raggioSomma) {
          // Scambio delle velocità
          let tempXVel = this.xVel;
          let tempYVel = this.yVel;
          this.xVel = cerchi[i].xVel;
          this.yVel = cerchi[i].yVel;
          cerchi[i].xVel = tempXVel;
          cerchi[i].yVel = tempYVel;
          
          // Aggiornamento delle posizioni dopo lo scambio delle velocità
          this.x += this.xVel; 
          this.y += this.yVel;
          cerchi[i].x += cerchi[i].xVel;
          cerchi[i].y += cerchi[i].yVel;
        }
      }
    }
}


  display() { //mostro l'immagine dell'asteroide al posto del cerchio
    image(imgAsteroide, this.x, this.y, this.diametro, this.diametro * this.imgHeight / this.imgWidth); // Mantiene l'aspetto dell'asteroide
  }
}