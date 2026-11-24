class Nave{
    #posX;
    #posY;

    constructor(x, y){
        this.#posX = x;
        this.#posY = y;
    }
    show(){
        square(this.#posX,this.#posY,50);
    }
    move(sentido){
        if (sentido=='e'){
            this.#posX--;
        }
        if (sentido=='d'){
            this.#posX++;
        }
    }
    getPosX(){
        return this.#posX;
    }
    setPosX(x){
        this.#posX = x;
    }
    getPosY(){
        return this.#posY;
    }
    setPosY(y){
        this.#posY = y;
    }
}