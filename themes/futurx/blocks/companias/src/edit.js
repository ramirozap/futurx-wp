import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, TextareaControl, TextControl } from "@wordpress/components";
import flechas from "../../../assets/images/flechas.png";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { nombre1, nombre2, descripcion1, descripcion2, link1, link2 } =
		attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Ajustes">
					<TextControl
						label="Nombre"
						value={nombre1 || ""}
						onChange={(value) => setAttributes({ nombre1: value })}
					/>
					<TextControl
						label="Link"
						value={link1 || ""}
						onChange={(value) => setAttributes({ link1: value })}
					/>
					<TextareaControl
						label="Descripcion"
						value={descripcion1 || ""}
						onChange={(value) => setAttributes({ descripcion1: value })}
					/>
					<TextControl
						label="Nombre segunda compañia"
						value={nombre2 || ""}
						onChange={(value) => setAttributes({ nombre2: value })}
					/>
					<TextControl
						label="Link segunda compañia"
						value={link2 || ""}
						onChange={(value) => setAttributes({ link2: value })}
					/>
					<TextareaControl
						label="Descripcion segunda compañia"
						value={descripcion2 || ""}
						onChange={(value) => setAttributes({ descripcion2: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				<div className="container">
					<div className="compania">
						<div className="nombre">{nombre1}</div>
						<div className="texto">{descripcion1}</div>
					</div>
					<div className="flechas">
						<img src={flechas} />
					</div>
					<div className="compania">
						<div className="nombre">{nombre2}</div>
						<div className="texto">{descripcion2}</div>
					</div>
				</div>
			</section>
		</>
	);
}
