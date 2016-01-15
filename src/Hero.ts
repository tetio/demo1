/// <reference path="../lib/phaser.d.ts" />
module states {
    export class Hero extends Phaser.Sprite {

        cursors: Phaser.CursorKeys;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "hero", 0);
            this.anchor.setTo(0.5, 0);
            this.inputEnabled = true;
            this.input.enableDrag(true);
            this.events.onDragStop.add(this.onDragStop);

            game.physics.arcade.enableBody(this);
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
        }

        onDragStop(currentSprite: Phaser.Sprite) {
            console.log("D&D(" + currentSprite.position.x + ", " + currentSprite.position.y + ")");
        }
    }
}