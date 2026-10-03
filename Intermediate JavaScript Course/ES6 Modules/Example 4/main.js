import { myValue } from "./modules/my-module.js";
import * as myModule from "./modules/my-module.js";

console.log(myValue);
console.log(myModule.myValue);
setTimeout(() => {
    console.log(myValue);
    console.log(myModule.myValue);
    myValue = 3;
}, 1000);