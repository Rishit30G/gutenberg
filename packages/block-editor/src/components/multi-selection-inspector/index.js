/**
 * WordPress dependencies
 */
import { sprintf, _n } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { copy } from '@wordpress/icons';
import { __experimentalHStack as HStack } from '@wordpress/components';

/**
 * Internal dependencies
 */
import BlockIcon from '../block-icon';
import { store as blockEditorStore } from '../../store';

/**
 * MultiSelection Inspector component displays the number of selected blocks.
 *
 * @example
 * ```jsx
 * import { <MultiSelectionInspector /> } from '@wordpress/block-editor';
 *
 * const SelectedBlockCount = getSelectedBlockCount();
 *
 * if ( SelectedBlockCount > 1 ) {
 *    const MyMultiSelectionInspector = () => <MultiSelectionInspector />;
 *}
 *```
 *
 * @return {Element} MultiSelectionInspector
 */
export default function MultiSelectionInspector() {
	const selectedBlockCount = useSelect(
		( select ) => select( blockEditorStore ).getSelectedBlockCount(),
		[]
	);
	return (
		<HStack
			justify="flex-start"
			spacing={ 2 }
			className="block-editor-multi-selection-inspector__card"
		>
			<BlockIcon icon={ copy } showColors />
			<div className="block-editor-multi-selection-inspector__card-title">
				{ sprintf(
					/* translators: %d: number of blocks */
					_n( '%d Block', '%d Blocks', selectedBlockCount ),
					selectedBlockCount
				) }
			</div>
		</HStack>
	);
}
