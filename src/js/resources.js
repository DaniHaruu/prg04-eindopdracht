import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BlackIdle: new ImageSource("/images/blackIdle.png"),
    BlackWalking1: new ImageSource("/images/blackWalking1.png"),
    BlackWalking2: new ImageSource("/images/blackWalking2.png"),
    WhiteCat: new ImageSource('images/whiteIdle.png'),
    Pixelwall: new ImageSource('images/pixelwall.png'),
    GameoverScreen: new ImageSource('images/gameoverScreen.webp')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }