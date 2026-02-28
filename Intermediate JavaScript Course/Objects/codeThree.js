const car = {
    make: "Volkswagen",
    model: "Golf",
    year: 2026,
    color: "blue",
    priceUSD: 40000,
    applyDiscount: function (discountPercentage) {
        const multiplier = 1 - discountPercentage / 100;
        this.priceUSD *= multiplier;
    },
    getSummary() {
        return `${this.year} ${this.make} ${this.model} in ${this.color}, priced at ${this.priceUSD} (USD).`;
    },
};

console.log(car["getSummary"]());
car["applyDiscount"](10);
console.log(car["getSummary"]());