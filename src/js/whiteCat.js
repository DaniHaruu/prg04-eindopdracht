import {Actor, Vector, Keys, Animation, CollisionType} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";

export class WhiteCat extends Actor {

    constructor() {
        super({
            width: Resources.WhiteIdle.width, height: Resources.WhiteIdle.height
        })
        console.log("Mew")

        // animations
        const idle = Resources.WhiteIdle.toSprite()

        const walk1 = Resources.WhiteWalking1.toSprite()
        const walk2 = Resources.WhiteWalking2.toSprite()

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
        this.facingRight = true

        this.body.collisionType = CollisionType.Active;
    }

    onInitialize(engine) {
        this.pos = new Vector(100, 620)
        this.body.mass = 6
    }

    onPreUpdate(engine) {
        let velX = 0
        let isMoving = false

        if (engine.input.keyboard.isHeld(Keys.A) && this.pos.x > 58) {
            velX = -250
            this.facingRight = false
            isMoving = true
        }
        if (engine.input.keyboard.isHeld(Keys.D) && this.pos.x < 1222) {
            velX = 250
            this.facingRight = true
            isMoving = true
        }
        if (engine.input.keyboard.wasPressed(Keys.W) && this.pos.y > 50 && (this.vel.y === 0)) {
            console.log("Jump!");
            this.body.applyLinearImpulse(new Vector(0, -4000));
        }
        this.vel.x = velX;

        // animation switching
        if (isMoving) {
            this.graphics.use("walk")
            this.graphics.offset = new Vector(0, 7);
        } else {
            this.graphics.use("idle")
            this.graphics.offset = new Vector(0, 0);
        }

        // flip based on direction
        this.graphics.flipHorizontal = this.facingRight
    }
}