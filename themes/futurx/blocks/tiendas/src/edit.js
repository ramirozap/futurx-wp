import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { texto, alternativeStyle, link } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Ajustes", "primer-capitulo")}>
					<TextControl
						label={__("Texto", "primer-capitulo")}
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
					<TextControl
						label={__("Link", "primer-capitulo")}
						value={link || ""}
						onChange={(value) => setAttributes({ link: value })}
					/>
					<ToggleControl
						label="Estilo alternativo"
						help={alternativeStyle ? "Estilo Gris" : "Estilo Violeta"}
						checked={alternativeStyle}
						onChange={(newValue) => {
							setAttributes({ alternativeStyle: newValue });
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} className="book-cards">
				<div className="title">{texto}</div>
				<InnerBlocks allowedBlocks={["futurx/boton-compra"]} />
			</div>
		</>
	);
}
