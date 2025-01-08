/**
 * Internal dependencies
 */
import BlockColorsStyleSelector from '..';

const meta = {
	title: 'BlockEditor/BlockColorsStyleSelector',
	component: BlockColorsStyleSelector,
	parameters: {
		docs: {
			canvas: {
				sourceState: 'shown',
			},
			description: {
				component:
					'The `BlockColorsStyleSelector` is a dropdown menu for selecting block colors, with built-in text and background color support.',
			},
		},
	},
	argTypes: {
		textColor: {
			control: 'color',
			description: 'Text color for the TextColor component.',
			table: {
				type: { summary: 'string' },
			},
		},
		backgroundColor: {
			control: 'color',
			description: 'Background color for the BackgroundColor component.',
			table: {
				type: { summary: 'string' },
			},
		},
		displayText: {
			control: { type: null },
			description: 'Text displayed inside the box (toggle button).',
			table: {
				type: { summary: 'string' },
			},
		},
		dropdownContent: {
			control: 'text',
			description: 'Content to render inside the dropdown.',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
};

export default meta;

export const Default = {
	args: {
		textColor: 'black',
		backgroundColor: 'lightgray',
		displayText: 'Select Color',
		dropdownContent: 'Block Colors Selector Content',
	},
	render: function Template( {
		textColor,
		backgroundColor,
		dropdownContent,
	} ) {
		const TextColor = () => (
			<span style={ { color: textColor } }>Hello</span>
		);

		const BackgroundColor = ( { children } ) => (
			<div
				style={ {
					backgroundColor,
					padding: '20px',
					borderRadius: '4px',
					display: 'inline-block',
				} }
			>
				{ children }
			</div>
		);

		return (
			<BlockColorsStyleSelector
				TextColor={ TextColor }
				BackgroundColor={ BackgroundColor }
				children={ dropdownContent }
			/>
		);
	},
};
