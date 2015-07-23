///<reference path="extlib1.d.ts"/>

/**
 * A typescript which consume the external library via Ambient Module
 * the external library was loaded in the script tag html
 */
function printHello(name: string) {
	var normalizeName:string = extlib1.normalize(name);
	greet.innerText = "Hello " + normalizeName;
}