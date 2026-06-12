import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Level} from "./level1.js";
import {GameOver} from "./gameover.js"

export class Game extends Engine {
    constructor() {
        super({
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800)
            }
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        this.add('level1', new Level())
        this.add('gameover', new GameOver())
        this.goToScene('level1')
    }
}

new Game();
