import '../css/style.css'
import {Actor, Engine, Scene, Vector, DisplayMode, range, randomInRange} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Pixelwall} from "./background.js";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";
import {BigPlatform} from "./bigPlatform.js";

export class Level extends Scene {

    onInitialize(engine) {

        for (let x = 0; x < engine.drawWidth / 160; x++) {
            for (let y = 0; y < engine.drawHeight / 160; y++) {
                this.add(new Pixelwall(x * 160, y * 160));
            }
        }

        this.add(new BigPlatform(170, 695));

        const blackCat = new BlackCat();
        this.add(blackCat);

        const whiteCat = new WhiteCat();
        this.add(whiteCat);
    }
}