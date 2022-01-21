/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			<pre>
				{__('More rapid than eagles his coursers they came,\n' +
					'And he whistled, and shouted, and called them by name;\n' +
					'"Now, Dasher! now, Dancer! now, Prancer and Vixen!\n' +
					'On, Comet! on, Cupid! on, Donder and Blitzen!\n' +
					'To the top of the porch! to the top of the wall!\n' +
					'Now dash away! dash away! dash away all!', 'reindeer-poem')}
			</pre>
			{ __( 'Reindeer Poem – hello from the editor!', 'reindeer-poem' ) }
		</p>
	);
}
