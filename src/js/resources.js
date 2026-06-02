import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    BlackCat: new ImageSource('images/blackIdle.png'),
    WhiteCat: new ImageSource('images/whiteIdle.png')
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }