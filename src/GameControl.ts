import Snack from "./Snack";
import Food from "./Food";
import ScorePannel from "./ScorePannel";
class GameControl
{
    snake:Snack;
    food:Food;
    scorePanel:ScorePannel;
    direction:string;
    isLive:boolean;
    timer:number
    time:number
    lastLevel:number

    constructor() {
        this.isLive = true
        this.lastLevel = 0
        this.timer = 0
        this.time = 300
        this.direction = ''
        this.snake = new Snack()
        this.food =  new Food()
        this.scorePanel = new ScorePannel()
    }
    run()
    {
        alert('请按上下左右方向键进行游戏')
        // 监听键盘事件
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        // 根据等级的提升加快蛇的移动速度,蛇存活的情况下执行
        if (this.isLive) this.timer = setInterval(()=>this.snackMove(this.direction),this.time)
    }
    keydownHandler(event:KeyboardEvent)
    {
        const lastDirection = this.direction
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown' && event.key !== 'ArrowLeft' && event.key !== 'ArrowRight')
        {
            this.direction = lastDirection
        }
        else
        {
            this.direction = event.key
        }
    }
    //蛇的移动方法
    snackMove(direction:string)
    {
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break;
            case "ArrowDown":
                Y += 10
                break;
            case "ArrowLeft":
                X -= 10
                break;
            case "ArrowRight":
                X += 10
                break;
        }
        try
        {
            this.CheckFood(X,Y)
            this.snake.X = X
            this.snake.Y = Y
        }
        catch (e) {
            this.isLive = false
            alert(e.message)
            clearInterval(this.timer)
        }

    }
    // eatFood
    CheckFood(xpos:number,ypos:number)
    {
        if (this.food.X === xpos && this.food.Y === ypos)
        {
            this.food.change()
            this.snake.addBody()
            this.scorePanel.addScore()
            this.checkSpeed(this.scorePanel.level)
        }
    }

    checkSpeed(value:number)
    {
        if (this.lastLevel === value) return
        this.time = 300 -value * 25;
        clearInterval(this.timer)
        this.timer = setInterval(()=>this.snackMove(this.direction),this.time)
        this.lastLevel = value
    }

}
export default GameControl