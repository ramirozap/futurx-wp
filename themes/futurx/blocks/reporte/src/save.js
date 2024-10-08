/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import iamusicaenlatam from "../../../assets/images/iamusicaenlatam.png";

export default function save({ attributes }) {
	const { texto, textoLink, link } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="container">
				<div className="izquierda">
					<img src={iamusicaenlatam} alt="ia mas música en latam" />
					<a href={link} target="_blank" rel="noreferrer noopener">
						{textoLink}
					</a>
				</div>
				<div className="texto">{texto}</div>
			</div>
		</section>
	);
}
