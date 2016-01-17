/// <reference path="../lib/phaser.d.ts" />
module states {
    export class Letter extends Phaser.Text {

        letter: string;

        constructor(game: Phaser.Game, x: number, y: number, letter: string) {
            super(game, x, y, letter, { font: 'bold 60pt Arial', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 });
            
            this.letter = letter;
            
            this.inputEnabled = true;
            this.input.enableDrag(true);
            this.events.onDragStop.add(this.onDragStop);

            this.game.add.existing(this);



        }

        onDragStop(currentSprite: Phaser.Sprite) {
            console.log("letter: "+this.letter+" (" + currentSprite.position.x + ", " + currentSprite.position.y + ")");
        }
    }
}