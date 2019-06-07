class GameCharacter {
    constructor (xParam, yParam) {
        if (xParam < 0) {
            throw new Error("Wrong position")
        }

        this.x = xParam
        this.y = yParam
        this.life = 100
        this.armorType = Math.round(Math.random() * 3)
    }

    die() {
        console.log("you are dead")
    }

    receiveHit(strength) {
        this.life -= strength
        console.log(`ouch!!!! remaining life is ${this.life}`)

        if (this.life <= 0) {
            this.die()
        }
    }

    move(x, y) {
        console.log(`new destination is ${x}, ${y}`)
    }
}

class Warrior extends GameCharacter {
    constructor(xParam, yParam, swordTypeParam){
        super(xParam, yParam)
        this.swordType = swordTypeParam
    }

    attack() {
        console.log("i am attacking")
    }
}

class Probe extends GameCharacter {
    constructor(xParam, yParam){
        super(xParam, yParam)
    }

    extractMineral() {
        console.log("i am extracting mineral")
    }
}