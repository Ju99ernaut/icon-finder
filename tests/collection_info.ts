import type { CollectionInfo } from '../lib/converters/info';

export const defaultCollectionInfo = (): CollectionInfo => {
	return {
		prefix: '',
		name: '',
		version: '',
		total: 0,
		author: {
			name: 'Unknown',
			url: '',
		},
		license: {
			title: 'Unknown',
			spdx: '',
			url: '',
		},
		samples: [],
		palette: false,
		category: '',
	};
};
