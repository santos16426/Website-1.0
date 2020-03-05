import { HoverTextWrapper } from "./styles";
const HoverText = ({ className, string }) => {
	let newString = string.split("");
	return (
		<HoverTextWrapper>
			<p className={className}>
				{newString.map(letter => (
					<div className="letter">{letter}</div>
				))}
			</p>
		</HoverTextWrapper>
	);
};
export default HoverText;
