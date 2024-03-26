class Uccelli {
    constructor(x, y, xVel) {
      this.x = x;
      this.y = y;
      this.xVel = xVel;
      this.imgWidth = 80; // Larghezza dell'immagine dello scheletro
      this.imgHeight = 70; // Altezza dell'immagine dello scheletro
    }
  
    movimento() {
      // Aggiornamento delle posizioni
      this.x -= this.xVel;
  
      // Controllo se è completamente fuori schermo, se sì, lo rimuovo
      if (this.x < -100) {
        uccelli.splice(uccelli.indexOf(this), 1);
      }
    }
  
    display() {
      image(imgUccello, this.x, this.y, this.imgHeight, this.imgWidth);
    }
  }