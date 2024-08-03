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
			<div {...useBlockProps()} className="container">
				<p>{texto}</p>
				<InnerBlocks allowedBlocks={["core/image"]} className="logos" />
			</div>
		</>
	);
}
