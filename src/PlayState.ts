/// <reference path="../lib/phaser.d.ts" />
/// <reference path="Player.ts"/>
/// <reference path="Hero.ts"/>
/// <reference path="Platforms.ts"/>
module states {

    export class PlayState extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        platforms: Platforms;
        player: Player;
        hero: Hero;


        create() {

            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.background = this.add.sprite(0, 0, "sky");
            this.platforms = new Platforms(this.game);
            this.music = this.add.audio("vso", 1, false);
            this.music.play();

            this.player = new Player(this.game, 130, 284);
            this.hero = new Hero(this.game, 250, 100, this.platforms);
        }




    }
}
