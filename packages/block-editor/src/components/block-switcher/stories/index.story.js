/**
 * Internal dependencies
 */
import BlockSwitcher from '..';

/**
 * WordPress dependencies
 */
import { registerCoreBlocks } from '@wordpress/block-library';
import { createBlock } from '@wordpress/blocks';
import { dispatch } from '@wordpress/data';

// Register core blocks for the story environment
registerCoreBlocks();

const blockEditorState = [
	createBlock( 'core/paragraph' ),
	createBlock( 'core/heading' ),
];

dispatch( 'core/block-editor' ).resetBlocks( blockEditorState );

const meta = {
	title: 'Components/BlockSwitcher',
	component: BlockSwitcher,
	parameters: {
		docs: {
			canvas: {
				sourceState: 'shown',
			},
			description: {
				component:
					'The BlockSwitcher component is used to switch between different block types.',
			},
		},
	},
	argTypes: {
		clientIds: {
			control: { type: null },
			description: 'The client IDs of the blocks to switch between.',
			table: {
				type: {
					summary: 'Array',
				},
			},
		},
	},
};

export default meta;

export const Default = {
	args: {
		clientIds: blockEditorState.map( ( block ) => block.clientId ),
	},
	render: function Template( args ) {
		return <BlockSwitcher { ...args } />;
	},
};
