/**
 * A typical external module
 */
export interface Itf21 {
	f211(name: string): string;
}

export class Cls21 implements Itf21 {
	f211(name:string):string {
		return "Hello external "+name;
	}
}
