/**
 * Internal dependencies
 */
import InserterListItem from '..';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'core/paragraph', {
	title: 'Paragraph',
} );

const meta = {
	title: 'BlockEditor/Inserter/InserterListItem',
	component: InserterListItem,
	argTypes: {
		className: {
			control: {
				type: 'text',
			},
			description: 'The class name of the inserter list item',
			table: {
				type: { summary: 'string' },
			},
		},

		isFirst: {
			control: {
				type: 'boolean',
			},
			description: 'Is the item the first in the list',
			table: {
				type: { summary: 'boolean' },
			},
		},

		item: {
			control: {
				type: 'object',
			},
			description: 'The item to render',
			table: {
				type: { summary: 'object' },
			},
		},

		onSelect: {
			control: {
				type: 'function',
			},
			description: 'Function to call when the item is selected',
			table: {
				type: { summary: 'function' },
			},
		},

		onHover: {
			control: {
				type: 'function',
			},
			description: 'Function to call when the item is hovered',
			table: {
				type: { summary: 'function' },
			},
		},

		isDraggable: {
			control: {
				type: 'boolean',
			},
			description: 'Is the item draggable',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

export default meta;

const itemConfig = {
	name: 'core/paragraph',
	title: 'Paragraph',
	icon: <span>P</span>,
	initialAttributes: {
		placeholder: 'Write something...',
	},
	innerBlocks: [],
	isDisabled: false,
	syncStatus: 'synced',
};

export const Default = {
	args: {
		isFirst: true,
		item: itemConfig,
		onSelect: () => {},
		onHover: () => {},
		isDraggable: true,
	},
	render: function Template( { ...args } ) {
		return <InserterListItem { ...args } />;
	},
};
