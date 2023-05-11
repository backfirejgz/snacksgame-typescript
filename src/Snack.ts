import scorePannel from "./ScorePannel";

class Snack
{
    head: HTMLElement
    bodys: HTMLCollection
    element: HTMLElement
    constructor() {
        this.element = document.getElementById('snack')
        // 获取蛇的头部
        this.head = document.querySelector('#snack>div')
        // 获取蛇的身体
        this.bodys = this.element.getElementsByTagName('div')
    }
    get X()
    {
        return this.head.offsetLeft
    }
    get Y()
    {
        return this.head.offsetTop
    }
    set X(value)
    {
        if (this.X === value) return
        if (value < 0 || value > 290)
        {
            throw new Error('🐍撞墙了')
        }
        // 发生掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft === value)
        {
            if (value > this.X)
            {
                value = this.X -10
            }
            else
            {
                value = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkAttackSelf(value,this.Y)



    }
    set Y(value)
    {
        if (this.Y === value) return
        if (value < 0 || value > 290)
        {
            throw new Error('🐍撞墙了')
        }
        // 处理掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop === value)
        {
            // 向下掉头
            if (value > this.Y)
            {
                value = this.Y - 10
            }
            else
            {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkAttackSelf(this.X,value)


        console.log('this.movebody执行')
    }
    addBody()
    {
        this.element.insertAdjacentHTML("beforeend", '<div></div>')
    }

    moveBody()
    {
        console.log(this.bodys)
        for (let i = this.bodys.length - 1; i > 0 ; i--)
        {

            const x = (this.bodys[i-1] as HTMLElement).offsetLeft
            const y = (this.bodys[i-1] as HTMLElement).offsetTop;
            (this.bodys[i] as HTMLElement).style.left = x +'px';
            (this.bodys[i] as HTMLElement).style.top = y +'px';
        }
    }

    checkAttackSelf(x:number,y:number)
    {
        for (let i = 1; i < this.bodys.length ; i++)
        {
            if ((this.bodys[i] as HTMLElement).offsetLeft === x && (this.bodys[i] as HTMLElement).offsetTop === y)
            {
                throw new Error('🐍头撞向了身体')
            }
        }
    }

}

export default Snack;
