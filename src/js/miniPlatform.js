import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class MiniPlatform extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.MiniPlatform.width, height: Resources.MiniPlatform.height})
        this.graphics.use(Resources.MiniPlatform.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}