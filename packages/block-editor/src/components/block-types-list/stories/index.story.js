/**
 * Internal dependencies
 */
import BlockTypesList from '..';

/**
 * WordPress dependencies
 */
import { paragraph } from '@wordpress/icons';
import { registerBlockType } from '@wordpress/blocks';

// Register block types
registerBlockType( 'core/paragraph', {
	title: 'Paragraph',
} );

const meta = {
	title: 'Components/BlockTypesList',
	component: BlockTypesList,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'BlockTypesList component displays a list of block types.',
			},
		},
	},
	argTypes: {
		items: {
			description: 'An array of block types to display.',
			table: {
				type: { summary: 'Array' },
			},
			control: {
				type: 'array',
			},
		},
		onSelect: {
			description:
				'Callback function to call when a block type is selected.',
			table: {
				type: { summary: 'Function' },
			},
			control: {
				type: 'function',
			},
		},
		onHover: {
			description:
				'Callback function to call when a block type is hovered.',
			table: {
				type: { summary: 'Function' },
			},
			control: {
				type: 'function',
			},
		},
		label: {
			description: 'A label for the list.',
			table: {
				type: { summary: 'String' },
			},
			control: {
				type: 'text',
			},
		},
		isDraggable: {
			description: 'Whether the block types should be draggable.',
			table: {
				type: { summary: 'Boolean' },
			},
			control: {
				type: 'boolean',
			},
		},
	},
};

export default meta;

// Array of items for BlockTypesList
const items = [
	{
		id: 'core/paragraph',
		name: 'core/paragraph',
		title: 'Paragraph',
		icon: paragraph,
		initialAttributes: { placeholder: 'Write something...' },
		innerBlocks: [],
		isDisabled: false,
		syncStatus: 'synced',
	},
];

// Fixed Default Story
export const Default = {
	args: {
		items,
		onSelect: () => {},
		onHover: () => {},
		label: 'Blocks',
		isDraggable: true,
	},
	render: function Template( args ) {
		return <BlockTypesList { ...args } />;
	},
};
