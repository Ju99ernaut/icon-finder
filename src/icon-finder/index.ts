import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

(window as any).IconFinder = Wrapper;
const container = document.getElementById('iconify-finder');
if (container) {
	const wrapper = new Wrapper({
		container,
		callback: (event: IconFinderEvent) => {
			console.log('Event:', event);
		},
	});
}
