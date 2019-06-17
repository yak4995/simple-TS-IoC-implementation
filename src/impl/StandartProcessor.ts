import { IProcessor } from '../IProcessor';
import { IOptions } from '../IOptions';

export class StandartProcessor extends IProcessor {
	
    constructor(
		private readonly someParam: string,
		private readonly options: IOptions,
	) {
        super();
    }
	
    process(input: string): string {
        console.log('IProcessor impementation');
        return `Param: ${this.someParam}\n` +
                `Options: {${this.options.getKeys().map(key => `${key} : ${this.options.getValue(key)}`)}}\n` +
                `Standard output: ${input.toLocaleUpperCase()}`;
    }
}
