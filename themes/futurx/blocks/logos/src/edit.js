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
			<div {...useBlockProps()} className="book-cards">
				<div className="title">{texto}</div>
				<InnerBlocks allowedBlocks={["core/image"]} />
			</div>
		</>
	);
}
