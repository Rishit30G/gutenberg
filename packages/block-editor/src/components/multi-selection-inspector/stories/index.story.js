/**
 * Internal dependencies
 */
import MultiSelectionInspector from '../';

const meta = {
	title: 'Components/MultiSelectionInspector',
	component: MultiSelectionInspector,
	parameters: {
		docs: {
			description: {
				component:
					'The `MultiSelectionInspector` component is used to display the inspector for multiple selected blocks. The number of blocks is updated based on the state of the selected blocks in the block editor',
			},
			canvas: { sourceState: 'shown' },
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { ...args } ) {
		return <MultiSelectionInspector { ...args } />;
	},
};
