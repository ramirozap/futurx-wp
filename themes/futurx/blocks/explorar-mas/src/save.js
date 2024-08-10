import { useBlockProps } from "@wordpress/block-editor";
import flecha from "../../../assets/images/flecha-capitulos.png";
import libro from "../../../assets/images/seguir-explorando.png";

export default function save({ attributes }) {
	const { content, link } = attributes;

	return (
		<section {...useBlockProps.save()}>
			<div className="container">
				<img src={libro} className="libro" />
				<div className="flecha">
					<img src={flecha} />
				</div>
				<a className="texto" href={link}>
					{content}
				</a>
			</div>
		</section>
	);
}
