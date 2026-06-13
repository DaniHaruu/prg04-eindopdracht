import '../css/style.css'
import {Actor, Engine, Scene, Vector, DisplayMode, range, randomInRange} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Pixelwall} from "./background.js";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";
import {BigPlatform} from "./bigPlatform.js";
import {Door} from "./door.js";

export class Level extends Scene {

    onInitialize(engine) {

        for (let x = 0; x < engine.drawWidth / 160; x++) {
            for (let y = 0; y < engine.drawHeight / 160; y++) {
                this.add(new Pixelwall(x * 160, y * 160));
            }
        }

        this.add(new BigPlatform(170, 695));

        this.add(new BigPlatform(640, 695));

        this.add(new BigPlatform(1110, 695));

        this.add(new Door(640, 515));

        // 1280 x 720

        this.blackCat = new BlackCat();
        this.add(this.blackCat);

        this.whiteCat = new WhiteCat();
        this.add(this.whiteCat);
    }

    onPreUpdate(engine) {
        if (this.blackCat.atDoor && this.whiteCat.atDoor) {
            console.log("You escaped");
            engine.goToScene('win');
        }
    }
}