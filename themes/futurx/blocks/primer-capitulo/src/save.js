/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

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
	const { titulo, subtitulo, texto } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<div className="container">
				<div className="textos">
					<div className="titulos">
						{titulo && <h2>{titulo}</h2>}
						<RichText.Content tagName="h3" value={subtitulo} />
					</div>
					{texto && <p>{texto}</p>}
					<InnerBlocks.Content className={"read-first-chapter"} />
				</div>
			</div>
		</div>
	);
}
