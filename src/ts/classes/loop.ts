export class Loop {
    update: (correction: number) => void
    draw: (ctx: CanvasRenderingContext2D) => void
    clear: (ctx: CanvasRenderingContext2D) => void

    context: CanvasRenderingContext2D

    deltaTime: number
    lastUpdate: number
    milliseconds: number

    constructor(update: (correction: number) => void, draw: (ctx: CanvasRenderingContext2D) => void, clear: (ctx: CanvasRenderingContext2D) => void, context: CanvasRenderingContext2D) {
        this.update = update
        this.draw = draw
        this.clear = clear

        this.context = context

        this.deltaTime = 0
        this.lastUpdate = 0
        this.milliseconds = 1000 // one second

        this.animate = this.animate.bind(this)
        this.animate()
    }

    animate(currentTime: number = 0) {
        requestAnimationFrame(this.animate)

        this.deltaTime = currentTime - this.lastUpdate

        this.clear(this.context)
        this.update(this.deltaTime / this.milliseconds)
        this.draw(this.context)

        this.lastUpdate = currentTime
    }
}
