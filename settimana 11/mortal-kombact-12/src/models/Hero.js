export default class Hero {
    constructor(name, lifePoints, attack, img) {
        this._lifePoints = lifePoints;
        this.attack = attack;
        this.img = img;
        this.name = name;
    }

    get lifePoints() {
        return this._lifePoints < 0 ? 0 : this._lifePoints;
    }
}