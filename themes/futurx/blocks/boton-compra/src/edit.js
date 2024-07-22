import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { texto, link } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={"Ajustes"}>
					<TextControl
						label="Link"
						value={link || ""}
						onChange={(value) => setAttributes({ link: value })}
					/>
					<TextControl
						label="Texto"
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<a {...useBlockProps()} href={link}>
				{texto}
			</a>
		</>
	);
}
