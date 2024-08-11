import { useBlockProps } from "@wordpress/block-editor";
import flecha from "../../../assets/images/flecha-capitulos.png";
import uno from "../../../assets/images/1.png";
import dos from "../../../assets/images/2.png";
import tres from "../../../assets/images/3.png";

export default function save() {
	return (
		<section {...useBlockProps.save()}>
			<div className="container">
				<div className="capitulo">
					<div className="izquierda">
						<div className="capitulo-numero">
							<img src={uno} />
						</div>
						<div className="titulo">CONTEXTO</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						Entender la IA <span className="separador">|</span> De la
						polarización a la herramienta <span className="separador">|</span>{" "}
						Universo de tensiones a habitar <span className="separador">|</span>{" "}
						Repensar la creación <span className="separador">|</span> Volvernos
						críticos <span className="separador">|</span> Tool Kit
					</div>
				</div>
				<div className="capitulo">
					<div className="izquierda">
						<div className="capitulo-numero">
							<img src={dos} />
						</div>
						<div className="titulo">USOS</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						IA creativa <span className="separador">|</span> IA funcional{" "}
						<span className="separador">|</span> Modelos Generativos de Gran
						Tamaño <span className="separador">|</span> Modelos de Lenguaje de
						Audio <span className="separador">|</span> La era del prompteo
					</div>
				</div>
				<div className="capitulo">
					<div className="izquierda">
						<div className="capitulo-numero">
							<img src={tres} />
						</div>
						<div className="titulo ultimo">LEGAL + ÉTICO</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						Desafíos éticos y legales <span className="separador">|</span>{" "}
						Herramientas de Co-creación <span className="separador">|</span>{" "}
						Entrenamiento y Propiedad de Derechos{" "}
						<span className="separador">|</span> Clonación de Voz{" "}
						<span className="separador">|</span> Deepfakes{" "}
						<span className="separador">|</span> Hacia un Marco Legal Claro
					</div>
				</div>
				<h2 className="titulo">El FUTURX es colaborativo</h2>
			</div>
		</section>
	);
}
