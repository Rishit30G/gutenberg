/**
 * WordPress dependencies
 */
import { getBlockMenuDefaultClassName } from '@wordpress/blocks';
import { useInstanceId } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import InserterListItem from '../inserter-list-item';
import { InserterListboxGroup, InserterListboxRow } from '../inserter-listbox';

function chunk( array, size ) {
	const chunks = [];
	for ( let i = 0, j = array.length; i < j; i += size ) {
		chunks.push( array.slice( i, i + size ) );
	}
	return chunks;
}

/**
 * Renders a list of block types.
 *
 * @example
 * ```jsx
 * const items = [
 * 	{ id: 'core/paragraph', icon: paragraph, title: 'Paragraph' },
 * 	{ id: 'core/image', title: 'Image' },
 * ];
 *
 * function MyBlockTypesList() {
 * 	return (
 * 		<BlockTypesList
 * 			items={ items }
 * 			onSelect={ ( item ) => console.log( 'Selected:', item ) }
 * 			onHover={ ( item ) => console.log( 'Hovered:', item ) }
 * 			label="Block types"
 *          isDraggable={ false }
 *          children={ <div>Custom content</div> }
 * 		/>
 *
 * ```
 * @param {Object}      props             Component props.
 * @param {Array}       props.items       An array of block types to display.
 * @param {Function}    props.onSelect    Callback function to call when a block type is selected.
 * @param {Function}    props.onHover     Callback function to call when a block type is hovered.
 * @param {string}      props.label       A label for the list.
 * @param {boolean}     props.isDraggable Whether the blocks are draggable.
 * @param {JSX.Element} props.children    Custom content to render at the end of the list
 *
 * @return {Element} The block types list component.
 */
function BlockTypesList( {
	items = [],
	onSelect,
	onHover = () => {},
	children,
	label,
	isDraggable = true,
} ) {
	const className = 'block-editor-block-types-list';
	const listId = useInstanceId( BlockTypesList, className );
	return (
		<InserterListboxGroup className={ className } aria-label={ label }>
			{ chunk( items, 3 ).map( ( row, i ) => (
				<InserterListboxRow key={ i }>
					{ row.map( ( item, j ) => (
						<InserterListItem
							key={ item.id }
							item={ item }
							className={ getBlockMenuDefaultClassName(
								item.id
							) }
							onSelect={ onSelect }
							onHover={ onHover }
							isDraggable={ isDraggable && ! item.isDisabled }
							isFirst={ i === 0 && j === 0 }
							rowId={ `${ listId }-${ i }` }
						/>
					) ) }
				</InserterListboxRow>
			) ) }
			{ children }
		</InserterListboxGroup>
	);
}

export default BlockTypesList;
