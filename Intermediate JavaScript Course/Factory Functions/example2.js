function createUser (name) {
    const discordName = "@" + name;

    let reputation = 0;
    const giveReputation = () => {reputation++};
    const getReputation = () => {return reputation};

    return {name, discordName, giveReputation, getReputation};
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});