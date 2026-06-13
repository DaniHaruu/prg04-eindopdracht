import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class BigPlatform extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.BigPlatform.width, height: Resources.BigPlatform.height})
        this.graphics.use(Resources.BigPlatform.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}