import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Level1} from "./level1.js";
import {Level2} from "./level2.js";
import {GameOver} from "./gameover.js"
import {Win} from "./win.js"

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

        this.add('level1', new Level1())
        this.add('level2', new Level2())
        this.add('gameover', new GameOver())
        this.add('win', new Win())
        this.goToScene('level1')
    }
}

new Game();
