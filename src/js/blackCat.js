import {Actor, Vector, Keys} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class BlackCat extends Actor {

    constructor() {
        super({
            width: Resources.BlackCat.width, height: Resources.BlackCat.height
        })
        console.log("Meow")
    }

    onInitialize(engine) {
        this.graphics.use(Resources.BlackCat.toSprite())
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


// vb

// const runSheet = SpriteSheet.fromImageSource({
//     image: Resources.Player,
//     grid: {rows: 1, columns: 21, spriteWidth: 96, spriteHeight: 96}
// })
// const idle = runSheet.sprites[0] // geen animatie
// const runLeft = Animation.fromSpriteSheet(runSheet, range(1, 10), 80)
// const runRight = Animation.fromSpriteSheet(runSheet, range(11, 20), 80)
//
// this.graphics.add("idle", idle)
// this.graphics.add("runleft", runLeft)
// this.graphics.add("runright", runRight)
//
// this.graphics.use(idle)
// }
// onInitialize(engine)
// {
//     this.pos = new Vector(400, 200)
//     this.vel = new Vector(0, 0)
// }
// onPreUpdate(engine)
// {
//
//     let xspeed = 0
//     this.graphics.use('idle')
//
//     if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
//         xspeed = -300
//         this.graphics.use('runleft')
//     }
//     if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
//         xspeed = 300
//         this.graphics.use('runright')
//     }
//
//     this.vel = new Vector(xspeed, 0)
// }