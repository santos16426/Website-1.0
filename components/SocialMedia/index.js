import Links from "./links";
import { LinkWrapper, LinkMobile, LinkDesktop } from "./styles";
const SocialMediaLinks = () => (
	<LinkWrapper>
		<LinkMobile>
			<Links />
		</LinkMobile>
		<LinkDesktop>
			<Links />
		</LinkDesktop>
	</LinkWrapper>
);
export default SocialMediaLinks;
