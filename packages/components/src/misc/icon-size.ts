import Iconify from '@iconify/iconify';

interface IconDimensions {
	width: number | string;
	height: number | string;
}

/**
 * Calculate both dimensions
 */
export function getDimensions(
	width: number | string,
	height: number | string,
	ratio: number,
	rotated: boolean
): IconDimensions {
	if (width && height) {
		return {
			width: rotated ? height : width,
			height: rotated ? width : height,
		};
	}

	if (!height) {
		height = Iconify._internal.calculateSize(
			width,
			rotated ? ratio : 1 / ratio
		) as number | string;
	} else {
		width = Iconify._internal.calculateSize(
			height,
			rotated ? 1 / ratio : ratio
		) as number | string;
	}
	return {
		width,
		height,
	};
}
