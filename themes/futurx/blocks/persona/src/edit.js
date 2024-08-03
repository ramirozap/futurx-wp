import { PanelBody, TextareaControl, TextControl } from "@wordpress/components";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { texto, nombre, rol1, rol2 } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Ajustes">
					<TextareaControl
						label="Nombre"
						value={nombre || ""}
						onChange={(value) => setAttributes({ nombre: value })}
					/>
					<TextControl
						label="Rol"
						value={rol1 || ""}
						onChange={(value) => setAttributes({ rol1: value })}
					/>
					<TextControl
						label="Rol adicional"
						value={rol2 || ""}
						onChange={(value) => setAttributes({ rol2: value })}
					/>
					<TextareaControl
						label="Texto"
						value={texto || ""}
						onChange={(value) => setAttributes({ texto: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps()} className="persona">
				<div className="foto">
					<InnerBlocks allowedBlocks={["core/image"]} />
				</div>
				<div className="nombre">{nombre}</div>
				{rol1 ? (
					<div className="roles">
						<div className="rol">#{rol1}</div>
						{rol2 ? <div className="rol">#{rol2}</div> : null}
					</div>
				) : null}
				<div className="texto">{texto}</div>
			</div>
		</>
	);
}
