import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class Wall extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Wall.width, height: Resources.Wall.height})
        this.graphics.use(Resources.Wall.toSprite())
        this.body.collisionType = CollisionType.Fixed
        this.body.friction = 0.5
    }
}