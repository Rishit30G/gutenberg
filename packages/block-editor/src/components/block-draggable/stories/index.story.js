/**
 * Internal dependencies
 */
import BlockDraggableChip from '../draggable-chip';

/**
 * WordPress dependencies
 */
import { paragraph } from '@wordpress/icons';

export default {
	title: 'BlockEditor/BlockDraggable',
	component: BlockDraggableChip,
	parameters: {
		docs: {
			description: {
				component:
					'The `BlockDraggableChip` component allows to display a "chip" which contains the count of blocks.',
			},
			canvas: { sourceState: 'shown' },
		},
	},
	argTypes: {
		count: {
			control: 'number',
			description: 'The count of blocks.',
			table: {
				type: { summary: 'number' },
			},
		},
		icon: {
			control: 'select',
			options: [ 'none', 'paragraph' ],
			mapping: {
				none: null,
				paragraph,
			},
			description:
				'The icon of the block. This can be any of [WordPress Dashicons](https://developer.wordpress.org/resource/dashicons/), or a custom `svg` element.',
			table: {
				type: { summary: 'string | object' },
			},
		},
		isPattern: {
			control: 'boolean',
			description: 'Whether the block is a pattern.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		fadeWhenDisabled: {
			control: 'boolean',
			description: 'Whether the block should fade when disabled.',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

export const Default = {
	args: {
		count: 2,
		fadeWhenDisabled: false,
		icon: null,
		isPattern: false,
	},
	render: ( props ) => {
		// Create a wrapper box for the absolutely-positioned child component.
		const wrapperStyle = { margin: '24px 0', position: 'relative' };
		const count = props.count < 0 ? 0 : props.count;
		return (
			<div style={ wrapperStyle }>
				<BlockDraggableChip
					count={ count }
					fadeWhenDisabled={ props.fadeWhenDisabled }
					icon={ props.icon !== null ? props.icon : undefined }
					isPattern={ props.isPattern }
				/>
			</div>
		);
	},
};
