import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class Platform extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Platform.width, height: Resources.Platform.height})
        this.graphics.use(Resources.Platform.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}