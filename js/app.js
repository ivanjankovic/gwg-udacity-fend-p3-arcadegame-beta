/*jshint esversion: 6 */ 

var Enemy = function() {
    
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
    
};

const player = new Player();
const allEnemies = [...Array(3)].map(((_,i) => new Enemy(0, i + 1)));
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
