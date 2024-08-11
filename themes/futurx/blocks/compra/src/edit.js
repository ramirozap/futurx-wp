import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="container">
				<InnerBlocks allowedBlocks={["futurx/tiendas"]} />
			</div>
		</div>
	);
}
