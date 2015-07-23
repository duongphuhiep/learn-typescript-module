///<reference path="Mdl1bis.ts"/>

var c1 = new Mdl1.Cls11();
console.log(c1.f111("Java"));
console.log(c1.f112(2));

var c2 = new Mdl1.Cls12();
console.log(c2.f121("Script"));

/*
Combine the Mdl1Consumer.ts and all the references in one file.
	$ tsc --out all.js Mdl1Consumer.ts

Then you can execute
	$ node all.js

Output:
	 Hello Java
	 3
	 Great Script
*/