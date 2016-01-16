/// <reference path="../lib/phaser.d.ts" />
module states {
    export class Hero extends Phaser.Sprite {

        cursors: Phaser.CursorKeys;
        platforms: Platforms;


        constructor(game: Phaser.Game, x: number, y: number, platforms: Platforms) {
            super(game, x, y, "hero", 0);
            this.platforms = platforms
            this.anchor.setTo(0.5, 0);
            this.inputEnabled = true;
            this.input.enableDrag(true);
            this.events.onDragStop.add(this.onDragStop);

            this.game.physics.arcade.enable(this);

            this.body.bounce.y = 0.2;
            this.body.gravity.y = 300;
            this.body.collideWorldBounds = true;

            game.add.existing(this);

            this.animations.add('left', [0, 1, 2, 3], 10, true);
            this.animations.add('right', [5, 6, 7, 8], 10, true);

            this.cursors = game.input.keyboard.createCursorKeys();
        }

        update() {
            this.body.velocity.y = 0;

            if (this.cursors.up.isDown) {
                this.body.velocity.y = -150;
            } else if (this.cursors.down.isDown) {
                this.body.velocity.y = 150;
            }
            if (this.body.velocity.x != 0 || this.body.velocity.y != 0) {
                console.log("Mv(" + this.body.position.x + ", " + this.body.position.y + ")");
            }

            this.game.physics.arcade.collide(this, this.platforms);

        }

        onDragStop(currentSprite: Phaser.Sprite) {
            console.log("D&D(" + currentSprite.position.x + ", " + currentSprite.position.y + ")");
        }
    }
}