interface TakePhotos{
    cameraMode:String
    filter:String
    burst:number
}
interface story{
    createStory():void
}

class Instegram implements TakePhotos,story{
    constructor(
        public cameraMode:String,
        public filter:String,
        public burst:number
    ){
    }
    createStory(): void {
        console.log("Story created")
    }
    
}

