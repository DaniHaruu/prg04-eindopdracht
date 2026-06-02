import {Scene, Vector, DisplayMode} from "excalibur";
import {GameoverScreen} from "./background.js";

export class GameOver extends Scene {
    onInitialize(engine) {
        const gameoverScreen = new GameoverScreen();
        this.add(gameoverScreen)
    }
}