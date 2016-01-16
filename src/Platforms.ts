/// <reference path="../lib/phaser.d.ts" />
module states {
    export class Platforms  {
        game: Phaser.Game;
        platforms: Phaser.Group;

        constructor(game: Phaser.Game) {
            this.game = game;
            this.platforms = game.add.group();
            this.platforms.enableBody = true;

            var ground: Phaser.Sprite = this.platforms.create(0, this.game.world.height - 64, 'ground');
            ground.scale.setTo(2, 2);
            ground.body.immovable = true;

            var ledge = this.platforms.create(400, 400, 'ground');
            ledge.body.immovable = true;
            ledge = this.platforms.create(-150, 250, 'ground');
            ledge.body.immovable = true;

        }


    }
}