export class FighterEntity{
    #danio;
    #vida_total;
    #mana_total;
    #vida_actual;
    #mana_actual;
    constructor(vida_total, danio, mana_total){
        this.vida_total = vida_total;
        this.danio = danio;
        this.mana = mana_total;
    }

    get danio(){
        return this.#danio;
    }

    get vida_actual(){
        return this.#vida_actual;
    }
};

export class Player extends FighterEntity{
    
};