import {Actor, DisplayMode, Vector} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class Pixelwall extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y)
        })
    }

    onInitialize(engine) {
        this.anchor.setTo(0, 0);
        this.graphics.use(Resources.Pixelwall.toSprite())
    }
}

export class GameoverScreen extends Actor {
    constructor() {
        super()
    }

    onInitialize(engine) {
        this.graphics.use(Resources.GameoverScreen.toSprite())
        this.pos = new Vector(1280 / 2, 720 / 2)
        this.z = -1
    }
}