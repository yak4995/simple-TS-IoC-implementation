import { IocProvider } from './ioc';
import { IProcessor } from './IProcessor';

async function runner() {
	const processor: IProcessor = await IocProvider.getInstance('IProcessor');
	return processor.process('abc');
}

runner().then(result => console.log(result));