import Links from "./navlinks";
import { NavlinkWrapper, NavLinkMobile, NavLinkDesktop } from "./styles";
const Navlinks = () => (
	<NavlinkWrapper>
		<NavLinkMobile>
			<Links />
		</NavLinkMobile>
		<NavLinkDesktop>
			<Links />
		</NavLinkDesktop>
	</NavlinkWrapper>
);
export default Navlinks;
