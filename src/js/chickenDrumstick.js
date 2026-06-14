import {Actor, Vector, CollisionType} from "excalibur"
import {ResourceLoader, Resources} from './resources.js'

export class ChickenDrumstick extends Actor {
    constructor(x, y) {
        super({x, y, width: Resources.ChickenDrumstick.width, height: Resources.ChickenDrumstick.height})
        this.graphics.use(Resources.ChickenDrumstick.toSprite())
        this.body.collisionType = CollisionType.Passive
    }
}