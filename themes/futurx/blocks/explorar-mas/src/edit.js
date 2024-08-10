import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import libro from "../../../assets/images/seguir-explorando.png";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { content, link } = attributes;
	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title={"Ajustes"}>
					<TextControl
						label="Texto"
						value={content || ""}
						onChange={(value) => setAttributes({ content: value })}
					/>
					<TextControl
						label="Link"
						value={link || ""}
						onChange={(value) => setAttributes({ link: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...blockProps}>
				<img src={libro} />
				<div className="texto">{content}</div>
			</section>
		</>
	);
}
