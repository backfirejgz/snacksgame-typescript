class ScorePannel
{
    score:number = 0;
    level:number = 0;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
    maxLevel:number;
    scoreToLevel:number;
    constructor(maxLevel:number = 10,scoreToLevel:number = 5) {
        this.maxLevel = maxLevel
        this.scoreToLevel = scoreToLevel
        this.scoreEl = document.getElementById('scorenum')
        this.levelEl = document.getElementById('levelnum')
    }
    addScore():void
    {
        this.score++;
        console.log(this.score)
        if (this.score % this.scoreToLevel === 0)
        {
            this.addLevel()
        }
        this.scoreEl.innerHTML = this.score + ''
    }
    addLevel():void
    {
        this.level++;
        if (this.level < this.maxLevel)
        {
            this.levelEl.innerHTML = this.level + ''
        }
    }
}
export default ScorePannel;