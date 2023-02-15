//PLAYER turn
export function player_take_turn(c, e, a){
    console.log(a);
    switch (a){
        case 'hit_enemy':
            e.lastimar(c.hit())
            break;

        case 'lanzar_habilidad1':
            c.lanzar_habilidad1();
            break;
            
        case 'lanzar_habilidad2':
            c.lanzar_habilidad2();
            break;
            
        case 'lanzar_habilidad3':
            c.lanzar_habilidad3();
            break;

        default:
            console.log("no action taken");
    }
}



//ENEMY turn
export function enemy_take_turn(c, e, a){
    hit_player(c, e)
};


function hit_player(character, enemy){
    character.lastimar(enemy.hit());
};