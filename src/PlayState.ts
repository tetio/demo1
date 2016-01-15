/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Player.ts"/>
/// <reference path="Hero.ts"/>
module states {

    export class PlayState extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Player;
        hero: Hero;

        create() {
            this.background = this.add.sprite(0, 0, "sky");
            this.music = this.add.audio("vso", 1, false);
            this.music.play();

            this.player = new Player(this.game, 130, 284);
            this.hero = new Hero(this.game, 250, 100);
        }

    }

}
