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
	const { texto, rol1, rol2, nombre } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="container">
				<div className="foto">
					<InnerBlocks.Content />
				</div>
				<div className="info">
					<div className="nombre">{nombre}</div>
					{rol1 ? (
						<div className="roles">
							<div className="rol">#{rol1}</div>
							{rol2 ? <div className="rol">#{rol2}</div> : null}
						</div>
					) : null}
					<div className="texto">{texto}</div>
				</div>
			</div>
		</section>
	);
}
