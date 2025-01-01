/**
 * WordPress dependencies
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Flex, FlexItem } from '@wordpress/components';
import { dragHandle } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import BlockIcon from '../block-icon';

/**
 * The BlockDraggableChip component renders a chip that can display
 * additional metadata for draggable blocks.
 *
 * @example
 * ```jsx
 * function Example() {
 *   return (
 *     <BlockDraggableChip
 *       count={3}
 *       icon={<svg>...</svg>}
 *       isPattern={true}
 *       fadeWhenDisabled={false}
 *     />
 *   );
 * }
 * ```
 *
 * @param {Object}        props                  The props for the BlockDraggableChip component.
 * @param {number}        props.count            The number of blocks associated with the draggable chip.
 * @param {string|Object} props.icon             The icon of the block. This can be any of [WordPress' Dashicons](https://developer.wordpress.org/resource/dashicons/), or a custom `svg` element.
 * @param {boolean}       props.isPattern        Whether the chip represents a pattern block.
 * @param {boolean}       props.fadeWhenDisabled Whether to visually fade the chip when dragging is disabled.
 *
 * @return {Element} The rendered BlockDraggableChip component.
 */
export default function BlockDraggableChip( {
	count,
	icon,
	isPattern,
	fadeWhenDisabled,
} ) {
	const patternLabel = isPattern && __( 'Pattern' );
	return (
		<div className="block-editor-block-draggable-chip-wrapper">
			<div
				className="block-editor-block-draggable-chip"
				data-testid="block-draggable-chip"
			>
				<Flex
					justify="center"
					className="block-editor-block-draggable-chip__content"
				>
					<FlexItem>
						{ icon ? (
							<BlockIcon icon={ icon } />
						) : (
							patternLabel ||
							sprintf(
								/* translators: %d: Number of blocks. */
								_n( '%d block', '%d blocks', count ),
								count
							)
						) }
					</FlexItem>
					<FlexItem>
						<BlockIcon icon={ dragHandle } />
					</FlexItem>
					{ fadeWhenDisabled && (
						<FlexItem className="block-editor-block-draggable-chip__disabled">
							<span className="block-editor-block-draggable-chip__disabled-icon"></span>
						</FlexItem>
					) }
				</Flex>
			</div>
		</div>
	);
}
