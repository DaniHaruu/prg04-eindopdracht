import {FontUnit, Label, Color, Font, Vector} from "excalibur";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";

export class Lives extends Label {
    lives = 3;
    blackCat;
    whiteCat;

    setBlackCat(blackCat) {
        this.blackCat = blackCat;
    }

    setWhiteCat(whiteCat) {
        this.whiteCat = whiteCat;
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        {
            this.text = "Lives: 3";
            this.font = new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.Black
            })

            this.pos = new Vector(100, 100);
        }
    }

    decLives() {
        this.lives -= 1;

        if (this.lives < 0) {
            this.lives = 0;
        }

        this.text = `Lives: ${this.lives}`;
        console.log(`Lives: ${this.lives}`);

        if (this.lives <= 0) {
            this.blackCat.kill();
            this.whiteCat.kill();
            console.log("The cats took damage too many times");
            this.scene.engine.goToScene("gameover")
        }
    }
}