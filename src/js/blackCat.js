import {Actor, Vector, Keys, Animation} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class BlackCat extends Actor {

    constructor() {
        super({
            width: Resources.BlackIdle.width, height: Resources.BlackIdle.height
        })
        console.log("Meow")

        // animations
        const idle = Resources.BlackIdle.toSprite()

        const walk1 = Resources.BlackWalking1.toSprite()
        const walk2 = Resources.BlackWalking2.toSprite()

        const walkAnimation = new Animation({
            frames: [
                {graphic: walk1, duration: 300},
                {graphic: walk2, duration: 300}
            ]
        })

        this.graphics.add("idle", idle)
        this.graphics.add("walk", walkAnimation)

        this.graphics.use("idle")

        // remember last direction
        this.facingRight = false
    }

    onInitialize(engine) {
        this.pos = new Vector(1180, 620)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        let isMoving = false

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 58) {
            velX = -250
            this.facingRight = false
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1222) {
            velX = 250
            this.facingRight = true
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.Up) && this.pos.y > 50) {
            velY = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Down) && this.pos.y < 668) {
            velY = 250
        }
        this.vel = new Vector(velX, velY)

        // animation switching
        if (isMoving) {
            this.graphics.use("walk")
        } else {
            this.graphics.use("idle")
        }

        // flip based on direction
        this.graphics.flipHorizontal = this.facingRight
    }
}
