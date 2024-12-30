/**
 * Internal dependencies
 */
import { FloatingToolbar } from '..';

const meta = {
	title: 'Components/FloatingToolbar',
	component: FloatingToolbar,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component: 'This is `FloatingToolbar` component.',
			},
		},
	},
	argTypes: {
		selectedClientId: {
			control: {
				type: 'text',
			},
			description: 'The selected block client ID.',
			table: {
				type: { summary: 'string' },
			},
		},
		parentId: {
			control: {
				type: 'text',
			},
			description: 'The parent block client ID.',
			table: {
				type: { summary: 'string' },
			},
		},
		showFloatingToolbar: {
			control: {
				type: 'boolean',
			},
			description: 'Whether the floating toolbar should be shown.',
			table: {
				type: { summary: 'boolean' },
			},
		},
		isRTL: {
			control: {
				type: 'boolean',
			},
			description: 'Whether the site is RTL.',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

export default meta;

export const Default = {
	args: {
		selectedClientId: 'block_1',
		parentId: 'block_0',
		showFloatingToolbar: true,
		isRTL: false,
	},
	render: function Template( args ) {
		return <FloatingToolbar { ...args } />;
	},
};
