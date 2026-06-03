import {Actor, Vector, Keys, Animation} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class BlackCat extends Actor {

    constructor() {
        super({
            width: Resources.BlackCat.width, height: Resources.BlackCat.height
        })
        console.log("Meow")

        // animations
        const idle = Resources.blackIdle.toSprite()

        const walk1 = Resources.blackWalking.toSprite()
        const walk2 = Resources.blackWalking2.toSprite()

        const walkAnimation = Animation.fromSpriteArray([walk1, walk2], 150)

        this.graphics.add("idle", idle)
        this.graphics.add("walk", walkAnimation)

        this.graphics.use("idle")

        // remember last direction
        this.facingRight = false
    }

    onInitialize(engine) {
        this.graphics.use(Resources.BlackCat.toSprite())
        this.pos = new Vector(1180, 620)
    }

    onPreUpdate(engine) {
        let velX = 0
        let velY = 0

        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 58) {
            velX = -250
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 1222) {
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


export class BlackCat extends Actor {

    constructor() {
        super()
        const walkSheet = SpriteSheet.fromImageSource({
            image: Resources.BlackCat,
            grid: {rows: 1, columns: 21, spriteWidth: 96, spriteHeight: 96}
        })
        console.log("Meow")
        const idle = walkSheet.sprites[0] // geen animatie
        const runLeft = Animation.fromSpriteSheet(walkSheet, range(1, 10), 80)
        const runRight = Animation.fromSpriteSheet(walkSheet, range(11, 20), 80)

        this.graphics.add("idle", idle)
        this.graphics.add("walkleft", walkLeft)
        this.graphics.add("walkright", walkRight)

        this.graphics.use(idle)
    }

    onInitialize(engine) {
        this.pos = new Vector(400, 200)
        this.vel = new Vector(0, 0)
    }

    onPreUpdate(engine) {

        let xspeed = 0
        this.graphics.use('idle')

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.use('walkleft')
        }
        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.use('walkright')
        }

        this.vel = new Vector(xspeed, 0)
    }

}