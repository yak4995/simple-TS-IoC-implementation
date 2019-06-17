import * as dependencyMap from '../ioc-config.json';

export class IocProvider {
	
	private static readonly iocMap = dependencyMap;
	
	static async getInstance(key: string) {
		const path = this.iocMap[key].path;
		const className = this.iocMap[key].className;
		const targetClass = (await import(`./${path}/${className}`))[className];
		const valuesForInjecting = await Promise.all(
			this.iocMap[key]
			.args
			.filter((value: string) => this.iocMap[value])
			.map((valueForInjecting: string) => this.getInstance(valueForInjecting))
		);
		const preapredArgs = this.iocMap[key].args.map((value: string) => this.iocMap[value] ? valuesForInjecting.shift() : value);
		return new targetClass(...preapredArgs);
	}
}