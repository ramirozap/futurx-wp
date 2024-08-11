import { PanelBody, TextControl } from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { texto } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Ajustes">
					<TextControl
						label="Texto"
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div className="container">
					<p>{texto}</p>
					<div className="logos">
						<InnerBlocks allowedBlocks={["core/image"]} />
					</div>
				</div>
			</div>
		</>
	);
}
