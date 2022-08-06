export class Layer {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D

    constructor(container: HTMLBodyElement | null) {
        this.canvas = document.createElement('canvas') as HTMLCanvasElement
        this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D

        this.context.globalCompositeOperation = 'screen'

        this.setContainerSize()

        container?.appendChild(this.canvas)

        addEventListener('resize', this.setContainerSize)
    }

    setContainerSize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
    }
}
