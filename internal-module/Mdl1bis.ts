///<reference path="Mdl1.ts"/>

/**
 * Merged to module Mdl1
 * http://www.typescriptlang.org/Handbook#declaration-merging-merging-modules
 */
module Mdl1 {

	//merge interface
	export interface Itf11 {
		f112(n: number): number;
	}

	export interface Itf12 {
		f121(name: string): string;
	}

	export class Cls12 implements Itf12 {
		f121(name:string):string {
			return "Great "+name;
		}
	}
}