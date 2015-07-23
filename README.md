#Typescript Training

Use module and external library in typescript

##Internal Module [example](/internal-module)

* [`Mdl1.ts`](/internal-module/Mdl1.ts) is a typical internal module
* [`Mdl1bis.ts`](/internal-module/Mdl1bis.ts) extend the [`Mdl1.ts`](/internal-module/Mdl1.ts) using the [merging feature](http://www.typescriptlang.org/Handbook#declaration-merging-merging-modules) of Typescript. It references to the original [`Mdl1.ts`](/internal-module/Mdl1.ts) as following


	///<reference path="Mdl1.ts"/>

* The test [`Mdl1Consumer.ts`](/internal-module/Mdl1Consumer.ts) wants to use all functionality of `Mdl1` so it references to the [`Mdl1bis.ts`](/internal-module/Mdl1bis.ts) 


	///<reference path="Mdl1bis.ts"/>


To run the test, we must to compile and concatenate all the references into 1 file ([`all.js`](/internal-module/all.js)) with the `--out` option

	$ tsc --out all.js Mdl1Consumer.ts

Then you can execute

	$ node all.js

Output:

	 Hello Java
	 3
	 Great Script

##External Module [example](/external-module)

Use top-level `export` to define a external module 

* [`Mdl2.ts`](/external-module/Mdl2.ts) is a typical external module
* [`Mdl3.ts`](/external-module/Mdl3.ts) add namespace level to the module
* The test [`Consumer.ts`](/external-module/Consumer.ts) is compiled and run normally, it gives the following output:


	$ node Consumer.js

	Hello external TOTO
	Hello external with namespace Mdl3 TUTU





