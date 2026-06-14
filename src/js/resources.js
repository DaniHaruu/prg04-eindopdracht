import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BlackIdle: new ImageSource("/images/blackIdle.png"),
    BlackWalking1: new ImageSource("/images/blackWalking1.png"),
    BlackWalking2: new ImageSource("/images/blackWalking2.png"),
    WhiteIdle: new ImageSource('/images/whiteIdle.png'),
    WhiteWalking1: new ImageSource('/images/whiteWalking1.png'),
    WhiteWalking2: new ImageSource('/images/whiteWalking2.png'),
    Pixelwall: new ImageSource('/images/pixelwall.png'),
    GameoverScreen: new ImageSource('/images/gameoverScreen.webp'),
    Platform: new ImageSource('/images/platform.png'),
    WinScreen: new ImageSource('/images/winScreen.jpg'),
    Door: new ImageSource('/images/door.png'),
    BigPlatform: new ImageSource('/images/bigPlatform.png'),
    Wall: new ImageSource('/images/wall.png'),
    FireHoopOff: new ImageSource('images/fireHoopOff.png'),
    FireHoopLit: new ImageSource('images/fireHoopLit.png'),
    FireHoopStand: new ImageSource('images/fireHoopStand.png'),
    MiniPlatform: new ImageSource('/images/miniPlatform.png'),
    ChickenDrumstick: new ImageSource('/images/chickenDrumstick.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }