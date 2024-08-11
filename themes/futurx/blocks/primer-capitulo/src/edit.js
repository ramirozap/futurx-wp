/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks,
} from "@wordpress/block-editor";
import { PanelBody, TextControl } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { titulo, subtitulo, texto } = attributes;

	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Ajustes", "primer-capitulo")}>
					<TextControl
						label={__("Titulo", "primer-capitulo")}
						value={titulo || ""}
						onChange={(value) => setAttributes({ titulo: value })}
					/>
					<TextControl
						label={__("Texto", "primer-capitulo")}
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="container">
					<div className="textos">
						<div className="titulos">
							{titulo && <h2>{titulo}</h2>}
							<RichText
								{...blockProps}
								tagName="h3" // The tag here is the element output and editable in the admin
								value={subtitulo} // Any existing content, either from the database or an attribute default
								onChange={(content) => setAttributes({ subtitulo: content })} // Store updated content as a block attribute
								placeholder={__("Subtitulo...")} // Display this text before any content has been added by the user
							/>
						</div>
						{texto && <p>{texto}</p>}
						<InnerBlocks allowedBlocks={["core/file"]} />
					</div>
				</div>
			</div>
		</>
	);
}
