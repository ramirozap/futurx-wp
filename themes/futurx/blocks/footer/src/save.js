import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save() {
	return (
		<footer {...useBlockProps.save()}>
			<div className="container">
				<InnerBlocks.Content />
			</div>
		</footer>
	);
}
