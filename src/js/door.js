import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class Door extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.Door.width, height: Resources.Door.height})
        this.graphics.use(Resources.Door.toSprite())
        this.body.collisionType = CollisionType.Passive
    }
}