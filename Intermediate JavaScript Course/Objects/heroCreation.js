function Hero (name, level) {
    this.name = name;
    this.level = level;
    
    //Just tried out of curiousity, don't do this
    // this.someFn = function () {
    //     console.log('Just some function.')
    // }
}

Hero.prototype.greet = function () {
    console.log (`${this.name} says Hello!`);
}

function Warrior (name, level , weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

Warrior.prototype.attack = function () {
    console.log(`${this.name} attacks with ${this.weapon}`);
}

function Healer (name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Healer.prototype.heal = function () {
    console.log (`${this.name} casts ${this.spell}`);
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

hero1.attack();
hero1.greet();
// hero1.someFn();

hero2.heal();
hero2.greet();