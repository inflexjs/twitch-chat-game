export interface ScreenInterface {
    width: number
    height: number
}

export class Screen implements ScreenInterface{
    width: number
    height: number

    constructor(gameWidth: number, gameHeight: number) {
        this.width = gameWidth - 500
        this.height = gameHeight / 2
    }
    update() {
        //
    }
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#6095a5'
        ctx.fillRect(500, 0, this.width, this.height)
    }
}
