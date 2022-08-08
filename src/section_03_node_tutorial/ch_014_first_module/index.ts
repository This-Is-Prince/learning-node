// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// import { john, peter } from "./names";
import { john, peter } from "./names";
import sayHi from "./utils";


sayHi("susan");
sayHi(john);
sayHi(peter);
