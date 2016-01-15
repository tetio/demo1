/// <reference path="../lib/phaser.d.ts" />
module states {
    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "hero", 0);
            this.anchor.setTo(0.5, 0);
            game.physics.arcade.enableBody(this);
            game.add.existing(this);
        }

        update() {
            this.body.velocity.x = 0;

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
            } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
            }
            if (this.body.velocity.x != 0 || this.body.velocity.y != 0) {
                console.log("Mv(" + this.body.position.x + ", " + this.body.position.y + ")");
            }
        }
    }
}