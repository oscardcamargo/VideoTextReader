import Bard from "bard-ai";

let myBard = new Bard(COOKIE);

console.log(await myBard.ask("Hello, world!"));