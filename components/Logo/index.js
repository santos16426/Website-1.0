import { Icon } from "antd";
import { LogoWrapper } from "./styles";
import Link from "next/link";

const Logo = () => (
	<LogoWrapper>
		<Link href="/">
			<img src="/images/firebase.png" alt="logo" />
		</Link>
	</LogoWrapper>
);
export default Logo;
