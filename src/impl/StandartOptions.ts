import { IOptions } from '../IOptions';

export class StandartOptions extends IOptions {
    
    constructor(
        private readonly config: object,
    ) {
        super();
    }

    getKeys(): string[] {
        return Object.keys(this.config);
    }
    
    getValue(key: string): string {
        return this.config[key];
    }
}
