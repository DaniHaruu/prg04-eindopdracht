import '../css/style.css'
import {Actor, Engine, Scene, Vector, DisplayMode, range, randomInRange} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Pixelwall} from "./background.js";
import {BlackCat} from "./blackCat.js";
import {WhiteCat} from "./whiteCat.js";

export class Level extends Scene {

    onInitialize(engine) {

        for (let x = 0; x < engine.drawWidth / 32; x++) {
            for (let y = 0; y < engine.drawHeight / 32; y++) {
                this.add(new Pixelwall(x * 32, y * 32));
            }
        }

        const blackCat = new BlackCat();
        this.add(blackCat);

        const whiteCat = new WhiteCat();
        this.add(whiteCat);
    }
}