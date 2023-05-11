class Food{
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')
    }
    // 获取食物坐标的方法
    get X()
    {
        return this.element.offsetLeft
    }
    get Y()
    {
        return this.element.offsetTop
    }

    change():void
    {
        const newPosition = this.randomPosition()
        console.log(newPosition)
        const x:number = newPosition.x;
        const y:number = newPosition.y;
        this.element.style.left =  x + 'px'
        this.element.style.top =  y +'px'
    }
    randomPosition():{x:number,y:number}
    {
        // 食物最小位置为0,最大位置290,
        const x:number = Math.round(Math.random()*29)*10
        const y:number = Math.round(Math.random()*29)*10
        let position:{x:number,y:number} = {x,y};
        return position;
    }

}

export default Food