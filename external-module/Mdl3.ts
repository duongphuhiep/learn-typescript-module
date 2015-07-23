/**
 * An external module is wrap with the file,
 * however we can still wrap it again to create a namespace level
 */
export module Mdl3 {
	export interface Itf31 {
		f311(name: string): string;
	}

	export class Cls31 implements Itf31 {
		f311(name:string):string {
			return "Hello external with namespace Mdl3 "+name;
		}
	}
}