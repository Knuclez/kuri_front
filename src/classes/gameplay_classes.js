export class FighterEntity{
    danio;
    //tot = total, act= actual
    vida_tot;
    mana_tot;
    vida_act;
    mana_act;
    habilidad1;
    habilidad2;
    habilidad3;

    constructor(vida_total, danio, mana_total){
        this.vida_total = vida_total;
        this.danio = danio;
        this.mana = mana_total;
        this.vida_act = vida_total;
        this.mana_act = mana_total;
    }

    hit(){
        return this.danio;
    }

    vida_actual(){
        return this.vida_act;
    }

    lastimar(danio_entrante){
        this.vida_act = this.vida_act - danio_entrante;
    }

    setear_habilidades(h1, h2, h3){
        if (h1 != NaN){
            this.habilidad1 = h1;
        }
        if (h2 != NaN){
            this.habilidad2 = h2;
        }
        if (h3 != NaN){
            this.habilidad3 = h3;
        }
    }

    lanzar_habilidad1(){
        console.log(this.habilidad1);
    }

    lanzar_habilidad2(){
        console.log(this.habilidad2);
    }

    lanzar_habilidad3(){
        console.log(this.habilidad3);
    }
};

export class Player extends FighterEntity{
    
};

export class Monster extends FighterEntity{

};