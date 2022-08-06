import '/src/assets/scss/main.scss'
import {Game} from "./ts/classes/game";
import {Layer} from "./ts/classes/layer";

class App {
    layer: Layer
    game: Game

    constructor(container: HTMLBodyElement | null) {
        this.layer = new Layer(container)
        this.game = new Game
        (
            this.layer.canvas.width,
            this.layer.canvas.height,
            this.layer.context
        )

        console.log('Game started')
        console.log({ game: this.game })
    }
}

onload = () => {
    new App(document.querySelector('body'))
}

