import {Scene, Vector, DisplayMode} from "excalibur";
import {WinScreen} from "./background.js";

export class Win extends Scene {
    onInitialize(engine) {
        const winScreen = new WinScreen();
        this.add(winScreen)
    }
}