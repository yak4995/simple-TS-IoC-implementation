export abstract class IOptions {
    abstract getKeys(): string[];
	abstract getValue(key: string): string;
}