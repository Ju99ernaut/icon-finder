import type { IconifyIconCustomisations } from '@iconify/iconify';
import type { IconifyRenderIcon } from '.';
import type { Icon } from '..';
import { iconToString, stringToIcon } from '../misc/icon';

/**
 * Generate HTML for SVG framework
 */
export function renderHTML(
	icon: string | Icon,
	customisations: IconifyIconCustomisations,
	callback: IconifyRenderIcon
): string {
	const name = typeof icon === 'string' ? icon : iconToString(icon);
	const data = callback(name, customisations);
	if (!data) {
		return '';
	}

	// Generate class name
	const iconItem = typeof icon === 'string' ? stringToIcon(icon) : icon;
	const className: string[] = ['iconify'];
	if (iconItem && iconItem.provider !== '') {
		className.push('iconify--' + iconItem.provider);
	}
	if (iconItem && iconItem.prefix !== '') {
		className.push('iconify--' + iconItem.prefix);
	}
	if (data.inline) {
		className.push('iconify-inline');
	}

	// Generate HTML
	const attributes = data.attributes;
	let html =
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="' +
		className.join(' ') +
		'"';
	for (const key in attributes) {
		html +=
			' ' + key + '="' + attributes[key as keyof typeof attributes] + '"';
	}
	html +=
		' data-icon="' +
		name +
		'"' +
		(data.inline ? ' style="vertical-align: -0.125em;"' : '') +
		'>' +
		data.body +
		'</svg>';
	return html;
}
