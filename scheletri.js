class Scheletri {
    constructor(x, y, xVel) {
      this.x = x;
      this.y = y;
      this.xVel = xVel;
      this.imgWidth = 70; // Larghezza dell'immagine dello scheletro
      this.imgHeight = 65; // Altezza dell'immagine dello scheletro
    }
  
    movimento() {
      // Aggiornamento delle posizioni
      this.x -= this.xVel;
  
      // Controllo se lo scheletro è completamente fuori schermo, se sì, lo rimuovo
      if (this.x < -100) {
        scheletri.splice(scheletri.indexOf(this), 1);
      }
    }
  
    display() {
      image(imgLarry, this.x, this.y, this.imgHeight, this.imgWidth);
    }
  }