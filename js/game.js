let level_1 = new Phaser.Scene("game");

level_1.preload = function(){
    this.load.image('character', "assets/char.png")
    this.load.image("background", "assets/background.png")
};

level_1.create = function(){

    // config.physics.startSystem(Phaser.Physics.ARCADE);

    this.bg = this.add.sprite(375, 200, "background");
    this.char = this.add.sprite(30, 30, 'character');
    // game.physics.enable([char], Phaser.Physics.ARCADE);
    // game.physics.arcade.gravity.y = 100;
    char.depth = 1; 
    // char.body.gravity.y = 100;
    // bg.body.immovable = true;
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key: "thrust",
        frames: this.anims.generateFrameNumbers("char"),
        frameRate: 20,
        repeat: -1
      });

    this.player.play("thrust");
}
let config = {
    type: Phaser.AUTO,
    height: 400,
    width: 750,
    scene: level_1,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 100},
            debug: true
                 
        }
    }
    
};

let game = new Phaser.Game(config);

function update(){
    this.movePlayer();
   
}

function movePlayer(){
    if(this.cursorKeys.left.isDown){
        this.char.setVelocityX(-100000);
    }
    else if(this.cursorKeys.right.isDown){
        this.char.setVelocityX(100000);
    }
}