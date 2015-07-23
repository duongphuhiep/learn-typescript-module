/**
* A basic internal module
*/
var Mdl1;
(function (Mdl1) {
    var Cls11 = (function () {
        function Cls11() {
        }
        Cls11.prototype.f111 = function (name) {
            return "Hello " + name;
        };

        /**
        * the additional method from the merged module in Mdl1bis
        * compilation error if you don't implement it
        */
        Cls11.prototype.f112 = function (n) {
            return n + 1;
        };
        return Cls11;
    })();
    Mdl1.Cls11 = Cls11;
})(Mdl1 || (Mdl1 = {}));
///<reference path="Mdl1.ts"/>
/**
* Merged to module Mdl1
* http://www.typescriptlang.org/Handbook#declaration-merging-merging-modules
*/
var Mdl1;
(function (Mdl1) {
    

    var Cls12 = (function () {
        function Cls12() {
        }
        Cls12.prototype.f121 = function (name) {
            return "Great " + name;
        };
        return Cls12;
    })();
    Mdl1.Cls12 = Cls12;
})(Mdl1 || (Mdl1 = {}));
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
