import {Screen} from "./screens/screen";
import {Loop} from "./loop";

export interface GameInterface {
    width: number
    height: number
    screen: Screen
}

export class Game implements GameInterface{
    width: number
    height: number
    context: CanvasRenderingContext2D
    screen: Screen

    constructor(width: number, height: number, context: CanvasRenderingContext2D) {
        this.width = width
        this.height = height
        this.context = context
        this.screen = new Screen(this.width, this.height)

        new Loop(this.update.bind(this), this.draw.bind(this), this.clear.bind(this), this.context)
    }

    update(correction: number) {
        console.log({'delay': correction})
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, this.width, this.height)
        this.screen.draw(ctx)
    }

    clear(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0,0, this.width, this.height)
    }
}
