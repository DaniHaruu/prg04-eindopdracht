import {Actor, Vector, Keys} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class BlackCat extends Actor {

    constructor() {
        super({
            width: Resources.blackIdle.width, height: Resources.blackIdle.height
        })
        console.log("Meow")
    }

    onInitialize(engine) {
        this.graphics.use(Resources.blackIdle.toSprite())
        this.pos = new Vector(620, 360)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 100) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1180) {
            velX = 250
        }
        if (engine.input.keyboard.isHeld(Keys.Up) && this.pos.y > 50) {
            velY = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Down) && this.pos.y < 668) {
            velY = 250
        }
        this.vel = new Vector(velX, velY)
    }
}