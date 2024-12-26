/**
 * Internal dependencies
 */
import EditableText from '../';

const meta = {
	component: EditableText,
	title: 'BlockEditor/EditableText',
	parameters: {
		docs: {
			description: {
				component:
					'The `EditableText` component allows to display a text that can be edited by the user.',
			},
			canvas: { sourceState: 'shown' },
		},
	},
	argTypes: {
		value: {
			control: 'text',
			description: 'The value of the editable text.',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description:
				'Called when a selection is made. If `null`, _Default_ is selected.',
			table: {
				type: { summary: 'function' },
			},
		},
		className: {
			control: 'text',
			description: 'The class name of the editable text.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( props ) {
		return (
			<EditableText
				className={ props.className }
				value={ props.value }
				onChange={ props.onChange }
			/>
		);
	},
	args: {
		value: 'Hello World!',
	},
};
