import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from "./resources.js";
import {WhiteCat} from "./whiteCat.js";
import {BlackCat} from "./blackCat.js";

class FireHoopStand extends Actor {

    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.FireHoopStand.width,
            height: Resources.FireHoopStand.height
        });

        this.body.collisionType = CollisionType.Fixed;
        this.z = 0;
    }

    onInitialize() {
        this.graphics.use(Resources.FireHoopStand.toSprite());
    }
}

export class FireHoop extends Actor {

    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.FireHoopOff.width,
            height: Resources.FireHoopOff.height
        });

        this.lit = false;
        this.timer = 0;
        this.z = 1;
        this.touchingCats = new Set();
    }

    onInitialize(engine) {

        this.graphics.use(Resources.FireHoopOff.toSprite());
        this.body.collisionType = CollisionType.Passive;

        this.stand = new FireHoopStand(
            this.pos.x,
            this.pos.y + 50
        );

        engine.currentScene.add(this.stand);

        this.on('collisionstart', (event) => this.hitCats(event));
        this.on('collisionend', (event) => this.leftCats(event));

        this.touchingCats = new Set();

        this.lives = 3;
    }

    hitCats(event) {
        const other = event.other.owner;

        if (other instanceof WhiteCat || other instanceof BlackCat) {
            this.touchingCats.add(other);

            if (this.lit) {
                console.log("The cat got burned a little")
                other.livesLabel.decLives();
            }
        }
    }

    leftCats(event) {
        const other = event.other.owner;

        if (other instanceof WhiteCat || other instanceof BlackCat) {
            this.touchingCats.delete(other);
        }
    }

    onPreUpdate(engine, delta) {

        this.timer += delta;

        if (this.timer >= 2000) {
            this.timer = 0;
            this.lit = !this.lit;

            if (this.lit) {
                this.graphics.use(Resources.FireHoopLit.toSprite());
                for (const cat of this.touchingCats) {
                    cat.livesLabel.decLives();
                }

            } else {
                this.graphics.use(Resources.FireHoopOff.toSprite());
            }
        }
    }
}