/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { texto, alternativeStyle, link } = attributes;
	let classes = "book-card";
	if (alternativeStyle) {
		classes = classes.concat(" alternative");
	}

	return (
		<div {...useBlockProps.save()} className={classes}>
			{link ? (
				<a href={link} className="main-link">
					{texto}
				</a>
			) : (
				<div className="title">{texto}</div>
			)}
			<InnerBlocks.Content />
		</div>
	);
}
