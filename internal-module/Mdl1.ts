/**
 * A basic internal module
 */
module Mdl1 {
	export interface Itf11 {
		f111(name: string): string;
	}

	export class Cls11 implements Itf11 {
		f111(name:string):string {
			return "Hello "+name;
		}

		/**
		 * the additional method from the merged module in Mdl1bis
		 * compilation error if you don't implement it
		 */
		f112(n:number):number {
			return n+1;
		}
	}
}