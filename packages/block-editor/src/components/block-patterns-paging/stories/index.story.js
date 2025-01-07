/**
 * Internal dependencies
 */
import Pagination from '..';

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';

const meta = {
	title: 'Components/Pagination',
	component: Pagination,
	parameters: {
		docs: {
			description: {
				component: 'Pagination component displays a list of pages.',
			},
		},
		canvas: {
			sourceState: 'shown',
		},
	},
	argTypes: {
		currentPage: {
			description: 'The current page number.',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		numPages: {
			description: 'The total number of pages.',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
		changePage: {
			description: 'Callback function to call when a page is selected.',
			table: {
				type: { summary: 'Function' },
			},
			control: {
				disable: true,
			},
		},
		totalItems: {
			description: 'The total number of items.',
			table: {
				type: { summary: 'number' },
			},
			control: {
				type: 'number',
			},
		},
	},
};

export default meta;

export const Default = {
	args: {
		numPages: 5,
		totalItems: 100,
		currentPage: 1,
	},
	render: function Template( args ) {
		const [ currentPage, setCurrentPage ] = useState( args.currentPage );

		useEffect( () => {
			if ( args.currentPage !== currentPage ) {
				setCurrentPage( args.currentPage );
			}
		}, [ args.currentPage ] );

		const changePage = ( page ) => {
			if ( page >= 1 && page <= args.numPages ) {
				setCurrentPage( page );
			}
		};

		return (
			<div>
				<Pagination
					{ ...args }
					currentPage={ currentPage }
					changePage={ changePage }
				/>
			</div>
		);
	},
};
