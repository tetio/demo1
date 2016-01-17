/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Hero.ts"/>
/// <reference path="Platforms.ts"/>
module states {

    export class PlayState extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        platforms: Platforms;
        hero: Hero;
        cursors: Phaser.CursorKeys;

        constructor() {
            super();
        }

        create() {
            this.background = this.add.sprite(0, 0, "sky");
            this.platforms = new Platforms(this.game);
            this.hero = new Hero(this.game, 250, 100);
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.music = this.add.audio("vso", 1, false);
            this.music.play();
        }

        update() {
            this.game.physics.arcade.collide(this.hero, this.platforms.platforms);
            this.hero.body.velocity.x = 0;

            if (this.cursors.up.isDown && this.hero.body.touching.down) {
                this.hero.body.velocity.y = -150;
            } else if (this.cursors.left.isDown) {
                this.hero.body.velocity.x = -150;
                this.hero.animations.play('left');
            } else if (this.cursors.right.isDown) {
                this.hero.body.velocity.x = 150;
                this.hero.animations.play('right');
            } else {
                this.hero.frame = 4;
            }

            if (this.hero.body.velocity.x != 0 || this.hero.body.velocity.y != 0) {
                console.log("Mv(" + this.hero.body.position.x + ", " + this.hero.body.position.y + ")");
            }

        }


    }
}
