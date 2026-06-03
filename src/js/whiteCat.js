import {Actor, Vector, Keys} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class WhiteCat extends Actor {

    constructor() {
        super({
            width: Resources.WhiteCat.width, height: Resources.WhiteCat.height
        })
        console.log("Mew")
    }

    onInitialize(engine) {
        this.graphics.use(Resources.WhiteCat.toSprite())
        this.pos = new Vector(620, 360)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        if (engine.input.keyboard.isHeld(Keys.A) && this.pos.x > 100) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.D) && this.pos.x < 1180) {
            velX = 250
        }
        if (engine.input.keyboard.isHeld(Keys.W) && this.pos.y > 50) {
            velY = -250
        }
        if (engine.input.keyboard.isHeld(Keys.S) && this.pos.y < 668) {
            velY = 250
        }
        this.vel = new Vector(velX, velY)
    }
}