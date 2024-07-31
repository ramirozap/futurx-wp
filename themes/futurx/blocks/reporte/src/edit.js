import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";
import "./editor.scss";
import iamusicaenlatam from "../../../assets/images/iamusicaenlatam.png";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { texto, textoLink, link } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Ajustes">
					<TextControl
						label="Texto"
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
					<TextControl
						label="Texto Link"
						value={textoLink || ""}
						onChange={(value) => setAttributes({ textoLink: value })}
					/>
					<TextControl
						label="Link"
						value={link || ""}
						onChange={(value) => setAttributes({ link: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()}>
				<div>
					<img src={iamusicaenlatam} alt="ia mas música en latam" />
					<a>{textoLink}</a>
				</div>
				<div className="texto">{texto}</div>
			</div>
		</>
	);
}
