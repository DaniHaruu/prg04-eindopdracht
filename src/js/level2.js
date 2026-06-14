import '../css/style.css'
import {Actor, Engine, Scene, Vector, DisplayMode, range, randomInRange} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Pixelwall} from "./background.js";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";
import {Platform} from "./platform.js";
import {Door} from "./door.js";
import {BigPlatform} from "./bigPlatform.js";
import {Wall} from "./wall.js";
import {Lives} from "./lives.js";
import {Score} from "./score.js";
import {ChickenDrumstick} from "./chickenDrumstick.js";

export class Level2 extends Scene {

    onInitialize(engine) {

        for (let x = 0; x < engine.drawWidth / 160; x++) {
            for (let y = 0; y < engine.drawHeight / 160; y++) {
                this.add(new Pixelwall(x * 160, y * 160));
            }
        }

        this.add(new BigPlatform(310, 695));

        this.add(new Wall(310, 515));

        this.add(new Platform(1250, 695));

        this.add(new Platform(0, 500));

        this.add(new Door(460, 515));

        this.add(new ChickenDrumstick(310, 50))

        this.add(new ChickenDrumstick(900, 250))

        this.add(new ChickenDrumstick(1230, 480))

        // 1280 x 720

        const livesLabel = new Lives();
        this.add(livesLabel);

        const scoreLabel = new Score();
        this.add(scoreLabel);

        this.blackCat = new BlackCat(livesLabel, scoreLabel);
        this.add(this.blackCat);
        livesLabel.setBlackCat(this.blackCat);

        this.whiteCat = new WhiteCat(livesLabel, scoreLabel);
        this.add(this.whiteCat);
        livesLabel.setWhiteCat(this.whiteCat);
    }

    onPreUpdate(engine) {
        if (this.blackCat.atDoor && this.whiteCat.atDoor) {
            console.log("You escaped");
            engine.goToScene('win');
        }
    }
}