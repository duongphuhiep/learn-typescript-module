#Typescript Training

Demonstration of how use module and consume external library in [Typescript](http://www.typescriptlang.org/). See the [typescript handbook](http://www.typescriptlang.org/Handbook#modules) for more information.

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

##External library [example](/external-library)

* File `*.d.ts` defines an Ambient Module (which contains only declaration, without any implementation)
* Ambient module describes the shape of external library
* if the external library is load through a script tag, use **Ambient Internal Module**
* Use **Ambient External Module** with quoted name to describe a nodejs modules

###Ambient Internal Module

* [`extlib1.js`](/external-library/extlib1.js) is a external library
* [`extlib1.d.ts`](/external-library/extlib1.d.ts) is an ambient module to describe the shape of this library
* The typescript test [`ConsumerExtlib1.ts`](/external-library/ConsumerExtlib1.ts) consume the [`extlib1.js`](/external-library/extlib1.js) library
* The library [`extlib1.js`](/external-library/extlib1.js) is loaded in the `script` tag of [`index.html`](/external-library/index.html)


	<script language="javascript" src="extlib1.js"></script>
 
###Ambient External Module

* [`nodelib.d.ts`](/external-library/nodelib.d.ts) describes the shape of a nodejs module (it's the [*`path`* module](https://nodejs.org/api/path.html) in this example) 
* The test [`ConsumerNodelib.ts`](/external-library/ConsumerNodelib.ts) must to reference to the ambient declaration file and import the module:
 
  
	 ///<reference path="nodelib.d.ts"/>
    import path=require("path");

The execution output:

	$ node ConsumerNodelib.js
    a\b
    .txt

See also: [`typescript-require`](https://github.com/eknkc/typescript-require)

##Conclusion

We can easily organize our typescript project into modules and consume other javascript library (which are not wrote in Typescript)