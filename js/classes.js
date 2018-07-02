/*jshint esversion: 6 */ 

class Entity {
    constructor() {
        this.sprite = 'images/';
        this.x = 2;
        this.y = 5;
    }

    update(dt) {
        this.isOutOfBoundX = this.x > 5;
        this.isOutOfBoundY = this.y < 0;
    }

    // Draw the entity on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
    }
}

class Player extends Entity {
    constructor() {
        super();
        this.sprite += "char-boy.png";
    }
}

class Enemy extends Entity {
    constructor(x,y) {
        super();
        this.sprite += "enemy-bug.png";
        this.x = x;
        this.y = y;
    }

    update(dt) {
        super.update();
        if (this.isOutOfBoundX) {
            this.x = -1;
        } else {
            this.x += dt;
        }
    }
}