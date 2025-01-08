/**
 * Internal dependencies
 */
import CopyHandler from '..';

const meta = {
	title: 'Components/CopyHandler',
	component: CopyHandler,
	parameters: {
		docs: {
			canvas: {
				sourceState: 'shown',
			},
			description: {
				component:
					'The `CopyHandler` component provides a copy handler for the block editor. It is currently deprecated in favor of `BlockCanvas` or `WritingFlow`.',
			},
		},
	},
	argTypes: {
		props: {
			control: { type: 'object' },
			description:
				'Additional properties to pass to the `CopyHandler` component.',
			table: {
				type: { summary: 'object' },
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( args ) {
		return <CopyHandler { ...args } />;
	},
};
