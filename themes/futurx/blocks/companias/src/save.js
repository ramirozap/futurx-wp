/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import flechas from "../../../assets/images/flechas.png";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<section {...useBlockProps.save()}>
			<div className="container">
				<div className="compania">
					<div className="nombre">FUTURX</div>
					<div className="texto">
						Es un centro de investigación y desarrollo (I+D) con foco en la
						intersección entre la música, la tecnología y la cultura de
						internet.
					</div>
				</div>
				<div className="flechas">
					<img src={flechas} />
				</div>
				<div className="compania">
					<div className="nombre">LARROSA</div>
					<div className="texto">
						Es una compañía especializada en tecnología avanzada, financiación y
						soluciones discográficas para la industria musical.
					</div>
				</div>
			</div>
		</section>
	);
}
