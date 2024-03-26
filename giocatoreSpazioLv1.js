class GiocatoreSpazioLv1 { //Classe che gestisce il giocatore del lv1(spazio)

    constructor(sizey, sizex) {
        this.x = 0;
        this.y = 0;
        this.sizex = sizex;
        this.sizey = sizey;
    }

    movimento() {
        // Centra il giocatore rispetto al mouse sull'asse x
        this.x = constrain(mouseX - this.sizex / 2, 0, width - this.sizex); //Non lo faccio uscire dal canvas
        // Centra il giocatore rispetto al mouse sull'asse y
        this.y = constrain(mouseY - this.sizey / 2, 0, height - this.sizey);
    }
    display(){
        image(imgHogSpazio, this.x, this.y, this.sizex, this.sizey);
    }
}