class Food extends Entity{

    /**
     * 
     * @param {int} x position
     * @param {int} y position 
     * @param {int} w width
     * @param {int} h height 
     * @param {*} energy the energy that will be given to the owl if he eats it
     */
    constructor(x, y, w, h, energy){
        super(x, y, w, h);
        this.energy = energy;
    }

    draw(context){
        context.beginPath();
        context.rect(this.hitbox.x, this.hitbox.y, this.hitbox.w, this.hitbox.h);
        context.fillStyle = "green";
        context.fill();
    }
}