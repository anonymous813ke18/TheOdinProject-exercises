function User(name) {
    this.name = name;
    this.discordName = "@" + name;
}

User.prototype.returnDiscord = function () {
    return this.discordName;
};

function createUser(name) {
    const discordName = "@" + name;

    const returnDiscordName = () => {return discordName};
    return {name, returnDiscordName};
}

const user1 = new User("Hammad");
const user2 = createUser("Khan");

console.log (user1.returnDiscord());
console.log(user2.returnDiscordName());