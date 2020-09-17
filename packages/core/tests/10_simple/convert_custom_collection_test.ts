/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'mocha';
import { expect } from 'chai';
import {
	rawDataToCollection,
	CollectionData,
} from '../../lib/converters/collection';
import { IconifyJSON } from '@iconify/types';
import { Icon } from '../../lib/icon';

describe('Testing converting custom collection information', () => {
	it('Invalid data', () => {
		let result: CollectionData | null;

		// Empty block
		result = rawDataToCollection({} as IconifyJSON);
		expect(result).to.be.equal(null);

		// Empty set
		result = rawDataToCollection({
			prefix: 'foo',
			icons: {},
		});
		expect(result).to.be.equal(null);

		// No information
		result = rawDataToCollection({
			prefix: 'foo',
			icons: {
				home: {
					body: '<g />',
				},
			},
		});
		expect(result).to.be.equal(null);
	});

	it('Simple data', () => {
		// Simple set with few icons
		const result = rawDataToCollection({
			info: {
				name: 'Test',
				author: {
					name: 'User',
				},
				license: {
					title: 'MIT',
					spdx: 'MIT',
				},
				palette: false,
				samples: ['home', 'account'],
			},
			prefix: 'foo',
			icons: {
				home: {
					body: '<g />',
				},
				account: {
					body: '<path d="" />',
				},
			},
		});
		const expected: CollectionData = {
			provider: '',
			prefix: 'foo',
			name: 'Test',
			total: 2,
			icons: [
				{
					provider: '',
					prefix: 'foo',
					name: 'account',
				},
				{
					provider: '',
					prefix: 'foo',
					name: 'home',
				},
			],
			info: {
				name: 'Test',
				prefix: 'foo',
				author: {
					name: 'User',
					url: '',
				},
				license: {
					title: 'MIT',
					spdx: 'MIT',
					url: '',
				},
				palette: false,
				version: '',
				category: '',
				samples: ['home', 'account'],
				total: 2,
			},
		};
		expect(result).to.be.eql(expected);
	});

	it('Resolving aliases', () => {
		// Simple set with aliases
		const result = rawDataToCollection({
			info: {
				name: 'Test',
				author: {
					name: 'User',
				},
				license: {
					title: 'MIT',
					spdx: 'MIT',
				},
				palette: false,
				samples: ['home', 'account'],
			},
			prefix: 'foo',
			icons: {
				'home': {
					body: '<g />',
				},
				'account': {
					body: '<path d="" />',
				},
				'arrow-left': {
					body: '<path d="" />',
				},
				// hidden
				'hidden-icon': {
					body: '<g />',
					hidden: true,
				},
			},
			aliases: {
				'house': {
					parent: 'home',
				},
				'house2': {
					parent: 'house',
					// should be ignored because values are falsy, so icon should be treated as alias
					hFlip: false,
					vFlip: false,
					rotate: 0,
				},
				'arrow-right': {
					parent: 'arrow-left',
					hFlip: true,
				},
				'arrow-up': {
					parent: 'arrow-right',
					rotate: 3,
				},
				'arrow-down': {
					parent: 'arrow-up',
					vFlip: true,
				},
				// parent is hidden
				'hidden-alias': {
					parent: 'hidden-icon',
				},
				'hidden-rotated-alias': {
					parent: 'hidden-icon',
					rotate: 1,
				},
				// invalid parent
				'bad-alias': {
					parent: 'no-such-icon',
				},
				'bad-alias2': {
					parent: 'bad-alias',
					hFlip: true,
				},
			},
		});
		const expectedIcons: Icon[] = [
			{
				provider: '',
				prefix: 'foo',
				name: 'account',
			},
			// 4 arrows
			{
				provider: '',
				prefix: 'foo',
				name: 'arrow-down',
			},
			{
				provider: '',
				prefix: 'foo',
				name: 'arrow-left',
			},
			{
				provider: '',
				prefix: 'foo',
				name: 'arrow-right',
			},
			{
				provider: '',
				prefix: 'foo',
				name: 'arrow-up',
			},
			// icon with aliases
			{
				provider: '',
				prefix: 'foo',
				name: 'home',
				aliases: ['house', 'house2'],
			},
		];

		expect(result).to.not.be.equal(null);
		expect(result!.icons).to.be.eql(expectedIcons);
		expect(result!.total).to.be.equal(expectedIcons.length);
	});
});
