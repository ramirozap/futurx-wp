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
						<div className="titulo">CONTEXT</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						Understanding AI <span className="separador">|</span> From
						Polarization to Tool <span className="separador">|</span> Universe
						of Tensions to Navigate <span className="separador">|</span>{" "}
						Rethinking Creation <span className="separador">|</span> Becoming
						Critical <span className="separador">|</span> Tool Kit
					</div>
				</div>
				<div className="capitulo">
					<div className="izquierda">
						<div className="capitulo-numero">
							<img src={dos} />
						</div>
						<div className="titulo">USES</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						Creative AI <span className="separador">|</span> Functional AI{" "}
						<span className="separador">|</span> Large Generative Models{" "}
						<span className="separador">|</span> Audio Language Models{" "}
						<span className="separador">|</span> The Prompting Era
					</div>
				</div>
				<div className="capitulo">
					<div className="izquierda">
						<div className="capitulo-numero">
							<img src={tres} />
						</div>
						<div className="titulo ultimo">LEGAL + ETHIC</div>
						<img src={flecha} className="flecha" />
					</div>
					<div className="derecha">
						Ethical and Legal Challenges <span className="separador">|</span> AI
						as a Co-Creation Tool <span className="separador">|</span> Training
						and Rights Ownership <span className="separador">|</span> Voice
						Cloning <span className="separador">|</span> Deepfakes{" "}
						<span className="separador">|</span> Towards a Clear Legal Framework
					</div>
				</div>
			</div>
		</section>
	);
}
