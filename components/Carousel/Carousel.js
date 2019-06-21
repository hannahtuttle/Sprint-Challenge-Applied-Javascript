class Carousel {
     constructor(carElement){
        this.carElement = carElement;
        //console.log('this.element', this.carElement)
        this.leftButton = this.carElement.querySelector('.left-button')
        //console.log('this.leftButton', this.leftButton)
        this.rightButton = this.carElement.querySelector('.right-button')
       // console.log('this.rightButton',this.rightButton)
        this.img = this.carElement.querySelectorAll(`img`)
        console.log('this.img', this.img)
        this.index = Array.from(this.img).map(img => new Images(img))
        console.log(this.index)
        this.leftButton.addEventListener('click', () => this.selectButton())
        this.rightButton.addEventListener('click', () => this.selectButton())

    }
    selectButton(){
        this.index.map(img => img.selectImg())
    }
}

class Images {
    constructor(imgElement){
        this.imgElement = imgElement
    }
    selectImg(){
        this.imgElement.style.display = 'block'
    }
}



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelectorAll('.carousel').forEach(item => new Carousel(item));
console.log('carousel', carousel)