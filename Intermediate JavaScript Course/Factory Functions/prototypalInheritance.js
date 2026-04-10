function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const giveReputation = () => reputation++;
    const getReputation = () => {return reputation};
    return {name, getReputation, giveReputation};
}

// function createPlayer (name, level) {
//     const {getReputation, giveReputation} = createUser(name);

//     const increaseLevel = () => level++;
//     const getLevel = () => {return level};
//     return {name, getReputation, giveReputation, increaseLevel, getLevel};
// }

function createPlayer (name, level) {
    const user = createUser(name);

    const increaseLevel = () => level++;
    const getLevel = () => {return level};
    return Object.assign({}, user, {increaseLevel, getLevel});
}

const josh = createPlayer("Josh", 0);

josh.giveReputation();
josh.giveReputation();
josh.increaseLevel();
josh.increaseLevel();

console.log({
    name: josh.name,
    level: josh.getLevel(),
    reputation: josh.getReputation()
})