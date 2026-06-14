import '../css/style.css'
import {Actor, Engine, Scene, Vector, DisplayMode, range, randomInRange} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Pixelwall} from "./background.js";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";
import {Platform} from "./platform.js";
import {Door} from "./door.js";
import {Lives} from "./lives.js";
import {FireHoop} from "./fireHoop.js";
import {MiniPlatform} from "./miniPlatform.js";

export class Level1 extends Scene {

    onInitialize(engine) {

        for (let x = 0; x < engine.drawWidth / 160; x++) {
            for (let y = 0; y < engine.drawHeight / 160; y++) {
                this.add(new Pixelwall(x * 160, y * 160));
            }
        }

        this.add(new Platform(170, 695));

        this.add(new Platform(640, 695));

        this.add(new Platform(1110, 695));

        this.add(new Door(640, 515));

        this.add(new MiniPlatform(400, 550));

        this.add(new FireHoop(400, 450));

        this.add(new MiniPlatform(875, 550));

        this.add(new FireHoop(875, 450));


        // 1280 x 720

        const livesLabel = new Lives();
        this.add(livesLabel);

        this.blackCat = new BlackCat(livesLabel);
        this.add(this.blackCat);
        livesLabel.setBlackCat(this.blackCat);

        this.whiteCat = new WhiteCat(livesLabel);
        this.add(this.whiteCat);
        livesLabel.setWhiteCat(this.whiteCat);
    }

    onPreUpdate(engine) {
        if (this.blackCat.atDoor && this.whiteCat.atDoor) {
            console.log("You escaped");
            engine.goToScene('level2');
        }
    }
}