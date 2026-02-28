const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function () {
        return "Hello World!"
    },
};

const variable = "otherProperty";

console.log(`${myObject.property}`);
console.log(`${myObject[variable]}`);
console.log(`${myObject["obnoxious property"]()}`);
//we can't do myObject."obnoxious property" or myObject.variable 