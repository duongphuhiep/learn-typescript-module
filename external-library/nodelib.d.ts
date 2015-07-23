/**
 * describe the shape of a nodejs module
 */

declare module "path" {
	export function join(...paths: any[]): string;
	export function extname(p: string): string;
}