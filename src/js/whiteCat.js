import {Actor, Vector, Keys, Animation, CollisionType} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Door} from "./door.js";
import {Lives} from "./lives.js";

export class WhiteCat extends Actor {
    livesLabel;

    constructor(livesLabel) {
        super({
            width: Resources.WhiteIdle.width, height: Resources.WhiteIdle.height
        })
        console.log("Mew")
        this.livesLabel = livesLabel

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
        this.facingRight = true;

        this.atDoor = false;

        this.body.collisionType = CollisionType.Active;
    }

    onInitialize(engine) {
        this.engine = engine
        this.pos = new Vector(100, 620)
        this.body.mass = 6
        this.on('collisionstart', (event) => this.hitDoor(event))
        this.on('collisionend', (event) => this.leftDoor(event))
        // this.on('collisionstart', (event) => this.hitSomething(event))
        this.lives = 3
    }

    hitDoor(event) {
        if (event.other.owner instanceof Door) {
            this.atDoor = true
        }
    }

    leftDoor(event) {
        if (event.other.owner instanceof Door) {
            this.atDoor = false
        }
    }

    // hitSomething(event) {
    //     if (event.other.owner instanceof Coin) {
    //         event.other.owner.kill()
    //         this.scoreLabel.incScore();
    //     }
    // }

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

        if (this.pos.y > 800) {
            console.log('You fell')
            engine.goToScene('gameover');
            this.kill();
        }
    }
}