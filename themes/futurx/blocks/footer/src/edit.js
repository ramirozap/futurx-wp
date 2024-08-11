import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	return (
		<footer {...useBlockProps()}>
			<div className="container">
				<InnerBlocks allowedBlocks={["futurx/tiendas"]} />
			</div>
		</footer>
	);
}
